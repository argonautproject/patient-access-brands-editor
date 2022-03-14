<script lang="ts">
  import {
  Button,ClickableTile,Grid,
  Row
  } from "carbon-components-svelte";
  import Edit32 from "carbon-icons-svelte/lib/Edit32";
  import ParentChild16 from "carbon-icons-svelte/lib/ParentChild16";
  import TrashCan16 from "carbon-icons-svelte/lib/TrashCan16";
  import { createEventDispatcher } from "svelte";
  import { editing } from "../stores/stores";
  import type { Brand } from "./types";
  const dispatchEvent = createEventDispatcher();
  export let brand: Brand;
  export let parentBrand: Brand | undefined;
</script>

{"" && JSON.stringify(brand)}
<ClickableTile
  class="tile"
  on:click={() => {
    $editing = { id: brand.id };
    console.log("Editing", brand.id);
  }}
  style={`opacity: ${
    $editing?.id !== null && $editing.id !== brand.id ? "50" : 100
  }%`}
>
  <h3 class="name">
    <img alt="logo" class="logo" src={brand.logo ?? "smart-burst.svg"} />
    {brand.name}
    &nbsp;
  </h3>

  <Grid noGutter>
    <Row>
      <div
        style="margin-left: 1em; margin-right: 1em; display: flex; align-items: self-end;"
      >
        <p style="font-size: .8rem; margin-top: .5em;">
          {(brand?.portalInherit?.name
            ? parentBrand?.portal?.name
            : brand?.portal?.name) ||
            "TODO: Add portal name, URL, and description"}
        </p>
        <button class="example" kind="primary">View data</button>
        <button class="example" kind="primary">Connect</button>
      </div>
    </Row>
  </Grid>
  <Edit32
    on:click={() => {
      $editing = { id: brand.id };
      console.log("Editing", brand.id);
    }}
    style="cursor: pointer; position: absolute; top: 0%; right: 0%;"
  />
</ClickableTile>
{#if !brand.parentId}
  <Button
    on:click={() => {
      dispatchEvent("add-affiliated-brand", brand);
    }}
    small
    style="display: flex; align-items: centered; padding-left: 1em; padding-right: 1em; width: 100%; min-height: 2rem; gap: 1em;"
    kind="tertiary"
  >
    <ParentChild16 />
    <div style="flex-grow: 1;">Add affiliated brand</div>
  </Button>
{:else}
  <Button
    on:click={() => {
      dispatchEvent("remove-affiliated-brand", brand);
    }}
    small
    style="display: flex; align-items: centered; padding-left: 1em; padding-right: 1em; width: 100%; min-height: 2rem; gap: 1em;"
    kind="danger-tertiary"
  >
    <TrashCan16 />
    <div style="flex-grow: 1;">Remove affiliated brand</div>
  </Button>
{/if}

<style>
  button.example {
    font-size: 0.5rem;
    white-space: nowrap;
    border: 1px solid black;
    margin-bottom: 0.2em;
    margin-left: 0.2em;
  }
  .name {
    display: flex;
    align-items: center;
    font-size: 1rem;
  }
  .logo {
    width: 2em;
    height: 2em;
    margin-right: 0.2em;
  }

  :global(.tile) {
    width: 100%;
    position: relative;
  }
</style>
