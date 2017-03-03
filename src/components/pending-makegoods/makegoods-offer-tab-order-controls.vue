<template lang="pug">
  .vui-scrollable--x
    table.vui-table.vui-no-row-hover.vui-table--striped.vui-table--fixed-layout
      thead
        tr
          th(style='width: 41px')
          th(style='width: 48px') Sent
          th(style='width: 52px') Draft
          th(style='width: 68px') Select
          th(style='width: 74px'): vui-sorting-column(title='Line #')
          th(style='width: 70px'): vui-sorting-column(title='Days')
          th(style='width: 110px'): vui-sorting-column(title='Time')
          th.vui-truncate(style='width: 200px'): vui-sorting-column(title='Program')
          th(style='width: 83px'): vui-sorting-column(title='Length')
          th(style='width: 92px'): vui-sorting-column(title='Ordered<br>Spots')
          th(style='width: 88px'): vui-sorting-column(title='Missed<br>Spots')
          th(style='width: 82px'): vui-sorting-column(title='Traffic<br>Spots')
          th(style='width: 140px') Current #[br] Information
          th.spot-allocation-column(v-if='isShowSpotAllocations' style='width: 503px')
            makegoods-spot-allocation-header(v-model='orderLineItems[0].weeklySpotAllocations')
          th(style='width: 100px'): vui-sorting-column(title='Spot Rate')
          th(v-if='isImpressionsBuyType' style='width: 100px'): vui-sorting-column(title='Buyer<br>IMP')
          th(v-if='isImpressionsBuyType' style='width: 100px'): vui-sorting-column(title='Videa<br>IMP')
          th(style='width: 100px'): vui-sorting-column(title='Line<br>$ Total')
          th(style='width: 100px') Buyer #[br] Comment
          th(style='width: 132px') Station #[br] Order Comment
          th(style='width: 100px') Spot Option
          th(style='width: 100px') Line Type
      tbody
        template(
          v-bind:class="{ 'vui-is-selected': lineItem.isExpanded }"
          v-for='lineItem in order.lineItems'
          v-show='!isOnlyMissedShown || lineItem.totalMissedSpots > 0'
        )
          tr
            td(style='width: 41px')
              a(@click='lineItem.isExpanded = !lineItem.isExpanded')
                vui-icon.vui-icon--small.vui-align-middle(
                  v-bind:name = 'lineItem.isExpanded ? "caret-lower-right" : "caret-right"'
                  style = 'margin-left: -0.5rem'
                )
            td.vui-text-align--center(style='width: 48px')
              a.vui-m-right--xx-small(
                @click = 'showOfferDialog(lineItem.firstSentMakegood)'
                v-show = 'lineItem.firstSentMakegood'
                title = 'Click to open the Offer which has been sent and is awaiting approval'
              )
              vui-icon(name='medicine-bottle')
            td.vui-text-align--center(style = 'width: 52px')
              a(@click='showOfferDialog(lineItem.firstDraftMakegood)' v-show='lineItem.firstDraftMakegood' title='Indicates this Buy Line has DRAFT Offers')
                vui-icon(name ='pencil-square')
            td.vui-text-align--center.overflow-visible(style='width: 68px')
              label.vui-checkbox(v-if='isCheckboxVisible(lineItem)' title='Select to include in Offer')
                input.vui-input(@change='orderLineOnSelected(lineItem)' v-model='lineItem.isSelected' type='checkbox')
                span.vui-checkbox--faux
            td.vui-text-align--right(:title='lineItem.lineNumber' v-if='!lineItem.isOrbit' style='width: 74px') {{ lineItem.lineNumber }}
            td.vui-truncate(:title='lineItem.days' style='width: 70px') {{ lineItem.days }}
            td.vui-truncate(:title='lineItem.time' style='width: 110px') {{ lineItem.time }}
            td.vui-truncate(:title='lineItem.programName' style='width: 200px') {{ lineItem.programName }}
            td.vui-text-align--center(:title='lineItem.spotLength' style='width: 83px') {{ lineItem.spotLength }}
            td.vui-text-align--right(:title='lineItem.totalSpots' style='width: 92px') {{ lineItem.totalSpots }}
            td.vui-text-align--right.vui-text-color--error(:title='lineItem.totalMissedSpots' style='width: 88px') {{ lineItem.totalMissedSpots }}
            td.vui-text-align--right(:title='lineItem.totalTrafficSpots' style='width: 82px') {{ lineItem.totalTrafficSpots }}
            td.vui-text-align--center(style='width: 140px')
              a(@click='showCurrentInfo(lineItem)' title='Click to see current rates & ratings and matched Avails')
                vui-icon(name='popout')
            td.spot-allocation-cell(v-if='isShowSpotAllocations' style='width: 503px')
              makegoods-spot-allocation-with-missed-spots(v-if='isMissedSpotsShown' v-model='lineItem.weeklySpotAllocations')
            td.vui-text-align--right.currency(:title='lineItem.orderedSpotRate' style='width: 100px') {{ lineItem.orderedSpotRate }}
            td.vui-text-align--right(:title='lineItem.orderedImpressions' v-if='isImpressionsBuyType' style='width: 100px') {{ lineItem.orderedImpressions }}
            td.vui-text-align--right(:title='lineItem.videaCurrentImpressions' v-if='isImpressionsBuyType' style='width: 100px') {{ lineItem.videaCurrentImpressions }}
            td.vui-text-align--right.currency(:title='lineItem.lineTotalMoney' style='width: 100px') {{ lineItem.lineTotalMoney }}
            td.vui-truncate(:title='lineItem.buyerComment' style = 'width: 100px') {{ lineItem.buyerComment }}
            td.vui-truncate(:title='lineItem.stationOrderComment' style='width: 132px') {{ lineItem.stationOrderComment }}
            td(style='width: 100px')
            td(:title = 'lineItem.lineType' style = 'width: 100px') {{ lineItem.lineType }}
          tr.vui-is-expanded(v-if='lineItem.isExpanded' v-show='!isOnlyMissedShown || lineItem.totalMissedSpots > 0')
            td.vui-align-top.om-nested-table-container.bordered(colspan = '14' style = 'padding: 0')
            td.vui-align-top.om-nested-table-container.bordered
            td.vui-align-top.om-nested-table-container.bordered

</template>

<script>
  export default {
    props: ['order', 'orderLineItems'],

    data () {
      return {
        isShowSpotAllocations: true,
        isImpressionsBuyType: true,
        isOnlyMissedShown: true,
        isMissedSpotsShown: false,
        items: [
          {
            isExpanded: false,
            isSelected: false,
            firstSentMakegood: null,
            firstDraftMakegood: null,
            totalMissedSpots: 1,
            isOrbit: true,
            lineNumber: 1,
            days: 'MO-FR',
            time: '6 - 6:30pm',
            programName: ' FOX NEWS AT',
            spotLength: '30 s',
            totalSpots: 1,
            totalTrafficSpots: 1,
            weeklySpotAllocations: [],
            orderedSpotRate: '0',
            orderedImpressions: ' 8.4',
            videaCurrentImpressions: '',
            lineTotalMoney: '0',
            buyerComment: '',
            stationOrderComment: '',
            lineType: 'Original'
          }
        ]
      }
    },
    methods: {
      isCheckboxVisible (item) {},
      orderLineOnSelected (item) {},
      showCurrentInfo (item) {}
    }
  }
</script>
