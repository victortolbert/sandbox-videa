<template>
  <div class="grid">
    <div class="column" style="--viewport-small: var(--column-count)"> Full width </div>
    <div class="column" style="--viewport-small: 4"> 4 columns</div>
    <div class="column" style="--viewport-small: 4; --viewport-large: 8"> 4 or 8 columns
      <div class="row">
        <div class="column" style="--viewport-small: 4"> 4 columns</div>
        <div class="column" style="--viewport-small: 4"> 4 columns</div>
        <div class="column" style="--viewport-small: 4"> 4 columns</div>
        <div class="column" style="--viewport-small: 4"> 4 columns</div>
      </div>
    </div>
  </div>
</template>
<style>
  @import "https://cdn.rawgit.com/pixelass/minus-grid/v1.2.0/dist/index.css";

  .grid {
    --column-margin: 5;
    --column-padding: 5;
  }


  .column {
    box-shadow: 0 0 0 1px inset;
    padding-top: 0.5em;
    padding-bottom: 0.5em;
  }
</style>
