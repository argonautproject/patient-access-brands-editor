<script lang="ts">
  import BrandCard from "$lib/BrandCard.svelte";
  import BrandEditor from "$lib/BrandEditor.svelte";
  import { Column,Grid,Row } from "carbon-components-svelte";
  import "carbon-components-svelte/css/white.css";
  import { editing } from "../stores/stores";
  let x: string = "OK";
  let defaultBrand = {name: "TODO: Add a title", description: ""}
  let cards = [
    {...defaultBrand, id: 0},
  ];
</script>

<Grid>
  <Row>
    <Column sm={4}>
      <h1>SMART Patient Brand Editor</h1>
    </Column>
  </Row>
  <Row>
    <Column lg={8} sm={4}>
      <Grid noGutter>
        <Row>
          {#each cards as card, i}
            <Column class="tile-column" sm={3}>
              <BrandCard brand={card} on:add-affiliated-brand={e =>{
                  const childCard = {...defaultBrand, id: cards.length, parentId: i};
                  cards = [...cards, childCard];
                  $editing = {id: childCard.id};
              } } />
            </Column>
          {/each}
        </Row>
      </Grid>
    </Column>
    <Column lg={8} sm={4}>
        {#key $editing.id}
      <BrandEditor bind:brand={cards[$editing.id]} />
        {/key}
    </Column>
  </Row>
</Grid>

<style>
  h1 {
    font-size: 2rem;
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
