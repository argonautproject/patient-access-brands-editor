<script lang="ts">
  import "carbon-components-svelte/css/white.css";
  import { Accordion, AccordionItem } from "carbon-components-svelte";
  import { Theme, Button } from "carbon-components-svelte";
  import { Grid, Row, Column } from "carbon-components-svelte";

  import BrandCard from "$lib/BrandCard.svelte";
  let x: string = "OK";
  let cards = [1, 2, 3, 4];
</script>

<Button>Primary button</Button>

<h1 style={"color: var(--cds-active-danger); background: blue;"}>
  Welcome to SvelteKit, {x}
</h1>
<Grid>
  <Row>
    <Column lg={1} sm={1}>Sidebar</Column>
    <Column lg={15} sm={4}>
      <Row>
        {#each cards as card}
          <Column lg={8} sm={4}>
            <BrandCard brand={{ name: "SMART Health Clinic" }} />
          </Column>
        {/each}
      </Row>
    </Column>
  </Row>
</Grid>

<Accordion>
  <AccordionItem title="Section 1" open>Content 1</AccordionItem>
  <AccordionItem title="Section 2">Content 2</AccordionItem>
  <AccordionItem title="Section 3">Content 3</AccordionItem>
</Accordion>

<style>
  :root {
    --cds-ui-04: slategray;
  }
</style>
