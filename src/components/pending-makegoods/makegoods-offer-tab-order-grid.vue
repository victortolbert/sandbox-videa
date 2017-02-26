<template lang="pug">
  .vui-scrollable--x
    table.vui-table.vui-no-row-hover.vui-table--striped.vui-table--fixed-layout
      thead
        tr
          th(
            style = 'width: 41px'
          )
          th(
            style = 'width: 48px'
          ) Sent
          th(
            style = 'width: 52px'
          ) Draft
          th(
            style = 'width: 68px'
          ) Select
          th(
            style = 'width: 74px'
          )
            vui-sorting-column(
              column-name = 'lineNumber'
              current-sorting = 'sorting'
              on-sorting = 'columnSortingChanged(gridColumns.lineNumber)'
              title = 'Line #'
            )
          th(
            style = 'width: 70px'
          )
            vui-sorting-column(
              column-name = 'days'
              current-sorting = 'sorting'
              on-sorting = 'columnSortingChanged(gridColumns.days)'
              title = 'Days'
            )
          th(
            style = 'width: 110px'
          )
            vui-sorting-column(
              column-name = 'time'
              current-sorting = 'sorting'
              on-sorting = 'columnSortingChanged(gridColumns.time)'
              title = 'Time'
            )
          th.vui-truncate(
            style='width: 200px'
          )
            vui-sorting-column(
              column-name = 'programName'
              current-sorting = 'sorting'
              on-sorting = 'columnSortingChanged(gridColumns.programName)'
              title = 'Program'
            )
          th(
            style = 'width: 83px'
          )
            vui-sorting-column(
              column-name = 'spotLength'
              current-sorting = 'sorting'
              on-sorting = 'columnSortingChanged(gridColumns.spotLength)'
              title = 'Length'
            )
          th(
            style = 'width: 92px'
          )
            vui-sorting-column(
              column-name = 'totalSpots'
              current-sorting = 'sorting'
              on-sorting = 'columnSortingChanged(gridColumns.totalSpots)'
              title = 'Ordered<br>Spots'
            )
          th(
            style = 'width: 88px'
          )
            vui-sorting-column(
              column-name = 'totalMissedSpots'
              current-sorting = 'sorting'
              on-sorting = 'columnSortingChanged(gridColumns.totalMissedSpots)'
              title = 'Missed<br>Spots'
            )
          th(
            style = 'width: 82px'
          )
            vui-sorting-column(
              column-name = 'totalTrafficSpots'
              current-sorting = 'sorting'
              on-sorting = 'columnSortingChanged(gridColumns.totalTrafficSpots)'
              title = 'Traffic<br>Spots'
            )
          th(
            style = 'width: 140px'
          )
            | Current
            br
            | Information
          th.spot-allocation-column(
            v-if = 'isShowSpotAllocations'
            style = 'width: 503px'
          )
            makegoods-spot-allocation-header(
              v-model = 'items[0].weeklySpotAllocations'
              navigator = 'spotAllocationNavigator'
            )
          th(
            style = 'width: 100px'
          )
            vui-sorting-column(
              column-name = 'orderedSpotRate'
              current-sorting = 'sorting'
              on-sorting = 'columnSortingChanged(gridColumns.orderedSpotRate)'
              title = 'Spot Rate'
            )
          th(
            v-if='isImpressionsBuyType'
            style = 'width: 100px'
          )
            vui-sorting-column(
              column-name = 'orderedImpressions'
              current-sorting = 'sorting'
              on-sorting = 'columnSortingChanged(gridColumns.orderedImpressions)'
              title = 'Buyer<br>IMP'
            )
          th(
            v-if = 'isImpressionsBuyType'
            style = 'width: 100px'
          )
            vui-sorting-column(
              column-name = 'videaCurrentImpressions'
              current-sorting = 'sorting'
              on-sorting = 'columnSortingChanged(gridColumns.videaCurrentImpressions)'
              title = 'Videa<br>IMP'
            )
          th(
            style = 'width: 100px'
          )
            vui-sorting-column(
              column-name = 'lineTotalMoney'
              current-sorting = 'sorting'
              on-sorting = 'columnSortingChanged(gridColumns.lineTotalMoney)'
              title = 'Line<br>$ Total'
            )
          th(
            style = 'width: 100px'
          )
            | Buyer
            br
            | Comment
          th(
            style = 'width: 132px'
          )
            | Station
            br
            | Order Comment
          th(
            style = 'width: 100px'
          ) Spot Option
          th(
            style = 'width: 100px'
          ) Line Type
      tbody
        template(
          v-bind:class = "{ 'vui-is-selected': offer.isExpanded }"
          v-for = 'offer in order.offers'
          v-show = '!isOnlyMissedShown || offer.totalMissedSpots > 0'
        )
          tr
            td(
              style = 'width: 41px'
            )
              a(
                @click = 'offer.isExpanded = !offer.isExpanded'
              )
                //- svg.vui-icon.vui-icon--small.vui-m-bottom--xxx-small.vui-m-right--xxx-small
                //-   use(v-if='offer.isExpanded', xmlns:xlink='http://www.w3.org/1999/xlink', xlink:href='/Content/Images/icons.svg#icon-caret-down')
            td.vui-text-align--center(
              style = 'width: 48px'
            )
              a.vui-m-right--xx-small(
                @click = 'showOfferDialog(offer.firstSentMakegood)'
                v-show = 'offer.firstSentMakegood'
                title = 'Click to open the Offer which has been sent and is awaiting approval'
              )
                vui-icon(
                  name = 'medicine-bottle'
                )
            td.vui-text-align--center(
              style = 'width: 52px'
            )
              a(
                @click = 'showOfferDialog(offer.firstDraftMakegood)'
                v-show = 'offer.firstDraftMakegood'
                title = 'Indicates this Buy Line has DRAFT Offers'
              )
                vui-icon(
                  name ='pencil-square'
                )
            td.vui-text-align--center.overflow-visible(
              style = 'width: 68px'
            )
              label.vui-checkbox(
                v-if = 'isCheckboxVisible(offer)'
                title = 'Select to include in Offer'
              )
                input.vui-input(
                  @change='orderLineOnSelected(offer)'
                  v-model = 'offer.isSelected'
                  type = 'checkbox'
                )
                span.vui-checkbox--faux
            td.vui-text-align--right(
              v-bind:title = 'offer.lineNumber'
              v-if = '!offer.isOrbit'
              style = 'width: 74px'
            ) {{ offer.lineNumber }}
            td.vui-truncate(
              v-bind:title = 'offer.days'
              style = 'width: 70px'
            ) {{ offer.days }}
            td.vui-truncate(
              v-bind:title = 'offer.time'
              style = 'width: 110px'
            ) {{ offer.time }}
            td.vui-truncate(
              v-bind:title = 'offer.programName'
              style = 'width: 200px'
            ) {{ offer.programName }}
            td.vui-text-align--center(
              v-bind:title = 'offer.spotLength'
              style = 'width: 83px'
            ) {{ offer.spotLength }}
            td.vui-text-align--right(
              v-bind:title = 'offer.totalSpots'
              style = 'width: 92px'
            ) {{ offer.totalSpots }}
            td.vui-text-align--right.vui-text-color--error(
              v-bind:title = 'offer.totalMissedSpots'
              style = 'width: 88px'
            ) {{ offer.totalMissedSpots }}
            td.vui-text-align--right(
              v-bind:title = 'offer.totalTrafficSpots'
              style = 'width: 82px'
            ) {{ offer.totalTrafficSpots }}
            td.vui-text-align--center(
              style = 'width: 140px'
            )
              a(
                @click = 'showCurrentInfo(offer)'
                title = 'Click to see current rates & ratings and matched Avails'
              )
                vui-icon(
                  name = 'popout'
                )
            td.spot-allocation-cell(
              v-if = 'isShowSpotAllocations'
              style = 'width: 503px'
            )
              makegoods-spot-allocation-with-missed-spots(
                v-if = 'isMissedSpotsShown'
                v-model = 'offer.weeklySpotAllocations'
                navigator = 'spotAllocationNavigator'
              )
            td.vui-text-align--right.currency(
              v-bind:title = 'offer.orderedSpotRate'
              style = 'width: 100px'
            ) {{ offer.orderedSpotRate }}
            td.vui-text-align--right(
              v-bind:title = 'offer.orderedImpressions'
              v-if = 'isImpressionsBuyType'
              style = 'width: 100px'
            ) {{ offer.orderedImpressions }}
            td.vui-text-align--right(
              v-bind:title='offer.videaCurrentImpressions'
              v-if = 'isImpressionsBuyType'
              style = 'width: 100px'
            ) {{ offer.videaCurrentImpressions }}
            td.vui-text-align--right.currency(
              v-bind:title = 'offer.lineTotalMoney'
              style = 'width: 100px'
            ) {{ offer.lineTotalMoney }}
            td.vui-truncate(
              v-bind:title='offer.buyerComment'
              style = 'width: 100px'
            ) {{ offer.buyerComment }}
            td.vui-truncate(
              v-bind:title='offer.stationOrderComment'
              style = 'width: 132px'
            ) {{ offer.stationOrderComment }}
            td(
              style = 'width: 100px'
            )
            td(
              v-bind:title = 'offer.lineType'
              style = 'width: 100px'
            ) {{ offer.lineType }}
          tr.vui-is-expanded(
            v-if = 'offer.isExpanded'
            v-show = '!isOnlyMissedShown || offer.totalMissedSpots > 0'
          )
            td.vui-align-top.om-nested-table-container.bordered(
              colspan = '14'
              style = 'padding: 0'
            )
              makegoods-nested-order-line-grid(
                column-widths = 'expandingColumnsWidths'
                is-items-selectable = 'isChildCheckboxVisible'
                is-show-spot-allocations = 'isShowSpotAllocations'
                open-makegood = 'showOfferDialog'
                order-line-child-selected = 'orderLineChildSelected(order)'
                order-line-id = 'order.orderDetailsId'
                spot-allocation-navigator = 'spotAllocationNavigator'
              )
            td.vui-align-top.om-nested-table-container.bordered(
              colspan = '4'
              style = 'padding: 0'
            )
              makegoods-nested-order-line-invoice-details-grid(
                column-widths = 'expandingColumnsWidths'
                is-items-selectable = 'isChildCheckboxVisible'
                is-show-spot-allocations = 'isShowSpotAllocations'
                order-line-child-selected = 'orderLineChildSelected(order)'
                order-line-id = 'order.orderDetailsId'
                spot-allocation-navigator = 'spotAllocationNavigator'
              )
                .vui-box(
                  style = 'padding: 0.5rem; border: none; border-top: 1px solid #51535c'
                )
                  h3.vui-text-heading--label Agency Invoice Details
                div
                  table.vui-table.vui-no-row-hover.vui-table--fixed-layout(
                    cg-busy = 'promise'
                  )
                    caption
                    thead
                      tr
                        th.vui-truncate(
                          v-bind:style = '{ "width": columnWidths.isciAdId }'
                          style = 'border-left: 1px solid rgb(81, 83, 92); width: 100px'
                        )
                          | ISCI
                          br
                          | AD ID
                        th.vui-truncate(
                          v-bind:style = '{ "width": columnWidths.invoiceDate }'
                          style = 'width: 100px'
                        )
                          | Station
                          br
                          | Inv Date
                        th.vui-truncate(
                          v-bind:style = '{ "width": columnWidths.affidavitRate }'
                          style = 'width: 99px'
                        )
                          | Station
                          br
                          | Inv Amt
                        th.vui-truncate(
                          v-bind:style = '{ "width": columnWidths.externalInvoiceId }'
                          style = 'width: 99px'
                        )
                          | Station
                          br
                          | Inv #
                    tbody
                      tr(
                        v-for = 'item in childItems'
                      )
                        td(
                          style = 'border-left: 1px solid #51535c; height: 2.5rem'
                        ) {{ item.isciAdId }}
                        td.vui-truncate {{ item.invoiceDate }}
                        td.vui-truncate.vui-text-align--right(
                          v-bind:class = '{ "currency": item.detailsAffidavitRate }'
                        ) {{ item.detailsAffidavitRate }}
                        td.vui-truncate  {{ item.externalInvoiceId }}
            td.vui-align-top.om-nested-table-container.bordered(
              colspan = '4'
              style = 'padding:0'
            )
              makegoods-nested-order-line-makegoods-grid(
                column-widths = 'expandingMakegoodColumnsWidths'
                items = 'item.makegoods'
                order-line-id = 'item.orderDetailsId'
                show-offer-dialog = 'showOfferDialog'
              )
    //- grid
    //-   grid-item(size = '3/4')
    //-     .vui-box.vui-theme--shade
    //-   grid-item(size = '1/4')
    //-     .vui-box.vui-theme--shade
    //-       pre {{ order }}
</template>

<script>
  export default {
    props: ['order'],

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
