<template lang="pug">
  .vui-grid.vui-grid--align-spread.vui-m-bottom--xx-small
    .vui-align-middle
      campaign-performance-legend
    .vui-align-middle.vui-col--bump-left
      .vui-dropdown-trigger
        | Show:
        .vui-dropdown-trigger.vui-m-right--small.vui-m-left--x-small
          .vui-select_container
            vui-items-per-page-selector(
              items-per-page = 'listCtrl.queryParams.pageSize'
              refresh-data = 'listCtrl.changeItemsPerPage(itemsPerPage)'
            )
    .vui-align-middle
      .vui-dropdown-trigger
        | Columns:
        .vui-dropdown-trigger.vui-m-right--small.vui-m-left--x-small
          .vui-select_container
            select.vui-select(
              v-model = 'selectedColumn'
            )
              option(
                v-for = 'column in columns'
              ) {{ column }}
    .vui-align-middle
      .vui-dropdown-trigger
        | Export to Excel
        button.vui-button.vui-button--icon-border-filled.vui-m-left--x-small
          vui-icon(
            name = 'download'
            style = 'width: 1.5rem; height: 1.5rem; color: #0177a2'
          )
        span.vui-assistive-text Export to Excel
</template>

<script>
  import CampaignPerformanceLegend from '~components/campaign-performance/campaign-performance-legend'

  export default {
    components: {
      CampaignPerformanceLegend
    },

    data () {
      return {
        selectedColumn: 'Unknown',
        columns: [
          '',
          'Station Order #',
          'Videa Order #',
          'Advertiser',
          'Agency',
          'Product',
          'Est. #',
          'Revenue'
        ]
      }
    }
  }
</script>
