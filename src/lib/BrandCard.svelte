<script lang="ts">
  import { Tile } from "carbon-components-svelte";

  interface Brand {
    name?: string;
    website?: string;
    alias?: string[];
    identifier?: {
      system: string;
      value: string;
    }[];
    portal?: {
      name?: string;
      description?: string;
      website?: string;
    };
  }
  export let brand: Brand;
</script>

<Tile class="tile">
  <h1 class="name"><img alt="logo" class="logo" src="./smart-burst.svg" />{brand.name}</h1>
</Tile>

<style>
 h1.name{
     display: flex;
     align-items: center;
 }
  .logo {
    width: 2em;
    height: 2em;
    margin-right: 2em;
  }
  :global(.tile) {
margin-bottom: 2em;
  }

</style>
