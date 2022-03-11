<script lang="ts">
  import {
  Button,
  FileUploader,
  Form,
  FormGroup,
  MultiSelect,
  TextInput
  } from "carbon-components-svelte";
  import TrashCan16 from "carbon-icons-svelte/lib/TrashCan16";
  import { tick } from "svelte";
  import type { Brand } from "./types";
  import {encode, decode} from 'uint8-to-base64';


  export let brand: Brand;
  export let brands: Record<string, Brand>;
  let fileUploader;
  let aliasDom = [];
  let locationDom = [];
  let locationFlat = [];
  let textInputs = [];
  let lastId = -1;

  let isAffiliate = false;
  let parentBrand: Brand;
  $: {
    if (brand?.parentId) {
      isAffiliate = true;
      parentBrand = brands[brand.parentId];
    }
    if (brand && !brand?.portal) {
      brand.portal = {};
      console.log("Brand", brand, isAffiliate)
      brand.portalInherit = {
        name: isAffiliate,
        website: isAffiliate,
        description: isAffiliate
      };
    }
  }
</script>

{#if brand}
  <Form>
    <h5>{`${isAffiliate ? "Affiliated" : "Primary"} Brand Details`}</h5>
    <FormGroup legendText="Brand name">
      <div class="bx--form__helper-text">
        The primary name associated with your brand.
      </div>
      <TextInput
        autofocus
        bind:value={brand.name}
        invalid={brand.name == ""}
        placeholder="Associated Physicians of Madison"
      />
    </FormGroup>
    <FormGroup legendText="Brand website (https only)">
      <div class="bx--form__helper-text">
        The primary website associated with your brand. Note: this is distinct
        from your patient portal.
      </div>
      <TextInput
        bind:value={brand.website}
        invalid={!brand?.website?.startsWith("https://")}
        placeholder="https://apmadison.com"
      />
    </FormGroup>
    <FormGroup legendText="Brand aliases (optional)">
      <div class="bx--form__helper-text">
        An alias associated with your Brand (e.g., a former name or other term
        patients might use to search for your brand)
      </div>

      {#each brand?.alias || [] as alias, i}
        <div style="display: flex; align-items: baseline; ">
          <TextInput
            bind:value={brand.alias[i]}
            bind:ref={aliasDom[i]}
            invalid={brand.alias[i] == ""}
            style="width: 100%;"
            placeholder="Madison Doctors Group"
          />
          <TrashCan16
            style="margin-left: .5em; cursor: pointer; min-width: 16px;"
            on:click={() =>
              (brand.alias = brand.alias.filter((a, ai) => ai !== i))}
          />
        </div>
      {/each}
      <Button
        on:click={async () => {
          (brand.alias = brand.alias || []).push("");
          await tick();
          aliasDom.slice(-1)[0].focus();
        }}
        small
        kind="ghost">Add alias</Button
      >
    </FormGroup>
    <FormGroup legendText="Brand logo">
      {#if brand.logo}
        <img style="width: 1em; height: 1em;" alt="logo" src={brand.logo} />
      {/if}
      <!-- svelte-ignore missing-declaration -->
      <FileUploader
        bind:this={fileUploader}
        buttonLabel="Choose logo file"
        labelDescription="Square PNG or SVG, 1024x1024 pixels with transparent background preferred"
        accept={[".png", ".svg"]}
        status="complete"
        on:change={async function onChange(e) {
          console.log(e.detail);
          const file = e.detail[0];
          const fileBytes = new Uint8Array(await file.arrayBuffer());
          console.log(fileBytes)
          const b64Encoded = encode(fileBytes);
          let extension = file.name.split(".")[1];
          let dataUrl = `data:image/${
            { svg: "svg+xml", png: "png" }[extension]
          };base64,${b64Encoded}`;
          brand.logo = dataUrl;
          console.log(dataUrl);
          fileUploader.clearFiles();
        }}
      />
    </FormGroup>
    <FormGroup legendText="Locations (optional)">
      <div class="bx--form__helper-text">
        A location (street address, city/state, or city/state/zip) associated
        with your Brand
      </div>
      {#each locationFlat || [] as location, i}
        <div style="display: flex; align-items: baseline; ">
          <TextInput
            on:keyup={(e) => {
              let l = e.target;

              let parsed = locationFlat[i].match(
                /(^(.*?),\s+)?(.+?),?\s*([A-z][A-z])\s*?([\d-]{5,})?$/
              );
              if (parsed == null) {
                brand.locations[i] = null;
                return;
              }
              brand.locations = brand.locations ?? [];
              brand.locations[i] = {
                line: [parsed[2]].filter(Boolean),
                city: parsed[3],
                state: parsed[4],
                zip: parsed[5],
              };
            }}
            bind:value={locationFlat[i]}
            bind:ref={locationDom[i]}
            invalid={!brand?.locations?.[i]}
            style="width: 100%;"
            placeholder="123 Regent St, Madison, WI 53726"
          />
          <TrashCan16
            style="margin-left: .5em; cursor: pointer; min-width: 16px;"
            on:click={() =>
              (locationFlat = locationFlat.filter((a, ai) => ai !== i))}
          />
        </div>
      {/each}
      <Button
        on:click={async () => {
          (locationFlat = locationFlat || []).push("");
          await tick();
          locationDom.slice(-1)[0].focus();
        }}
        small
        kind="ghost">Add location</Button
      >
    </FormGroup>

    <FormGroup legendText="Categories (optional)">
      <MultiSelect
        bind:selectedIds={brand.categories}
        label="Select categories"
        items={[
          { id: "health-system", text: "Health system" },
          { id: "hospital", text: "Hospital" },
          { id: "clinic", text: "Clinic" },
          { id: "pharmacy", text: "Pharmacy" },
          { id: "lab", text: "Lab" },
          { id: "insurance", text: "Insurance" },
          { id: "data-network", text: "Data Network" },
        ]}
      />
    </FormGroup>

    <h5>{`Patient Portal Details`}</h5>
    <FormGroup legendText="Portal URL">
      <div class="bx--form__helper-text">
        URL of patient portal where records are available (https only)
      </div>
      {#if isAffiliate}
        <div>
          <input bind:checked={brand.portalInherit.website} type="checkbox" /> Use
          portal URL from Primary Brand ("{parentBrand?.portal?.website || ""}")
        </div>
      {/if}
      {#if !isAffiliate || !brand.portalInherit.website}
        <TextInput
          bind:value={brand.portal.website}
          invalid={!brand?.portal?.website?.startsWith("https://")}
          placeholder="https://www.chart.myunitypoint.org/"
        />
      {/if}
    </FormGroup>

    <FormGroup legendText="Portal name">
      <div class="bx--form__helper-text">
        Name of the portal as known to patients
      </div>

      {#if isAffiliate}
        <div>
          <input bind:checked={brand.portalInherit.name} type="checkbox" /> Use
          name from Primary Brand ("{parentBrand?.portal?.name || ""}")
        </div>
      {/if}
      {#if !isAffiliate || !brand.portalInherit.name}
        <TextInput
          bind:value={brand.portal.name}
          invalid={false && !brand?.portal?.name}
          placeholder="MyUnityPoint"
        />
      {/if}
    </FormGroup>

    <FormGroup legendText="Portal description">
      <div class="bx--form__helper-text">
        Description of the portal to help patients connect to the right place.
        Explain the intended audience of the portal, if you offer more than one
        portal for different audiences.
      </div>
      {#if isAffiliate}
        <div>
          <input bind:checked={brand.portalInherit.description} type="checkbox" />
          Use description from Primary Brand ("{parentBrand?.portal?.description
            ? parentBrand.portal.description.slice(40) + "..."
            : ""}")
        </div>
      {/if}
      {#if !isAffiliate || !brand.portalInherit.description}
        <TextInput
          bind:value={brand.portal.description}
          invalid={false && !brand?.portal?.description}
          placeholder="Access your clinical records..."
        />
      {/if}
    </FormGroup>
  </Form>
{/if}

<style>
  :global(legend) {
    font-weight: bold !important;
    margin-bottom: 0px !important;
  }
  :global(::placeholder) {
    opacity: 40% !important;
  }
</style>
