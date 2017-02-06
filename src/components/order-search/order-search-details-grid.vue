<template lang="pug">
  .fixed-header-grid(
    style = 'display: flex;flex-direction: column; position: relative; height: 100%'
  )
    div(
      style = 'overflow: hidden; flex: 0 0 auto; width: 1709px'
    )
      table.vui-table.vui-no-row-hover.vui-table--striped.vui-table--fixed-layout(
        style = 'position: relative'
      )
        thead
          tr
            th(
              style = 'width: 80px'
            )
            th(
              style = 'width: 78px'
            )
              vui-sorting-column(
                column-name = 'lineNumber'
                current-sorting = 'sorting'
                title = 'Line #'
              )
            th(
              style = 'width: 82px'
            ) Days
            th(
              style = 'width: 110px'
            ) Time
            th(
              style = 'width: 200px'
            )
              vui-sorting-column(
                column-name = 'programName'
                current-sorting = 'sorting'
                title = 'Program'
              )
            th(
              style = 'width: 88px'
            ) Len
            th(
              style = 'width: 116px'
            )
              | Spots
              br
              | Ordered
            th(
              style = 'width: 100px'
            )
              | Spots
              br
              | Missed
            th(
              style = 'width: 86px'
            )
              | Traffic
              br
              | Spots
            th(
              style = 'width: 140px'
            )
              | Current
              br
              | Information
            th.spot-allocation-column(
              v-bind:style = '{ "width": spotAllocationNavigator.tableCellWidth }'
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
              | Spot
              br
              | Rate
            th(
              v-if = '!isImpressionsBuyType'
              style = 'width: 100px'
            )
              | Buyer
              br
              | RTG
            th(
              v-if = '!isImpressionsBuyType'
              style = 'width: 100px'
            )
              | Videa
              br
              | RTG
            th(
              style = 'width: 100px'
            )
              | Line
              br
              | $ Total
            th(
              style = 'width: 100px'
            )
              | Buyer
              br
              | Comment
            th(
              style = 'width: 110px'
            )
              | Station Order
              br
              | Comment
            th(
              style = 'width: 100px'
            )
              | Spot
              br
              | Option
            th(
              style = 'width: 100px'
            )
              | Line
              br
              | Type
    .vui-scrollable(
      style = 'flex: 0 1 auto; margin-top: 0px'
    )
      table.vui-table.vui-no-row-hover.vui-table--striped.vui-table--fixed-layout
        tbody
          tr(
            v-bind:class = '{ "vui-is-selected": item.isExpanded }'
            ng-repeat-start = 'item in items | orderBy:sorting.sortPredicate:sorting.isSortDesc'
          )
            td.vui-text-align--center(
              style = 'width: 80px'
            )
              a(
                @click = 'item.isExpanded = !item.isExpanded'
              )
                svg.vui-icon.vui-icon--small.vui-m-bottom--xxx-small.vui-m-right--xxx-small
                  use(
                    v-if = '!item.isExpanded'
                    xlink:href = '/Content/Images/icons.svg#icon-caret-right'
                  )
            td.vui-text-align--right(
              v-if = '!item.isOrbit'
              v-text = 'item.lineNumber'
              style = 'width: 78px'
              title = '1'
            ) 1
            td(
              v-text = 'item.days|vuiDaysAbbreviation'
              style = 'width: 82px'
              title = 'MO-FR'
            ) MO-FR
            td.vui-truncate(
              v-text = 'item.time|vuiTimeRange'
              style = 'width: 110px'
              title = '10 - 10:30pm'
            ) 10 - 10:30pm
            td.vui-truncate(
              v-text = 'item.programName'
              style = 'width: 200px'
              title = 'FAMILY GUY'
            ) FAMILY GUY
            td(
              v-text = 'item.spotLength|vuiSeconds'
              style = 'width: 88px'
              title = '30 s'
            ) 30 s
            td.vui-text-align--right(
              v-text = 'item.totalSpots'
              style = 'width: 116px'
              title = '12'
            ) 12
            td.vui-text-align--right(
              v-text = 'item.totalMissedSpots'
              style = 'width: 100px'
              title = ''
            )
            td.vui-text-align--right(
              v-text = 'item.totalTrafficSpots'
              style = 'width: 86px'
              title = ''
            )
            td.vui-text-align--center(
              style = 'width: 140px'
            )
              a.pointer.current-info.popup(
                @click = 'showCurrentInfo(item)'
              )
                icon.vui-m-bottom--xxx-small.vui-m-right--xxx-small(
                  name = 'popout'
                )
            td.spot-allocation-cell(
              v-bind:style = '{ "width": spotAllocationNavigator.tableCellWidth }'
              v-if = 'isShowSpotAllocations'
              style = 'width: 503px'
            )
              makegoods-spot-allocation-with-missed-spots(
                v-if = 'isMissedSpotsShown'
                v-model = 'item.weeklySpotAllocations'
                navigator = 'spotAllocationNavigator'
              )
            td.vui-text-align--right(
              v-text = 'item.orderedSpotRate|vuiDecimal'
              style = 'width: 100px'
              title = '$50.00'
            ) 50.00
            td.vui-text-align--right(
              v-if = '!isImpressionsBuyType'
              v-text = 'item.orderedRating|vuiDecimal'
              style = 'width: 100px'
              title = '1.10'
            ) 1.10
            td.vui-text-align--right(
              v-if = '!isImpressionsBuyType'
              v-text = 'item.videaCurrentRating|vuiDecimal'
              style = 'width: 100px'
              title = ''
            )
            td.vui-text-align--right.currency(
              v-text = 'item.lineTotalMoney|vuiDecimal'
              style = 'width: 100px'
              title = '$600.00'
            ) 600.00
            td(
              v-text = 'item.buyerComment'
              style = 'width: 100px'
              title = ''
            )
            td(
              v-text = 'item.stationOrderComment'
              style = 'width: 110px'
              title = ''
            )
            td(
              v-text = 'item|vuiSpotOption'
              style = 'width: 100px'
              title = ''
            )
            td(
              v-text = 'item.lineType'
              style = 'width: 100px'
              title = 'Original'
            ) Original
          tr.vui-is-selected(
            v-bind:class = '{ "vui-is-selected": item.isExpanded }'
            ng-repeat-start = 'item in items | orderBy:sorting.sortPredicate:sorting.isSortDesc'
          )
            td.vui-text-align--center(
              style = 'width: 80px'
            )
              a(
                @click = 'item.isExpanded = !item.isExpanded'
              )
                //- svg.vui-icon.vui-icon--small.vui-m-bottom--xxx-small.vui-m-right--xxx-small
                //-   use(v-if='item.isExpanded', xmlns:xlink='http://www.w3.org/1999/xlink', xlink:href='/Content/Images/icons.svg#icon-caret-down')
            td.vui-text-align--right(
              v-if = '!item.isOrbit'
              v-text = 'item.lineNumber'
              style = 'width: 78px'
              title = '2'
            ) 2
            td(
              v-text = 'item.days|vuiDaysAbbreviation'
              style = 'width: 82px'
              title = 'MO-FR'
            ) MO-FR
            td.vui-truncate(
              v-text = 'item.time|vuiTimeRange'
              style = 'width: 110px'
              title = '10 - 10:30pm'
            ) 10 - 10:30pm
            td.vui-truncate(
              v-text = 'item.programName'
              style = 'width: 200px'
              title = 'FAMILY GUY'
            ) FAMILY GUY
            td(
              v-text = 'item.spotLength|vuiSeconds'
              style = 'width: 88px'
              title = '15 s'
            ) 15 s
            td.vui-text-align--right(
              v-text = 'item.totalSpots'
              style = 'width: 116px'
              title = '6'
            ) 6
            td.vui-text-align--right(
              v-text = 'item.totalMissedSpots'
              style = 'width: 100px'
              title = ''
            )
            td.vui-text-align--right(
              v-text = 'item.totalTrafficSpots'
              style = 'width: 86px'
              title = ''
            )
            td.vui-text-align--center(
              style = 'width: 140px'
            )
              a.pointer.current-info.popup(
                @click = 'showCurrentInfo(item)'
              )
                icon.vui-m-bottom--xxx-small.vui-m-right--xxx-small(
                  name = 'popout'
                )
            td.spot-allocation-cell(
              v-bind:style = '{ "width": spotAllocationNavigator.tableCellWidth }'
              v-if = 'isShowSpotAllocations'
              style = 'width: 503px'
            )
              makegoods-spot-allocation-with-missed-spots(
                v-if = 'isMissedSpotsShown'
                v-model = 'item.weeklySpotAllocations'
                navigator = 'spotAllocationNavigator'
              )
            td.vui-text-align--right(
              v-text = 'item.orderedSpotRate|vuiDecimal'
              style = 'width: 100px'
              title = '$25.00'
            ) 25.00
            td.vui-text-align--right(
              v-if = '!isImpressionsBuyType'
              v-text = 'item.orderedRating|vuiDecimal'
              style = 'width: 100px'
              title = '1.00'
            ) 1.00
            td.vui-text-align--right(
              v-if = '!isImpressionsBuyType'
              v-text = 'item.videaCurrentRating|vuiDecimal'
              style = 'width: 100px'
              title = ''
            )
            td.vui-text-align--right.currency(
              v-text = 'item.lineTotalMoney|vuiDecimal'
              style = 'width: 100px'
              title = '$150.00'
            ) 150.00
            td(
              v-text = 'item.buyerComment'
              style = 'width: 100px'
              title = '****BOOKEND****'
            ) ****BOOKEND****
            td(
              v-text = 'item.stationOrderComment'
              style = 'width: 110px'
              title = ''
            )
            td(
              v-text = 'item|vuiSpotOption'
              style = 'width: 100px'
              title = ''
            )
            td(
              v-text = 'item.lineType'
              style = 'width: 100px'
              title = 'Original'
            ) Original
          tr.vui-is-expanded(
            v-if = 'item.isExpanded'
            ng-repeat-end = ''
          )
            td.vui-align-top.om-nested-table-container.bordered(
              colspan = '11'
              style = 'padding: 0'
            )
              makegoods-nested-order-line-grid(
                child-items = 'item.child'
                column-widths = 'expandingColumnsWidths'
                is-show-spot-allocations = 'isShowSpotAllocations'
                open-makegood = 'showOfferDialog'
                order-line-id = 'item.orderDetailsId'
                spot-allocation-navigator = 'spotAllocationNavigator'
              )
            td.vui-align-top.om-nested-table-container.bordered(
              colspan='4'
              style = 'padding: 0'
            )
              makegoods-nested-order-line-invoice-details-grid(
                child-items = 'item.child'
                column-widths = 'expandingColumnsWidths'
                order-line-id = 'item.orderDetailsId'
                is-show-spot-allocations = 'isShowSpotAllocations'
                spot-allocation-navigator = 'spotAllocationNavigator'
              )
            td.vui-align-top.om-nested-table-container.bordered(
              colspan = '4'
              style = 'padding: 0'
            )
              makegoods-nested-order-line-makegoods-grid(
                column-widths = 'expandingMakegoodColumnsWidths'
                items = 'item.makegoods'
                order-line-id = 'item.orderDetailsId'
                show-offer-dialog = 'showOfferDialog'
              )
          tr.vui-is-selected(
            v-bind:class = '{ "vui-is-selected": item.isExpanded }'
            ng-repeat-start = 'item in items | orderBy:sorting.sortPredicate:sorting.isSortDesc'
          )
            td.vui-text-align--center(
              style = 'width: 80px'
            )
              a(
                @click = 'item.isExpanded = !item.isExpanded'
              )
                //- svg.vui-icon.vui-icon--small.vui-m-bottom--xxx-small.vui-m-right--xxx-small
                //-   use(v-if='item.isExpanded', xmlns:xlink='http://www.w3.org/1999/xlink', xlink:href='/Content/Images/icons.svg#icon-caret-down')
            td.vui-text-align--right(
              v-if = '!item.isOrbit'
              v-text = 'item.lineNumber'
              style = 'width: 78px'
              title = '3'
            ) 3
            td(
              v-text = 'item.days|vuiDaysAbbreviation'
              style = 'width: 82px'
              title = 'SA'
            ) SA
            td.vui-truncate(
              v-text = 'item.time|vuiTimeRange'
              style = 'width: 110px'
              title = '10 - 10:30pm'
            ) 10 - 10:30pm
            td.vui-truncate(
              v-text = 'item.programName'
              style = 'width: 200px'
              title = 'FAMILY GUY'
            ) FAMILY GUY
            td(
              v-text = 'item.spotLength|vuiSeconds'
              style = 'width: 88px'
              title = '15 s'
            ) 15 s
            td.vui-text-align--right(
              v-text = 'item.totalSpots'
              style = 'width: 116px'
              title = '12'
            ) 12
            td.vui-text-align--right(
              v-text = 'item.totalMissedSpots'
              style = 'width: 100px'
              title = ''
            )
            td.vui-text-align--right(
              v-text = 'item.totalTrafficSpots'
              style = 'width: 86px'
              title = ''
            )
            td.vui-text-align--center(
              style = 'width: 140px'
            )
              a.pointer.current-info.popup(
                @click = 'showCurrentInfo(item)'
              )
                svg.vui-icon.vui-icon--small.vui-m-bottom--xxx-small.vui-m-right--xxx-small
                  use(
                    xlink:href = '/Content/Images/icons.svg#icon-popout'
                  )
            td.spot-allocation-cell(
              v-bind:style = '{ "width": spotAllocationNavigator.tableCellWidth }'
              v-if = 'isShowSpotAllocations'
              style = 'width: 503px'
            )
              makegoods-spot-allocation-with-missed-spots(
                v-if = 'isMissedSpotsShown'
                v-model = 'item.weeklySpotAllocations'
                navigator = 'spotAllocationNavigator'
              )
            td.vui-text-align--right(
              v-text = 'item.orderedSpotRate|vuiDecimal'
              style = 'width: 100px'
              title = '$25.00'
            ) 25.00
            td.vui-text-align--right(
              v-if = '!isImpressionsBuyType'
              v-text = 'item.orderedRating|vuiDecimal'
              style = 'width: 100px'
              title = '1.00'
            ) 1.00
            td.vui-text-align--right(
              v-if = '!isImpressionsBuyType'
              v-text = 'item.videaCurrentRating|vuiDecimal'
              style = 'width: 100px'
              title = ''
            )
            td.vui-text-align--right.currency(
              v-text = 'item.lineTotalMoney|vuiDecimal'
              style = 'width: 100px'
              title = '$300.00'
            ) 300.00
            td(
              v-text = 'item.buyerComment'
              style = 'width: 100px'
              title = '****BOOKEND****'
            ) ****BOOKEND****
            td(
              v-text = 'item.stationOrderComment'
              style = 'width: 110px'
              title = ''
            )
            td(
              v-text = 'item|vuiSpotOption'
              style = 'width: 100px'
              title = ''
            )
            td(
              v-text = 'item.lineType'
              style = 'width: 100px'
              title = 'Original'
            ) Original
          tr.vui-is-expanded(
            v-if = 'item.isExpanded'
            ng-repeat-end = ''
          )
            td.vui-align-top.om-nested-table-container.bordered(
              colspan = '11'
              style = 'padding: 0'
            )
              makegoods-nested-order-line-grid(
                child-items = 'item.child'
                column-widths = 'expandingColumnsWidths'
                is-show-spot-allocations = 'isShowSpotAllocations'
                open-makegood = 'showOfferDialog'
                order-line-id = 'item.orderDetailsId'
                spot-allocation-navigator = 'spotAllocationNavigator'
              )
            td.vui-align-top.om-nested-table-container.bordered(
              colspan = '4'
              style = 'padding: 0'
            )
              makegoods-nested-order-line-invoice-details-grid(
                child-items = 'item.child'
                column-widths = 'expandingColumnsWidths'
                is-show-spot-allocations = 'isShowSpotAllocations'
                order-line-id = 'item.orderDetailsId'
                spot-allocation-navigator = 'spotAllocationNavigator'
              )
            td.vui-align-top.om-nested-table-container.bordered(
              colspan = '4'
              style = 'padding: 0'
            )
              makegoods-nested-order-line-makegoods-grid(
                column-widths = 'expandingMakegoodColumnsWidths'
                items = 'item.makegoods'
                order-line-id = 'item.orderDetailsId'
                show-offer-dialog = 'showOfferDialog'
              )
</template>
