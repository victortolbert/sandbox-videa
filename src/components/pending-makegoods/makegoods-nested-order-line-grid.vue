<template lang="pug">
  .nested-order-line-grid
    .vui-box(style='padding: 0.5rem; border: none;border-top: 1px solid #51535c')
      h3.vui-text-heading--label Traffic logs
    div
      table.vui-table.vui-no-row-hover.vui-table--fixed-layout
        thead
          tr
            th(
              v-if = 'isColumnExists(columnWidths.blank)'
              v-bind-style = "{ 'width': columnWidths.blank }"
              style = 'width: 39px'
            )
            th(
              v-bind:style = '{ "width": columnWidths.unitAiredStatusName }'
              style = 'width: 100px'
            )
              vui-sorting-column(
                title = 'Aired<br>Status'
              )
            th(
              v-bind:style = '{ "width": columnWidths.spotNumber }'
              style = 'width: 78px'
            )
              vui-sorting-column(
                title = 'Spot #'
              )
            th(
              v-bind:style = '{ "width": columnWidths.airDay }'
              style = 'width: 108px'
            )
              vui-sorting-column(
                title = 'Air Day'
              )
            th(
              v-bind:style = '{ "width": columnWidths.airTime }'
              style = 'width: 138px'
            )
              vui-sorting-column(
                title = 'Air Time'
              )
            th(
              v-bind:style = '{ "width": columnWidths.programPlaced }'
              style = 'width: 192px'
            )
              vui-sorting-column(
                title = 'Program Placed'
              )
            th(
              v-bind:style = '{ "width": columnWidths.priority }'
              style = 'width: 88px'
            )
              vui-sorting-column(
                title = 'Priority'
              )
            th(
              v-bind:style = '{ "width": columnWidths.status }'
              style = 'width: 80px'
            )
              vui-sorting-column(
                title = 'Status<br>Name'
              )
            th(
              v-bind:style = '{ "width": columnWidths.airDate }'
              style = 'width: 100px'
            )
              vui-sorting-column(
                title = 'Air Date'
              )
            th(
              v-bind:style = '{ "width": columnWidths.lineNumber }'
              style = 'width: 86px'
            )
              vui-sorting-column(
                title = 'Station<br>Line #'
              )
            th(
              v-bind:style = '{ "width": columnWidths.altLineNumber }'
              style = 'width: 65px'
            ) Alt. #[br] Line #
            th(
              v-bind:style = '{ "width": columnWidths.assignedMakegoodId }'
              style = 'border-right: 1px solid rgb(81, 83, 92); width: 73px'
            ) MG #
            th(
              v-bind:style = '{ "width": spotAllocationNavigator.tableCellWidth }'
              v-if = 'isShowSpotAllocations'
              style = 'background-color: rgb(240, 248, 252); width: 503px;'
            )
        tbody
          tr(
            v-for = 'item in childItems'
          )
            td(
              v-if = 'isColumnExists(columnWidths.blank)'
              rowspan = '0'
            )
            td.vui-truncate(
              v-bind:title = 'item.unitAiredStatusName'
              v-if = 'item.isMain'
              rowspan = '0'
            ) {{ !!item.airedBroadcastingDateTime ? item.unitAiredStatusName : null }}
            td.vui-text-align--right(
              v-bind:title = 'item.spotNumber'
              v-if = 'item.isMain'
              rowspan = '0'
            ) {{ item.spotNumber }}
            td.vui-truncate(
              v-bind:title = 'item.airDay'
              v-if = 'item.isMain'
              rowspan = '0'
            ) {{ item.airDay }}
            td(
              v-bind:title = 'item.airTime'
              v-if = 'item.isMain'
              rowspan = '0'
            ) {{ item.airTime }}
            td.vui-truncate(
              v-bind:title = 'item.programName'
              v-if = 'item.isMain'
              rowspan = '0'
            ) {{ item.programName }}
            td(
              v-bind:title = 'item.priority'
              v-if = 'item.isMain'
              rowspan = '0'
            ) {{ item.priority }}
            td.vui-truncate(
              v-bind:title = 'item.statusName'
              v-if = 'item.isMain'
              rowspan = '0'
            ) {{ item.statusName }}
            td(
              v-bind:title = 'item.airDate'
              v-if = 'item.isMain'
              rowspan = '0'
            ) {{ item.airDate }}
            td.vui-text-align--right(
              v-bind:title = 'item.lineNumber'
              v-if = 'item.isMain'
              rowspan = '0'
            ) {{ item.lineNumber }}
            td.vui-text-align--right(
              v-bind:title = 'item.altLineNumber'
              v-if = 'item.isMain'
              rowspan = '0'
            ) {{ item.altLineNumber }}
            td(
              v-if = 'item.isMain'
              rowspan = '0'
              v-bind:title = 'item.assignedMakegoodData.sellerOfferId'
              style = 'border-right: 1px solid #51535c'
            )
              a.text-underline(
                @click = 'openMakegood(item.assignedMakegoodData)'
              ) {{ item.assignedMakegoodData.sellerOfferId }}
            td.spot-allocation-cell(
              v-if = 'isShowSpotAllocations && item.isMain'
              rowspan = '0'
            )
              makegoods-spot-allocation-with-missed-spots(
                v-model = 'item.spotAllocations'
                navigator = 'spotAllocationNavigator'
              )
</template>

<script>
  export default {
    props: {
      isShowSpotAllocations: {
        type: Boolean,
        default: true
      },

      childItems: {
        type: Array
      }
    }
  }
</script>
