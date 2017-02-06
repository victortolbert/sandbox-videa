<template lang="pug">
  .vui-scrollable--x
    spot-details-grid(
      items = 'spotDetails'
      sorting-changed = 'sortingChanged'
      current-sorting = 'currentSorting'
    )
      table.vui-table.vui-m-bottom--small
        thead
          tr
            th(
              data-column-name = 'buyLineNumber'
            )
              vui-sorting-column(
                title = 'Buy Line'
              )
            th(
              data-column-name = 'purchasedProgram'
            )
              vui-sorting-column(
                title = 'Program'
              )
            th(
              data-column-name = 'airDate'
            )
              vui-sorting-column(
                title = 'Air Date'
              )
            th(
              data-column-name = 'airDay'
            )
              vui-sorting-column(
                title = 'Day'
            )
            th(
              data-column-name = 'airTime'
            )
              vui-sorting-column(
                title = 'Air Time'
              )
            th(
              data-column-name = 'orderedTimePeriod'
            )
              vui-sorting-column(
                title = 'Ordered Time Period'
              )
            th(
              data-column-name = 'orderedDates'
            )
              vui-sorting-column(
                title = 'Ordered Dates'
              )
            th(
              data-column-name = 'spotLength'
            )
              vui-sorting-column(
                title = 'Spot Length'
              )
            th(
              data-column-name = 'rate'
            )
              vui-sorting-column(
                title = 'Rate'
              )
            th(
              data-column-name = 'hhRatingsIMPs'
            )
              vui-sorting-column(
                title = 'HH RTG/IMP <sup>1</sup>'
              )
            th(
              data-column-name = 'actualRating'
            )
              vui-sorting-column(
                title = 'Actual RTG/IMP <sup>1</sup>'
              )
            th(
              data-column-name = 'purchasedRating'
            )
              vui-sorting-column(
                title = 'Purchased RTG/IMP'
              )
            th(
              data-column-name = 'difference'
            )
              vui-sorting-column(
                title = '+/-'
              )
            th(
              data-column-name = 'isciCode1'
            )
              vui-sorting-column(
                title = 'Ad ID'
              )
        tbody(
          v-if = 'itemsLoaded && itemsPresented'
        )
          tr(
            v-for = 'item in items'
          )
            td.vui-truncate(
              v-bind:title = 'item.buyLineNumber'
              data-column-name = 'buyLineNumber'
            ) {{ item.buyLineNumber }}
            td.vui-truncate(
              v-bind:title = 'item.purchasedProgram'
              data-column-name = 'purchasedProgram'
            ) {{ item.purchasedProgram }}
            td.vui-truncate(
              v-bind:title = 'item.formattedAirDate'
              data-column-name = 'airDate'
            ) {{ item.formattedAirDate }}
            td.vui-truncate(
              v-bind:title = 'item.formattedAirDay'
              data-column-name = 'airDay'
            ) {{ item.formattedAirDay }}
            td.vui-truncate(
              v-bind:title = 'item.formattedAirTime '
              data-column-name = 'airTime'
            )
              .vui-grid--align-spread
                span {{ item.formattedAirTime }}
                span(
                  v-if = 'item.isRunNotOrdered'
                )
                  i.glyphicon.glyphicon-stop.glyphicon.vui-m-right--x-small(
                    style = 'color: #C5103D'
                  )
            td.vui-truncate(
              data-column-name = 'orderedTimePeriod'
            )
            td.vui-truncate(
              data-column-name = 'orderedDates'
            )
            td.vui-truncate(
              v-bind:title = 'item.formattedSpotLength'
              data-column-name = 'spotLength'
            ) {{ item.formattedSpotLength }}
            td.vui-truncate.vui-text-align--right(
              v-bind:title='item.rate'
              data-column-name = 'rate'
            ) {{ item.rate }}
            td.vui-truncate.vui-text-align--right(
              v-bind:title='item.hhRatingsIMPs'
              data-column-name = 'hhRatingsIMPs'
            ) {{ item.hhRatingsIMPs }}
            td.vui-truncate.vui-text-align--right(
              v-bind:title = 'item.actualRating'
              data-column-name = 'actualRating'
            ) {{ item.actualRating }}
            td.vui-truncate.vui-text-align--right(
              v-bind:title = 'item.purchasedRating'
              data-column-name = 'purchasedRating'
            ) {{ item.purchasedRating }}
            td.vui-truncate.vui-text-align--right(
              data-column-name = 'difference'
            )
              span(
                v-bind:title  = 'item.plusMinus'
                difference-text-color = ''
                value = 'item.plusMinus'
              ) {{ item.plusMinus }}
            td.vui-truncate(
              v-bind:title = 'item.isciCode1'
              data-column-name = 'isciCode1'
            ) {{ item.isciCode1 }}
        tfoot(
          ng-show = 'itemsLoaded && itemsPresented'
        )
          tr
            td.vui-truncate(
              colspan = '8'
              title = 'TOTAL'
            ) TOTAL
            td.vui-truncate(
              v-bind:title = 'footer.rate'
            ) {{ footer.rate }}
            td.vui-truncate(
              v-bind:title = 'footer.hhRatingsIMPs'
            ) {{ footer.hhRatingsIMPs }}
            td.vui-truncate(
              v-bind:title = 'footer.actualRating'
            ) {{ footer.actualRating }}
            td.vui-truncate(
              v-bind:title = 'footer.purchasedRating'
            ) {{ footer.purchasedRating }}
            td.vui-truncate
              span(
                v-bind:title = 'footer.plusMinus'
                difference-text-color = ''
                style = 'color: rgb(197, 32, 62)'
                value = 'footer.plusMinus'
              ) {{ footer.plusMinus }}
            td
</template>

<script>
  export default {
    data () {
      return {
        itemsLoaded: true,
        itemsPresented: true,
        items: [
          {
            isRunNotOrdered: null,
            buyLineNumber: null,
            purchasedProgram: null,
            formattedAirDate: null,
            formattedAirDay: null,
            formattedAirTime: null,
            formattedSpotLength: null,
            rate: null,
            hhRatingsIMPs: null,
            actualRating: null,
            purchasedRating: null,
            isciCode1: null
          }
        ],
        footer: {
          rate: null,
          hhRatingsIMPs: null,
          actualRating: null,
          purchasedRating: null,
          plusMinus: null
        }
      }
    }
  }
</script>
