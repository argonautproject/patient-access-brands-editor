import _ from "lodash";
import type { Brand } from "./types";

export interface BrandBundle {
  resourceType: "Bundle";
  type: "collection";
  entry: {
    fullUrl: string;
    resource: {
      resourceType: string;
      id: string;
      [x: string]: unknown;
    };
  }[];
}

interface Identifier {
  system: string;
  value: string;
}

interface Coding {
  system: string;
  code: string;
  display?: string;
}

interface CodeableConcept {
  coding: Coding[];
}

interface Reference {
  identifier?: Identifier;
  reference: string;
  display?: string;
}

interface Organization {
  resourceType: "Organization";
  id: string;
  extension: {
    url: string;
    valueString?: string;
    valueIdentifier?: Identifier;
    valueCoding?: Coding;
    valueUrl: string;
  }[];
  identifier?: Identifier[];
  name: string;
  alias: string[];
  address: {
    line: string[];
    city: string;
    state: string;
    postalCode: string;
  }[];
  telecom: Identifier[];
  type: CodeableConcept[];
  partOf: Reference;
}

function identifierFromUrl(url: string) {
  try {
    let u = new URL(url);
    return u.origin.replace(/^https:\/\/www\./, "https://");
  } catch {
    return undefined;
  }
}

const NO_BASE_URL = "https://example.org/fhir";
function extractBaseUrl(fullUrl: string): string {
  let fullUrlMatch = fullUrl.match(/(https:\/\/.+)\/[^/]+\/[^/]+/);
  return fullUrlMatch ? fullUrlMatch[1] : NO_BASE_URL;
}

function organizationToBrand(org: Organization): Brand {
  const brand: Brand = {
    id: org.id,
    parentId: org?.partOf?.reference
      ? org.partOf.reference.split("Organization/")[1]
      : undefined,
    name: org.name,
    alias: org.alias,
    categories: (org.type || []).map((t) => t.coding[0].code),
    locations: org.address,
    portal: {},
    portalInherit: {
      name: false,
      description: false,
      website: false,
    },
  };

  const logo = org.extension.filter(
    (e) => e.url === "https://argonaut.fhir.us/brand-logo"
  );
  if (logo.length > 0) {
    brand.logo = logo[0].valueUrl;
  }

  const portalName = org.extension.filter(
    (e) => e.url === "https://argonaut.fhir.us/patient-access-name"
  );
  if (portalName.length > 0) {
    brand.portal.name = portalName[0].valueString;
  }

  const portalDescription = org.extension.filter(
    (e) => e.url === "https://argonaut.fhir.us/patient-access-description"
  );
  if (portalDescription.length > 0) {
    brand.portal.description = portalDescription[0].valueString;
  }

  const portalUrl = org.extension.filter(
    (e) => e.url === "https://argonaut.fhir.us/patient-access-url"
  );
  if (portalUrl.length > 0) {
    brand.portal.website = portalUrl[0].valueUrl;
  }

  if (brand.parentId) {
    if (!brand?.portal?.name) {
      brand.portalInherit.name = true;
    }
    if (!brand?.portal?.description) {
      brand.portalInherit.description = true;
    }
    if (!brand?.portal?.website) {
      brand.portalInherit.website = true;
    }
  }

  const website = org.telecom.filter((t) => t.system === "url");
  if (website.length > 0) {
    brand.website = website[0].value;
  }

  return brand;
}

export function FHIRToBrands(bundle: BrandBundle): {
  brands: Record<string, Brand>;
  baseUrl: string;
} {
  const baseUrls = bundle.entry
    .map((e) => e.fullUrl)
    .filter((u) => u.startsWith("https://"))
    .map(extractBaseUrl);
  let uniqueUrls = _.uniq(baseUrls);
  if (uniqueUrls.length > 1) {
    console.log("Can't determine base URL", uniqueUrls);
    uniqueUrls = [];
  }

  const baseUrl = uniqueUrls[0];
  console.log("base", baseUrl);

  const brands = bundle.entry
    .map((e) => e.resource)
    .filter((r) => r.resourceType === "Organization")
    .map((org) => organizationToBrand(org as unknown as Organization));

  return {
    baseUrl,
    brands: Object.fromEntries(brands.map((b) => [b.id, b])),
  };
}

export function brandsToFHIR(
  brands: Record<string, Brand>,
  baseUrl
): BrandBundle {
  return {
    resourceType: "Bundle",
    type: "collection",
    entry: Object.entries(brands).map(([id, brand]) => ({
      fullUrl: `${baseUrl}/Organization/${id}`,
      resource: {
        resourceType: "Organization",
        id,
        extension: [
          ...(brand?.logo
            ? [
                {
                  url: "https://argonaut.fhir.us/brand-logo",
                  valueUrl: brand.logo,
                },
              ]
            : []),
          ...(!brand?.portalInherit?.website && brand?.portal?.website
            ? [
                {
                  url: "https://argonaut.fhir.us/patient-access-url",
                  valueUrl: brand.portal.website,
                },
              ]
            : []),
          ...(!brand?.portalInherit?.name && brand.portal?.name
            ? [
                {
                  url: "https://argonaut.fhir.us/patient-access-name",
                  valueString: brand.portal.name,
                },
              ]
            : []),
          ...(!brand.portalInherit?.description && brand.portal?.description
            ? [
                {
                  url: "https://argonaut.fhir.us/patient-access-description",
                  valueString: brand.portal.description,
                },
              ]
            : []),
        ],
        name: brand.name,
        partOf: brand.parentId
          ? {
              reference: `Organization/${brand.parentId}`,
            }
          : undefined,
        alias: brand.alias,
        address: (brand.locations || []).map((a) => ({
          line: a?.line,
          city: a?.city,
          state: a?.state,
          postalCode: a?.postalCode,
        })),
        telecom: [
          ...(brand.website
            ? [
                {
                  system: "url",
                  value: brand.website,
                },
              ]
            : []),
        ],
        identifier: [
          ...(identifierFromUrl(brand?.website)
            ? [
                {
                  system: "urn:ietf:rfc:3986",
                  value: identifierFromUrl(brand?.website),
                },
              ]
            : []),
        ],
        type: (brand?.categories || []).map((code) => ({
          coding: [
            {
              system: "https://argonaut.fhir.us",
              code,
            },
          ],
        })),
      },
    })),
  };
}
