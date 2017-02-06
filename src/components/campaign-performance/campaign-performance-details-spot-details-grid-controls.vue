<template lang="pug">
  .vui-grid.vui-grid--align-spread.vui-m-bottom--xx-small
    .vui-align-middle.vui-m-top--medium.vui-m-bottom--small.vui-float--left
      vui-icon.vui-m-right--x-small(
        name = 'stop'
        style = 'color:#C5103D'
      )
      span Unmatched Spots
    //- order-info-export-block.vui-align-middle.vui-m-top--medium.vui-m-bottom--small.vui-grid.vui-grid--vertical-align-center(
    //-   order-info = 'orderInfo'
    //-   export-to-excel-url = 'exportToExcelUrl'
    //- )
    .vui-grid.vui-grid--vertical-align-center
      .vui-m-right--medium
        span Demo:
        span P25-54
      //- export-to-excel-link(
      //-   export-to-excel-url = 'exportToExcelUrl'
      //- )
      div
        | Export to Excel
        a.vui-button.vui-button--icon-border-filled.vui-p-top--xx-small.vui-m-left--x-small(
          @click.prevent = ''
        )
          vui-icon.vui-icon--x-small.vui-align-middle(
            name = 'download'
            style = 'width: 1.5rem; height: 1.5rem; color: #0177a2'
          )
          //- svg.vui-icon.vui-icon--x-small.vui-align-middle(
          //-   style = 'width: 1.5rem; height: 1.5rem; color: #0177a2'
          //- )
          //-   use(
          //-     xmlns:xlink = 'http://www.w3.org/1999/xlink'
          //-     xlink:href = '/Content/Images/icons.svg#icon-download'
          //-   )
</template>
