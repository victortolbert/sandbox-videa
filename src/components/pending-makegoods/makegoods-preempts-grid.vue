<template lang="pug">
  .vui-scrollable--x.vui-m-bottom--large
    //- pre {{ orderLineItems }}
    table.vui-table.vui-no-row-hover.vui-table--fixed-layout.vui-table--compact.mg-preempts
      thead
        tr
          th(v-if='isEditMode' style='width: 35px') Sel
          th(style='width: 90px'): vui-sorting-column(title='Air Day')
          th(style='width: 90px'): vui-sorting-column(title='Air Time')
          th(v-bind:style='{ width: isEditMode ? "120px" : "110px" }' style='width: 120px'): vui-sorting-column(title='Program<br>Placed')
          th(style='width: 65px'): vui-sorting-column(title='Buy<br>Line #')
          th.vui-cell-wrap(style='width: 70px'): vui-sorting-column(title='Spot #')
          th(style='width: 122px'): vui-sorting-column(title='Status')
          th(style='width: 67px'): vui-sorting-column(title='Priority')
          th(style='width: 103px'): vui-sorting-column(title='Air Date')
          th(style='width: 55px'): vui-sorting-column(title='Len')
          th.spot-allocation-column(style='width: 503px')
            //- makegoods-spot-allocation-header(v-model='orderLineItems[0].weeklySpotAllocations')
          th(style='width: 90px'): vui-sorting-column(title='Spot<br>Rate')
          th(v-if='isImpressionsBuyType' style='width: 90px'): vui-sorting-column(title='Buyer<br>IMP')
          th(v-if='isEditMode' style='width: 90px'): vui-sorting-column(title = 'Buyer<br>CPP')
          th(style = 'width: 120px') Comment
      tbody
        tr(v-for = 'preempt in order.preempts')
          td.align-center(v-if='isEditMode' style='width: 35px')
            .checkbox.vui-checkbox.checked(
              changed = 'orderLineOnSelected'
              ng-change-function = 'itemSelectionChanged'
              value = 'preempt.isSelected'
            )
              span.icons
              input(type='checkbox')

          td.vui-truncate(v-bind:title = 'preempt.airDay' style = 'width: 90px') {{ preempt.airDay }}
          td.vui-truncate(v-bind:title = 'preempt.airTime' style = 'width: 90px') {{ preempt.airTime }}
          td.vui-truncate(v-bind:title = 'preempt.programName' style = 'width: 120px') {{ preempt.buyerProgramOrdered }}
          td.vui-truncate.vui-text-align--right(
            v-bind:title = 'preempt.lineNumber'
            style = 'width: 65px'
          ) {{ preempt.buyerLineNumber }}
          td.vui-truncate.vui-text-align--right(
            v-bind:title = 'preempt.spotNumber'
            style = 'width: 70px'
          )
            span {{ preempt.stationSpotNumber }}
          td.vui-truncate(
            v-bind:title = 'preempt.status'
            style = 'width: 122px'
          ) {{ preempt.status }}
          td.vui-truncate.vui-text-align--right(
            v-bind:title = 'preempt.priority'
            style = 'width: 67px'
          ) {{ preempt.priority }}
          td.vui-truncate(
            v-bind:title = 'preempt.airDate'
            style = 'width: 103px'
          ) {{ preempt.airDate }}
          td.vui-truncate.vui-text-align--center(
            v-bind:title = 'preempt.spotLength'
            style = 'width: 55px'
          ) {{ preempt.length }}
          td.spot-allocation-cell(
            style = 'width: 503px'
          )
            makegoods-spot-allocation-with-missed-spots(
              v-model = 'preempt.spotAllocations'
            )
          td.vui-truncate.vui-text-align--right(
            v-bind:title = 'preempt.spotRate'
            style = 'width: 90px'
          ) {{ preempt.spotRate }}
          td.vui-text-align--right(
            v-bind:title = 'preempt.buyerImpressions'
            style = 'width: 90px', v-if='isImpressionsBuyType'
          ) {{ preempt.buyerImpressions }}
          td.vui-text-align--right(
            v-bind:title = 'preempt.buyerCppm'
            style = 'width: 90px', v-if='isEditMode'
          ) {{ preempt.buyerCppm }}
          td(
            style = 'width: 120px'
          )
            input.vui-input.vui-size--1-of-1(
              v-bind:title = 'preempt.comment'
              v-if = 'isEditMode'
              v-model = 'preempt.comment'
              type = 'text'
            )
            | {{ preempt.comment }}
</template>

<script>
  import axios from '~plugins/axios'

  export default {
    props: [ 'order', 'orderLineItems' ],

    data () {
      return {
        isEditMode: true,
        isImpressionsBuyType: true,
        // orderLineItems: [],
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
      // this.fetchOrderLineItems()
    }
  }
</script>
