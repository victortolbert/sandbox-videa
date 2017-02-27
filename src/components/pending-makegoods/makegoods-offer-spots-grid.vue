<template lang="pug">
  .vui-scrollable--x
    table.vui-table.vui-no-row-hover.vui-table--fixed-layout.mg-offer-spots
      thead
        tr
          th(style='width:  80px'): vui-sorting-column(title='Line #')
          th(style='width: 110px'): vui-sorting-column(title='Order Days')
          th(style='width:  95px'): vui-sorting-column(title='Start Time')
          th(style='width:  95px'): vui-sorting-column(title='End Time')
          th(style='width: 248px'): vui-sorting-column(title='Program')
          th(style='width:  60px'): vui-sorting-column(title='Len')
          th.vui-cell-wrap(style='width: 85px'): vui-sorting-column(title='Offered Spots')
          th.spot-allocation-column(style='width: 48px')
            makegoods-spot-allocation-header(
              v-model = 'items[0].spotAllocations'
              navigator = 'spotAllocationNavigator'
            )
          th(style='width: 100px'): vui-sorting-column(title='Spot Rate')
          th.vui-cell-wrap(
            v-if = 'isImpressionsBuyType'
            style = 'width: 100px'
          )
            vui-sorting-column(title='Station IMP')
          th(v-if='isImpressionsBuyType' style='width: 100px')
            vui-sorting-column(title='Station CPM')
          th.vui-cell-wrap(style='width: 50%') Makegood Comments
      tbody
        tr
          td
          td
            .vui-form-element__control
              .vui-select_container
                select.vui-select
                  option(value = '') SA
          td
            .vui-form-element__control
              .vui-select_container
                select.vui-select
                  option(value = '') 12:30 am
          td
            .vui-form-element__control
              .vui-select_container
                select.vui-select
                  option(value = '') 1:00 am
          td
            input.vui-input(type='text' value='The cleveland show')
          td
            .vui-form-element__control
              .vui-select_container
                select.vui-select
                  option(value = '') 30S
          td 1
          td.spot-allocation-data-cell
          td.u-currency
            input.vui-input(type='text' value='0')

          td
            input.vui-input(type='text' value='0')

          td
          td
            input.vui-input(type='text' value='MG for preempted spot')
</template>

<script>
  export default {
    data () {
      return {
        isImpressionsBuyType: true,
        items: [
          { }
        ]
      }
    }
  }
</script>
