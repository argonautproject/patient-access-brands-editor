<script lang="ts">
  import { editing } from "../stores/stores";
  import { Tile, ClickableTile } from "carbon-components-svelte";
  import Edit16 from "carbon-icons-svelte/lib/Edit16";

  import { Grid, Row, Column } from "carbon-components-svelte";

  export let brand: Brand;
  import { ButtonSet, Button } from "carbon-components-svelte";
  import type { Brand } from "./types";
</script>

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
    <img alt="logo" class="logo" src={brand.logo ?? "./smart-burst.svg"} />
    {brand.name}
    &nbsp;
    <a href="https://smarthealthit.org">website</a>
  </h3>

  <Grid noGutter>
    <Row>
      <Column sm={2}
        >MyChildren's Portal offers access to pediatric patients with cancer
        care records at Dana Farber.

        <details>Patient access to clinical and financial data</details>
      </Column>
      <Column sm={2}>
        <ButtonSet stacked>
          <Button size="small" kind="primary">View data</Button>
          <Button size="small" kind="primary">Connect</Button>
        </ButtonSet>
      </Column>
    </Row>
  </Grid>
  <Edit16
    on:click={() => {
      $editing = { id: brand.id };
      console.log("Editing", brand.id);
    }}
    style="cursor: pointer; position: absolute; top: 0%; right: 0%;"
  />
</ClickableTile>

<style>
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
