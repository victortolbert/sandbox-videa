<template lang="pug">
  .vui-scrollable--x.vui-m-bottom--large
    table.vui-table.vui-no-row-hover.vui-table--fixed-layout.vui-table--compact.mg-preempts
      thead
        tr
          th(
            v-if = 'isEditMode'
            style = 'width: 35px'
          ) Sel
          th(
            style = 'width: 90px'
          )
            vui-sorting-column(
              title = 'Air Day'
            )
          th(
            style = 'width: 90px'
          )
            vui-sorting-column(
              title = 'Air Time'
            )
          th(
            v-bind:style = '{ width: isEditMode ? "120px" : "110px" }'
            style = 'width: 120px'
          )
            vui-sorting-column(
              title = 'Program<br>Placed'
            )
          th(
            style = 'width: 65px'
          )
            vui-sorting-column(
              title = 'Buy<br>Line #'
            )
          th.vui-cell-wrap(
            style = 'width: 70px'
          )
            vui-sorting-column(
              title = 'Spot #'
            )
          th(
            style = 'width: 122px'
          )
            vui-sorting-column(
              title = 'Status'
            )
          th(
            style = 'width: 67px'
          )
            vui-sorting-column(
              title = 'Priority'
            )
          th(
            style = 'width: 103px'
          )
            vui-sorting-column(
              title = 'Air Date'
            )
          th(
            style = 'width: 55px'
          )
            vui-sorting-column(
              title = 'Len'
            )
          th.spot-allocation-column(style='width: 503px')
            makegoods-spot-allocation-header(
              v-model = 'items[0].spotAllocations'
              navigator = 'spotAllocationNavigator'
            )
          th(
            style = 'width: 90px'
          )
            vui-sorting-column(
              title = 'Spot<br>Rate'
            )
          th(
            v-if = 'isImpressionsBuyType'
            style = 'width: 90px'
          )
            vui-sorting-column(
              title = 'Buyer<br>IMP'
            )
          th(
            v-if = 'isEditMode',
            style = 'width: 90px'
          )
            vui-sorting-column(
              title = 'Buyer<br>CPP'
            )
          th(
            style = 'width: 120px'
          ) Comment
      tbody
        tr(
          v-for = 'item in items'
        )
          td.align-center(
            v-if = 'isEditMode'
            style = 'width: 35px'
          )
            .checkbox.vui-checkbox.checked(
              changed = 'orderLineOnSelected'
              ng-change-arg = 'item'
              ng-change-function = 'itemSelectionChanged'
              value = 'item.isSelected'
            )
              span.icons
              input(
                type = 'checkbox'
              )
          td.vui-truncate(
            v-bind:title = 'item.airDay'
            style = 'width: 90px'
          ) {{ item.airDay }}
          td.vui-truncate(
            v-bind:title = 'item.airTime'
            style = 'width: 90px'
          ) {{ item.airTime }}
          td.vui-truncate(
            v-bind:title = 'item.programName'
            style = 'width: 120px' v-text='item.programName'
          ) {{ item.programName }}
          td.vui-truncate.vui-text-align--right(
            v-bind:title = 'item.lineNumber'
            style = 'width: 65px'
          ) {{ item.lineNumber }}
          td.vui-truncate.vui-text-align--right(
            v-bind:title = 'item.spotNumber'
            style = 'width: 70px'
          )
            span {{ item.spotNumber }}
          td.vui-truncate(
            v-bind:title = 'item.status'
            style = 'width: 122px'
          ) {{ item.status }}
          td.vui-truncate.vui-text-align--right(
            v-bind:title = 'item.priority'
            style = 'width: 67px'
          ) {{ item.priority }}
          td.vui-truncate(
            v-bind:title = 'item.airDate'
            style = 'width: 103px'
          ) {{ item.airDate }}
          td.vui-truncate.vui-text-align--center(
            v-bind:title = 'item.spotLength'
            style = 'width: 55px'
          ) {{ item.spotLength }}
          td.spot-allocation-cell(
            style = 'width: 503px'
          )
            makegoods-spot-allocation-with-missed-spots(
              v-model = 'item.spotAllocations'
              navigator = 'spotAllocationNavigator'
            )
          td.vui-truncate.vui-text-align--right(
            v-bind:title = 'item.spotRate'
            style = 'width: 90px'
          ) {{ item.spotRate }}
          td.vui-text-align--right(
            v-bind:title = 'item.buyerImpressions'
            style = 'width: 90px', v-if='isImpressionsBuyType'
          ) {{ item.buyerImpressions }}
          td.vui-text-align--right(
            v-bind:title = 'item.buyerCppm'
            style = 'width: 90px', v-if='isEditMode'
          ) {{ item.buyerCppm }}
          td(
            style = 'width: 120px'
          )
            input.vui-input.vui-size--1-of-1(
              v-bind:title = 'item.comment'
              v-if = 'isEditMode'
              v-model = 'item.comment'
              type = 'text'
            )
            | {{ item.comment }}
</template>

<script>
  export default {
    data () {
      return {
        isEditMode: true,
        isImpressionsBuyType: true,
        items: [
          {
            isSelected: false,
            airDay: 'MO-FR',
            airTime: '6-7pm',
            programName: 'Network 23 News This Morning',
            lineNumber: 2,
            spotNumber: 0,
            status: 'Open Preempt',
            priority: null,
            airDate: '09/02/2016',
            spotLength: '30 s',
            spotAllocations: [],
            spotRate: '0',
            buyerImpressions: '8.4',
            buyerCppm: '0',
            comment: ''
          },
          {
            isSelected: false,
            airDay: 'MO-FR',
            airTime: '6-7pm',
            programName: 'Network 23 News @ 6',
            lineNumber: 4,
            spotNumber: 0,
            status: 'Open Preempt',
            priority: null,
            airDate: '09/02/2016',
            spotLength: '30 s',
            spotAllocations: [],
            spotRate: '0',
            buyerImpressions: '8.4',
            buyerCppm: '0',
            comment: ''
          }
        ]
      }
    }
  }
</script>
