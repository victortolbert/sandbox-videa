<template lang="pug">
  .vui-scrollable--x
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
          td.vui-truncate.vui-text-align--right(
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
          ) {{ item.orderedTimePeriod }}
          td.vui-truncate(
            data-column-name = 'orderedDates'
          ) {{ item.orderedDates }}
            td.vui-truncate.vui-text-align--right(
            v-bind:title = 'item.formattedSpotLength'
            data-column-name = 'spotLength'
          ) {{ item.formattedSpotLength }}
          td.vui-truncate.vui-text-align--right(
            v-bind:title='item.rate'
            data-column-name = 'rate'
          ) ${{ item.rate }}
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
          ) ${{ footer.rate }}
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
  const moment = require('moment');
  export default {
    data () {
      return {
        itemsLoaded: true,
        itemsPresented: true,
        items: [
          {
            buyLineNumber: 1,
            purchasedProgram: '7am News',
            formattedAirDate: moment().subtract(2, 'weeks').weekday(1).format('MM/DD/YY'),
            formattedAirDay: 'Tuesday',
            formattedAirTime: '7:07:39 AM',
            orderedTimePeriod: 'M-F 07:00 AM - 08:00 AM',
            orderedDates: moment().subtract(2, 'weeks').weekday(1).format('MM/DD/YY'),
            formattedSpotLength: ':30',
            rate: 350,
            hhRatingsIMPs: 2.5,
            actualRating: 1.3,
            purchasedRating: 1.5,
            plusMinus: -0.2,
            isciCode1: 'GIFW29755H'
          },
          {
            buyLineNumber: 1,
            purchasedProgram: '7am News',
            formattedAirDate: moment().subtract(2, 'weeks').weekday(1).format('MM/DD/YY'),
            formattedAirDay: 'Thursday',
            formattedAirTime: '7:57:57 AM',
            orderedTimePeriod: 'M-F 07:00 AM - 08:00 AM',
            orderedDates: moment().subtract(2, 'weeks').weekday(1).format('MM/DD/YY'),
            formattedSpotLength: ':30',
            rate: 350,
            hhRatingsIMPs: 1.9,
            actualRating: 1.0,
            purchasedRating: 1.5,
            plusMinus: -0.5,
            isciCode1: 'GIFW29755H'
          },
          {
            buyLineNumber: 1,
            purchasedProgram: '7am News',
            formattedAirDate: moment().subtract(2, 'weeks').weekday(1).format('MM/DD/YY'),
            formattedAirDay: 'Friday',
            formattedAirTime: '6:59:08 AM',
            orderedTimePeriod: 'M-F 07:00 AM - 08:00 AM',
            orderedDates: moment().subtract(2, 'weeks').weekday(1).format('MM/DD/YY'),
            formattedSpotLength: ':30',
            rate: 350,
            hhRatingsIMPs: 2.7,
            actualRating: 1.4,
            purchasedRating: 1.5,
            plusMinus: -0.1,
            isciCode1: 'GIFW29755H'
          },
          {
            buyLineNumber: 2,
            purchasedProgram: '7am News',
            formattedAirDate: moment().subtract(1, 'weeks').weekday(1).format('MM/DD/YY'),
            formattedAirDay: 'Monday',
            formattedAirTime: '7:27:58 AM',
            orderedTimePeriod: 'M-F 07:00 AM - 08:00 AM',
            orderedDates: moment().subtract(1, 'weeks').weekday(1).format('MM/DD/YY'),
            formattedSpotLength: ':30',
            rate: 350,
            hhRatingsIMPs: 2.3,
            actualRating: 1.2,
            purchasedRating: 1.5,
            plusMinus: -0.3,
            isciCode1: 'GIFW29755H'
          },
          {
            buyLineNumber: 2,
            purchasedProgram: '7am News',
            formattedAirDate: moment().subtract(1, 'weeks').weekday(1).format('MM/DD/YY'),
            formattedAirDay: 'Wednesday',
            formattedAirTime: '7:32:08 AM',
            orderedTimePeriod: 'M-F 07:00 AM - 08:00 AM',
            orderedDates: moment().subtract(1, 'weeks').weekday(1).format('MM/DD/YY'),
            formattedSpotLength: ':30',
            rate: 350,
            hhRatingsIMPs: 2.5,
            actualRating: 1.3,
            purchasedRating: 1.5,
            plusMinus: -0.2,
            isciCode1: 'GIFW29755H'
          },
          {
            buyLineNumber: 2,
            purchasedProgram: '7am News',
            formattedAirDate: moment().subtract(1, 'weeks').weekday(1).format('MM/DD/YY'),
            formattedAirDay: 'Thursday',
            formattedAirTime: '7:28:51 AM',
            orderedTimePeriod: 'M-F 07:00 AM - 08:00 AM',
            orderedDates: moment().subtract(1, 'weeks').weekday(1).format('MM/DD/YY'),
            formattedSpotLength: ':30',
            rate: 350,
            hhRatingsIMPs: 1.7,
            actualRating: 0.9,
            purchasedRating: 1.5,
            plusMinus: -0.6,
            isciCode1: 'GIFW29755H'
          },
          {
            buyLineNumber: 8,
            purchasedProgram: '7am News',
            formattedAirDate: moment().subtract(1, 'weeks').weekday(1).format('MM/DD/YY'),
            formattedAirDay: 'Tuesday',
            formattedAirTime: '8:07:20 AM',
            orderedTimePeriod: 'M-F 07:00 AM - 08:00 AM',
            orderedDates: moment().subtract(1, 'weeks').weekday(1).format('MM/DD/YY'),
            formattedSpotLength: ':30',
            rate: 350,
            hhRatingsIMPs: 2.1,
            actualRating: 1.1,
            purchasedRating: 1.5,
            plusMinus: -0.4,
            isciCode1: 'GIFW29755H'
          },
          {
            buyLineNumber: 8,
            purchasedProgram: '7am News',
            formattedAirDate: moment().add(1, 'weeks').weekday(1).format('MM/DD/YY'),
            formattedAirDay: 'Thursday',
            formattedAirTime: '7:07:39 AM',
            orderedTimePeriod: 'M-F 07:00 AM - 08:00 AM',
            orderedDates: moment().add(1, 'weeks').weekday(1).format('MM/DD/YY'),
            formattedSpotLength: ':30',
            rate: 350,
            hhRatingsIMPs: 'n/a',
            actualRating: 'n/a',
            purchasedRating: 1.5,
            plusMinus: '',
            isciCode1: ''
          },
          {
            buyLineNumber: 8,
            purchasedProgram: '7am News',
            formattedAirDate: moment().add(1, 'weeks').weekday(1).format('MM/DD/YY'),
            formattedAirDay: 'Monday',
            formattedAirTime: '7:07:39 AM',
            orderedTimePeriod: 'M-F 07:00 AM - 08:00 AM',
            orderedDates: moment().add(1, 'weeks').weekday(1).format('MM/DD/YY'),
            formattedSpotLength: ':30',
            rate: 350,
            hhRatingsIMPs: 'n/a',
            actualRating: 'n/a',
            purchasedRating: 1.5,
            plusMinus: '',
            isciCode1: ''
          },
          {
            buyLineNumber: 8,
            purchasedProgram: '7am News',
            formattedAirDate: moment().add(1, 'weeks').weekday(1).format('MM/DD/YY'),
            formattedAirDay: 'Friday',
            formattedAirTime: '7:07:39 AM',
            orderedTimePeriod: 'M-F 07:00 AM - 08:00 AM',
            orderedDates: moment().add(1, 'weeks').weekday(1).format('MM/DD/YY'),
            formattedSpotLength: ':30',
            rate: 350,
            hhRatingsIMPs: 'n/a',
            actualRating: 'n/a',
            purchasedRating: 1.5,
            plusMinus: '',
            isciCode1: ''
          },
          {
            buyLineNumber: 13,
            purchasedProgram: '7am News',
            formattedAirDate: moment().add(3, 'weeks').weekday(1).format('MM/DD/YY'),
            formattedAirDay: 'Tuesday',
            formattedAirTime: '7:07:39 AM',
            orderedTimePeriod: 'M-F 07:00 AM - 08:00 AM',
            orderedDates: moment().add(3, 'weeks').weekday(1).format('MM/DD/YY'),
            formattedSpotLength: ':30',
            rate: 350,
            hhRatingsIMPs: 'n/a',
            actualRating: 'n/a',
            purchasedRating: 1.5,
            plusMinus: '',
            isciCode1: ''
          },
          {
            buyLineNumber: 13,
            purchasedProgram: '7am News',
            formattedAirDate: moment().add(3, 'weeks').weekday(1).format('MM/DD/YY'),
            formattedAirDay: 'Wednesday',
            formattedAirTime: '7:07:39 AM',
            orderedTimePeriod: 'M-F 07:00 AM - 08:00 AM',
            orderedDates: moment().add(3, 'weeks').weekday(1).format('MM/DD/YY'),
            formattedSpotLength: ':30',
            rate: 350,
            hhRatingsIMPs: 'n/a',
            actualRating: 'n/a',
            purchasedRating: 1.5,
            plusMinus: '',
            isciCode1: ''
          },
          {
            buyLineNumber: 23,
            purchasedProgram: '8am News',
            formattedAirDate: moment().subtract(2, 'weeks').weekday(1).format('MM/DD/YY'),
            formattedAirDay: 'Monday',
            formattedAirTime: '8:55:30 AM',
            orderedTimePeriod: 'M-F 08:00 AM - 09:00 AM',
            orderedDates: moment().subtract(2, 'weeks').weekday(1).format('MM/DD/YY'),
            formattedSpotLength: ':30',
            rate: 350,
            hhRatingsIMPs: 2.1,
            actualRating: 1.1,
            purchasedRating: 1.7,
            plusMinus: -0.6,
            isciCode1: 'GIFW29755H'
          },
          {
            buyLineNumber: 23,
            purchasedProgram: '8am News',
            formattedAirDate: moment().subtract(1, 'weeks').weekday(1).format('MM/DD/YY'),
            formattedAirDay: 'Wednesday',
            formattedAirTime: '8:44:59 AM',
            orderedTimePeriod: 'M-F 08:00 AM - 09:00 AM',
            orderedDates: moment().subtract(1, 'weeks').weekday(1).format('MM/DD/YY'),
            formattedSpotLength: ':30',
            rate: 350,
            hhRatingsIMPs: 2.5,
            actualRating: 1.3,
            purchasedRating: 1.7,
            plusMinus: -0.4,
            isciCode1: 'GIFW29755H'
          },
          {
            buyLineNumber: 24,
            purchasedProgram: '8am News',
            formattedAirDate: moment().add(1, 'weeks').weekday(1).format('MM/DD/YY'),
            formattedAirDay: 'Tuesday',
            formattedAirTime: '7:07:39 AM',
            orderedTimePeriod: 'M-F 08:00 AM - 09:00 AM',
            orderedDates: moment().add(1, 'weeks').weekday(1).format('MM/DD/YY'),
            formattedSpotLength: ':30',
            rate: 350,
            hhRatingsIMPs: 'n/a',
            actualRating: 'n/a',
            purchasedRating: 1.7,
            plusMinus: '',
            isciCode1: ''
          },
          {
            buyLineNumber: 24,
            purchasedProgram: '8am News',
            formattedAirDate: moment().add(1, 'weeks').weekday(1).format('MM/DD/YY'),
            formattedAirDay: 'Thursday',
            formattedAirTime: '7:07:39 AM',
            orderedTimePeriod: 'M-F 08:00 AM - 09:00 AM',
            orderedDates: moment().add(1, 'weeks').weekday(1).format('MM/DD/YY'),
            formattedSpotLength: ':30',
            rate: 350,
            hhRatingsIMPs: 'n/a',
            actualRating: 'n/a',
            purchasedRating: 1.7,
            plusMinus: '',
            isciCode1: ''
          },
          {
            buyLineNumber: 24,
            purchasedProgram: '8am News',
            formattedAirDate: moment().add(1, 'weeks').weekday(1).format('MM/DD/YY'),
            formattedAirDay: 'Wednesday',
            formattedAirTime: '7:07:39 AM',
            orderedTimePeriod: 'M-F 08:00 AM - 09:00 AM',
            orderedDates: moment().add(1, 'weeks').weekday(1).format('MM/DD/YY'),
            formattedSpotLength: ':30',
            rate: 350,
            hhRatingsIMPs: 'n/a',
            actualRating: 'n/a',
            purchasedRating: 1.7,
            plusMinus: '',
            isciCode1: ''
          },
          {
            buyLineNumber: 24,
            purchasedProgram: '8am News',
            formattedAirDate: moment().add(3, 'weeks').weekday(1).format('MM/DD/YY'),
            formattedAirDay: 'Friday',
            formattedAirTime: '7:07:39 AM',
            orderedTimePeriod: 'M-F 08:00 AM - 09:00 AM',
            orderedDates: moment().add(3, 'weeks').weekday(1).format('MM/DD/YY'),
            formattedSpotLength: ':30',
            rate: 350,
            hhRatingsIMPs: 'n/a',
            actualRating: 'n/a',
            purchasedRating: 1.7,
            plusMinus: '',
            isciCode1: ''
          }
        ],
        footer: {
          rate: 2800,
          hhRatingsIMPs: 18.2,
          actualRating: 9.5,
          purchasedRating: 12.4,
          plusMinus: -2.9
        }
      }
    }
  }
</script>
