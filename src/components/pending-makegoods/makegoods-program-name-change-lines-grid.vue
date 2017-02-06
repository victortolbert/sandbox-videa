<template lang="pug">
  .vui-scrollable--x
    table.vui-table.vui-no-row-hover.vui-table--striped.vui-table--fixed-layout.mg-program-name-change
      thead
        tr
          th.vui-text-align--center(
            v-if = 'isEditMode'
            style = 'width: 48px'
          ) Select
          th(
            style = 'width: 110px'
          )
            vui-sorting-column(
              title = 'Order Days'
            )
          th(
            style = 'width: 95px'
          )
            vui-sorting-column(
              title = 'Start Time'
            )
          th(
            style = 'width: 95px'
          )
            vui-sorting-column(
              title = 'End Time'
            )
          th(
            style = 'width: 220px'
          )
            vui-sorting-column(
              title = 'Program'
            )
          th(
            style = 'width: 70px'
          )
            vui-sorting-column(
              title = 'Line'
            )
          th(
           style = 'width: 55px'
          )
            vui-sorting-column(
              title = 'Len'
            )
          th.vui-cell-wrap(
           style = 'width: 80px'
          )
            vui-sorting-column(
              title = 'Ordered Spots'
            )
          th.spot-allocation-column(
            style = 'width: 503px'
          )
            makegoods-spot-allocation-header(
              v-model = 'items[0].spotAllocations'
              navigator = 'spotAllocationNavigator'
            )
          th(
            style = 'width: 100px'
          )
            vui-sorting-column(
              title = 'Spot Rate'
            )
          th(
            v-if = 'isImpressionsBuyType'
            style  ='width: 100px'
          )
            vui-sorting-column(
              title = 'Buyer IMP'
            )
          th(
            v-if = 'isImpressionsBuyType'
            style = 'width: 100px'
          )
            vui-sorting-column(
              title = 'Buyer CPM'
            )
          th(
            style = 'width: 50%'
          )
            vui-sorting-column(
              title = 'Line $ Total'
            )
      tbody
        tr(
          v-for = 'item in items'
        )
          td.vui-text-align--center(
            v-if = 'isEditMode'
            style = 'width: 48px'
          )
            .checkbox.vui-checkbox(
              value = 'item.isSelected'
            )
              span.icons
                span.vui-checkbox-unchecked
                  //- i.glyphicon.glyphicon-ok
                span.vui-checkbox-checked
                  //- i.glyphicon.glyphicon-ok
              input(
               v-bind:disabled = 'cbdisabled'
               type = 'checkbox'
              )
              label(
                v-bind:class = "{ 'pull-left': labelOnLeft }"
                v-bind:disabled = 'cbdisabled'
                v-bind:style = "labelOnLeft ? { 'margin-right': '7px' } : {}"
                ng-bind = 'text'
              )
          td.vui-truncate(
            v-bind:title = 'item.days'
            style = 'width: 110px'
          ) {{ item.days }}
          td.vui-truncate(
            v-bind:title = 'item.startTime'
            style = 'width: 95px'
          ) {{ item.startTime }}
          td.vui-truncate(
            v-bind:title = 'item.endTime'
            style = 'width: 95px'
          ) {{ item.endTime }}
          td.vui-truncate(
            v-bind:title = 'item.programName'
            style = 'width: 220px'
          ) {{ item.programName }}
          td.vui-truncate.vui-text-align--right(
            v-bind:title = 'item.lineNumber'
            style = 'width: 70px'
          ) {{ item.lineNumber }}
          td.vui-truncate.vui-text-align--right(
            v-bind:title = 'item.spotLength'
            style = 'width: 55px'
          ) {{ item.spotLength }}
          td.vui-truncate.vui-text-align--right(
            v-bind:title = 'item.totalSpots'
            style = 'width: 80px'
          ) {{ item.totalSpots }}
          td.spot-allocation-cell(
            style = 'width: 503px'
          )
            makegoods-spot-allocation-with-missed-spots(
              v-model = 'item.spotAllocations'
              navigator = 'spotAllocationNavigator'
            )
          td.vui-truncate.vui-text-align--right(
            v-bind:title = 'item.orderedSpotRate'
            style = 'width: 100px'
          ) {{ item.orderedSpotRate }}
          td.vui-truncate.vui-text-align--right(
            v-bind:title = 'item.orderedImpressions'
            v-if = 'isImpressionsBuyType'
            style = 'width: 100px'
          ) {{ item.orderedImpressions }}
          td.vui-truncate.vui-text-align--right(
            v-bind:title = 'item.orderedCppm'
            style = 'width: 100px'
          ) {{ item.orderedCppm }}
          td.vui-truncate.vui-text-align--right(
            v-bind:title = 'item.lineTotalMoney'
            style = 'width: 50%'
          ) {{ item.lineTotalMoney }}
</template>

<script>
  export default {
    data () {
      return {
        isEditMode: false,
        isImpressionsBuyType: true,
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
            startTime: '6:00 pm',
            endTime: '6:30 pm',
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
    }
  }
</script>
