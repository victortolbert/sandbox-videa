<template lang="pug">
  .vui-grid.vui-grid--align-spread.vui-m-bottom--xx-small
    //- #viewFormatSelector
    //-   .vui-hint-parent.hint-parent-demo
    //-     | Select a view format
    //-     button.vui-button.vui-button--icon-border-filled.vui-m-left--x-small
    //-       icon(name="th", style='color: hsla(304, 48%, 28%, 1)')
    //-       span.vui-assistive-text Show Table View
    //-     button.vui-button.vui-button--icon-border-filled.vui-m-left--x-small
    //-       icon(name="pie-chart", style='color: hsla(304, 48%, 28%, 1)')
    //-       span.vui-assistive-text Show Chart View
    #excelExporter.vui-hint-parent.hint-parent-demo.vui-align-middle.vui-container--right
      | Export to Excel
      button.vui-button.vui-button--icon-border-filled.vui-m-left--x-small
        icon(name='download', style='width: 1.5rem;height: 1.5rem;color:#0177a2')
      span.vui-assistive-text Export to Excel
</template>

<script>
  export default {
    props: [ 'heading' ],

    data () {
      return {
      }
    }
  }
</script>
