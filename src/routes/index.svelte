<script lang="ts">
  import BrandCard from "$lib/BrandCard.svelte";
  import BrandEditor from "$lib/BrandEditor.svelte";
  import { Column, Grid, Row } from "carbon-components-svelte";
  import "carbon-components-svelte/css/white.css";
  import { editing } from "../stores/stores";
  import type { Brand } from "../lib/types";
  import * as uuid from "uuid";
import { brandsToFHIR } from "$lib/interop";
  import { CopyButton } from "carbon-components-svelte";

  let x: string = "OK";
  let defaultBrand: Brand = { id: uuid.v4(), name: "TODO: Add a name"};
  let cards = {
    [defaultBrand.id]: {...defaultBrand},
  };


  $editing = { id: defaultBrand.id };
  let fhirExport = ""
  $: {
      fhirExport = JSON.stringify(brandsToFHIR(cards, "https://ehr.example.org"), null, 2)
  }
  function addChildBrand(id: string) {
    return (_e) => {
      const childCard: Brand = { ...defaultBrand, id: uuid.v4(), parentId: id };
      cards = { ...cards, [childCard.id]: childCard };
      $editing = { id: childCard.id };
    };
  }
</script>

<Grid>
  <Row>
    <Column sm={4}>
      <h1>SMART Patient Access: Brand Editor <CopyButton text={fhirExport} feedback="Copied Brand Bundle to clipboard" />


      </h1>
        </Column>


  </Row>
  <Row>
    <Column lg={8} sm={4}>
      <Grid noGutter>
        <Row>
          {#each Object.entries(cards) as [id, card]}
            <Column class="tile-column" sm={3}>
              <BrandCard
                brand={card}
                parentBrand={cards[card.parentId]}
                on:add-affiliated-brand={addChildBrand(id)}
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
    font-size: 2rem;
    display: flex;
    gap: .2em;
    margin-bottom: .2em;
  }
  :root {
    --cds-ui-04: slategray;
  }

  :global(.tile-column) {
    margin-bottom: 0.5em;
  }

  textarea {
    width: 100%;
    height: calc(100% - 0.5em);
  }
</style>
