<template lang="pug">
  .vui-scrollable--x
    table.vui-table.vui-no-row-hover.vui-table--fixed-layout.mg-offer-spots
      thead
        tr
          th.vui-cell-wrap(style='width: 80px'): vui-sorting-column(title = 'Line #')
          th(style='width: 110px'): vui-sorting-column(title='Days')
          th(style='width: 105px'): vui-sorting-column(title='Start Time')
          th(style='width: 105px'): vui-sorting-column(title='End Time')
          th(style='width: 235px'): vui-sorting-column(title='Program')
          th(style='width: 105px'): vui-sorting-column(title='Len')
          th.vui-cell-wrap(style='width: 75px'): vui-sorting-column(title = 'Offered Spots')
          th.spot-allocation-column(style='width: 48px')
            //- makegoods-spot-allocation-header(v-model = 'orderLineItems[0].weeklySpotAllocations')
          th(style='width: 100px'): vui-sorting-column(title='Station Rate')
          th(v-if='isImpressionsBuyType' style='width: 100px'): vui-sorting-column(title='Station IMP')
          th(style = 'width: 90px'): vui-sorting-column(title='Station CPM')
          th(style='width: 120px') Makegood #[br] Comment
      tbody
</template>

<script>
  import axios from '~plugins/axios'

  export default {
    data () {
      return {
        isImpressionsBuyType: true,
        orderLineItems: [],
        items: [
          { spotAllocations: [] }
        ]
      }
    },

    methods: {
      fetchOrderLineItems () {
        axios.get('/orderLineItems')
          .then((response) => {
            this.orderLineItems = response.data
          })
          .catch((error) => {
            console.log(error)
          })
      },

      toggleDetail (offer) {
        offer.isExpanded = !offer.isExpanded
      }

    },

    created () {
      this.fetchOrderLineItems()
    }
  }
</script>
