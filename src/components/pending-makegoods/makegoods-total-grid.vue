<template lang="pug">
  table.vui-table.vui-no-row-hover.mgs-total-grid
    thead
      tr
        th(
            v-for = 'gridColumn in gridColumns'
            v-if = 'gridColumn.isVisible'
          ) {{ gridColumn.title }}
    tbody
      tr(
        v-for = 'item in items'
      )
        td.vui-truncate(
          v-bind:title = 'item.rowName'
          style = 'width: 155px'
        ) {{ item.rowName }}
        td.vui-truncate.vui-text-align--right(
          v-bind:class = '{ "error": item.spotsCount < 0 }'
          v-bind:title = 'item.spotsCount'
          style = 'width: 80px'
        ) {{ item.spotsCount }}
        td.vui-truncate.vui-text-align--right(
          v-bind:class = '{ "error": item.rateSum < 0 }'
          v-bind:title = 'item.rateSum'
        ) {{ item.rateSum }}
        td.vui-truncate.vui-text-align--right(
          v-bind:class = '{ "error": item.ratings < 0 }'
          v-bind:title = 'item.ratings'
          v-if = '!showImpressions'
        ) {{ item.ratings }}
</template>

<script>
  export default {
    data () {
      return {
        showImpressions: false,
        gridColumns: [
          { title: 'Totals', isVisible: true },
          { title: 'Spots', isVisible: true },
          { title: 'Dollars', isVisible: true },
          { title: 'GRPs', isVisible: true }
        ],
        items: [
          { rowName: 'Credit(s)', spotsCount: 1, rateSum: '0', ratings: '3.10' }
        ]
      }
    }
  }
</script>
