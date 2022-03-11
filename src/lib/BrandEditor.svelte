<script lang="ts">
  import { Button, Form, FormGroup, TextInput } from "carbon-components-svelte";
  import TrashCan16 from "carbon-icons-svelte/lib/TrashCan16";
  import { FileUploaderButton } from "carbon-components-svelte";
  import { FileUploader } from "carbon-components-svelte";
  	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();


  import { tick } from "svelte";
  import type { Brand } from "./types";
  export let brand: Brand;
  let fileUploader;
  let aliasDom = [];


  let textInputs = [];
</script>

{#if brand}
  <Form>
    <FormGroup legendText="Brand primary name">
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
    <FormGroup legendText="Brand aliases (optional)"
    >
    <div class="bx--form__helper-text">
 An alias associated with your Brand name (e.g., former name, or other term patients might use to searhc for your brand)
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
        on:change={async function onChange(e){
          console.log(e.detail)
          const file = e.detail[0];
          let b64 = btoa(String.fromCharCode(...new Uint8Array(await file.arrayBuffer())));
          let extension = file.name.split(".")[1];
          let dataUrl = `data:image/${{"svg": "svg+xml", "png":"png"}[extension]};base64,${b64}`;
          brand.logo = dataUrl;
          console.log(dataUrl)
          fileUploader.clearFiles();
        }}
      />
    </FormGroup>
  </Form>
{/if}

<style>
  :global(legend) {
    font-weight: bold !important;
  }
</style>
