<script lang="ts">
  import { Button,FileUploader,Form,FormGroup,MultiSelect,TextInput } from "carbon-components-svelte";
  import TrashCan16 from "carbon-icons-svelte/lib/TrashCan16";
  import { createEventDispatcher,tick } from "svelte";
  import type { Brand } from "./types";
  export let brand: Brand;
  let fileUploader;
  let aliasDom = [];
  let locationDom = [];
  let locationFlat = [];
  let textInputs = [];
  let lastId = -1;

  let isAffiliate;
  $: {
    if (brand && !brand.portal) {
      brand.portal = {};
    }
    isAffiliate  = (brand?.parentId !== undefined)
  }
</script>

{#if brand}
  <Form>
   
    <FormGroup legendText={`${isAffiliate ? "Affiliated" : "Primary"} Brand name`}>
      <TextInput
        autofocus
        bind:value={brand.name}
        invalid={brand.name == ""}
        placeholder="Associated Physicians of Madison"
        helperText="The primary name associated with your brand."
      />
    </FormGroup>
    <FormGroup legendText="Brand website">
      <TextInput
        placeholder="https://apmadison.com"
        helperText="The primary website associated with your brand. Note: this is distinct from your patient portal."
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
        buttonLabel="Choose file"
        labelDescription="Square PNG or SVG, 1024x1024 pixels with transparent background preferred"
        accept={[".png", ".svg"]}
        status="complete"
        on:change={async function onChange(e) {
          console.log(e.detail);
          const file = e.detail[0];
          let b64 = btoa(
            String.fromCharCode(...new Uint8Array(await file.arrayBuffer()))
          );
          let extension = file.name.split(".")[1];
          let dataUrl = `data:image/${
            { svg: "svg+xml", png: "png" }[extension]
          };base64,${b64}`;
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
    <FormGroup legendText="Patient Portal">
      <div class="bx--form__helper-text">
        URL of patient portal where records are available
      </div>
      <TextInput
        bind:value={brand.portal.website}
        invalid={!brand?.portal?.website}
        placeholder="https://www.chart.myunitypoint.org/"
      />

      <div class="bx--form__helper-text">
        Name of the portal as known to patients
      </div>
      <div>
        <input type="checkbox" /> Use name from Primary Brand ("MyUnityPoint")
      </div>
      <TextInput
        disabled
        bind:value={brand.portal.name}
        invalid={false && !brand?.portal?.name}
        placeholder="MyUnityPoint"
      />

      <div class="bx--form__helper-text">
        Description of the portal to assist in selection. Describe the intended audience of the portal, if you offer more than one portal for different audiences.
      </div>
      <TextInput
        bind:value={brand.portal.description}
        placeholder="Clinical records for all Associated Physicians patients"
      />


    </FormGroup>
  </Form>
{/if}

<style>
  :global(legend) {
    font-weight: bold !important;
  }
</style>
