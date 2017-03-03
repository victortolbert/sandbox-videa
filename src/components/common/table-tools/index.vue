<template lang="pug">
  // Table Tools Component
  .table-tools.vui-grid.vui-grid--align-spread.vui-m-bottom--xx-small
    .vui-align-middle
      .campaign-performance-legend
        span.vui-m-right--medium Metered
        span.vui-m-right--medium
          svg.vui-icon.vui-align-middle.vui-m-right--x-small.vui-icon--x-small(style='color: rgb(59, 127, 54);')
            use(xmlns:xlink='http://www.w3.org/1999/xlink', xlink:href='/static/shared/icons.svg#icon-stop')
          | ≥ 95%
        span.vui-m-right--medium
          svg.vui-icon.vui-align-middle.vui-m-right--x-small.vui-icon--x-small(style='color: rgb(245, 130, 32);')
            use(xmlns:xlink='http://www.w3.org/1999/xlink', xlink:href='/static/shared/icons.svg#icon-stop')
          | 80%-94%
        span.vui-m-right--medium
          svg.vui-icon.vui-align-middle.vui-m-right--x-small.vui-icon--x-small(style='color: rgb(197, 16, 61);')
            use(xmlns:xlink='http://www.w3.org/1999/xlink', xlink:href='/static/shared/icons.svg#icon-stop')
          | ≤ 79%
    .vui-align-middle.vui-col--bump-left
      .vui-dropdown-trigger
        | Show:
        .vui-dropdown-trigger.vui-m-right--small.vui-m-left--x-small
          .vui-select_container
            select#itemsPerPage.vui-select(items-per-page='listCtrl.queryParams.pageSize', refresh-data='listCtrl.changeItemsPerPage(itemsPerPage)')
              option(label='10', value='number:10', selected='selected') 10
              option(label='25', value='number:25') 25
              option(label='50', value='number:50') 50
    .vui-align-middle
      .vui-dropdown-trigger
        | Columns:
        .vui-dropdown-trigger.vui-m-right--small.vui-m-left--x-small
          .vui-select_container
            select.vui-select
              option
              option Station Order #
              option Videa Order #
              option Advertiser
              option Agency
              option Product
              option Est. #
              option Revenue
    .vui-align-middle
      .vui-dropdown-trigger
        | Export to Excel
        button.vui-button.vui-button--icon-border-filled.vui-m-left--x-small
          svg.vui-icon.vui-align-middle.vui-icon--x-small(style='width: 1.5rem; height: 1.5rem; color: rgb(1, 119, 162);')
            use(xmlns:xlink='http://www.w3.org/1999/xlink', xlink:href='/static/shared/icons.svg#icon-download')
        span.vui-assistive-text Export to Excel

</template>
