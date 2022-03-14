<script lang="ts">
  import BrandCard from "$lib/BrandCard.svelte";
  import BrandEditor from "$lib/BrandEditor.svelte";
  import debounce from "$lib/debounce";
  import { brandsToFHIR } from "$lib/interop";
  import { Column, CopyButton, Grid, Row } from "carbon-components-svelte";
  import "carbon-components-svelte/css/white.css";
  import * as uuid from "uuid";
  import type { Brand } from "../lib/types";
  import { editing } from "../stores/stores";

  let x: string = "OK";
  let defaultBrand: Brand = { id: uuid.v4(), name: "TODO: Add a name" };
  let cards = {
    [defaultBrand.id]: { ...defaultBrand },
  };

  $editing = { id: defaultBrand.id };
  let fhirExport = "";

  let debounceFhirInterval = debounce();
  $: debounceFhirInterval(() => {
    fhirExport = JSON.stringify(
      brandsToFHIR(cards, "https://ehr.example.org"),
      null,
      2
    );
  }, 200);

  function addChildBrand(id: string) {
    return (_e) => {
      const childCard: Brand = { ...defaultBrand, id: uuid.v4(), parentId: id };
      cards = { ...cards, [childCard.id]: childCard };
      $editing = { id: childCard.id };
    };
  }
  function removeChildBrand(id: string) {
    return (_e) => {
      cards = Object.fromEntries(
        Object.entries(cards).filter(([k, v]) => k !== id)
      );
    };
  }
</script>

<Grid>
  <Row>
    <Column sm={4}>
      <h1>
        SMART Patient Access: Brand Editor (<a
          target="_blank"
          href="https://hackmd.io/@argonaut/patient-access-brands">?</a
        >)
      </h1>
    </Column>
  </Row>
  <Row>
    <Column style="position: relative;" lg={4} sm={4}>
      <pre style="overflow-x: clip; margin-bottom: 1em;">{fhirExport}</pre>
      <CopyButton
        style="position: absolute; top: 0px; right: 1rem;"
        text={fhirExport}
        feedback="Copied Brand Bundle to clipboard"
      />
    </Column>
    <Column lg={4} sm={4} style="margin-bottom: 1em;">
      <Grid noGutter>
        <Row>
          {#each Object.entries(cards) as [id, card]}
            <Column class="tile-column" sm={4}>
              <BrandCard
                brand={card}
                parentBrand={cards[card.parentId]}
                on:add-affiliated-brand={addChildBrand(id)}
                on:remove-affiliated-brand={removeChildBrand(id)}
              />
            </Column>
          {/each}
        </Row>
      </Grid>
    </Column>
    <Column lg={8} sm={4}>
      {#key $editing.id}
        <BrandEditor brands={cards} bind:brand={cards[$editing.id]} />
      {/key}
    </Column>
  </Row>
</Grid>

<style>
  h1 {
    font-size: 1.5rem;
    gap: 0.2em;
    margin-bottom: 0.2em;
  }
  :root {
    --cds-ui-04: slategray;
  }

  :global(.tile-column) {
    margin-bottom: 1rem;
  }
</style>
