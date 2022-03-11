import type { Brand } from "./types";

interface BrandBundle {
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

function identifierFromUrl(url: string) {
  try {
    let u = new URL(url);
    return u.origin.replace(/^https:\/\/www\./, "https://");
  } catch {
    return undefined;
  }
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
          postalCode: a?.zip,
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
