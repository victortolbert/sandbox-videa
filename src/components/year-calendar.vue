<template lang="pug">
  .cal-year
    .cal-year__number
      | {{ year }}
    .cal-year__months
      .cal-month(v-for='month in allInOne')
        .cal-month__name
          | {{ monthNames[month.number] }}
        .cal-month__daynames
          .cal-month__dayname(v-for='dayname in weekdayNames')
            | {{ dayname }}
        .cal-month__weeks
          .cal-week(v-for='week in month.weeks')
            .cal-week__number {{ week.number }}
            .cal-week__days
              .cal-day(:class='dayClasses(day, month.number)', v-for='day in week.days', :title='day')
                | {{ day.getDate() }}
</template>

<script>
  import {
    dayOfYear,
    daysInweek,
    getDay,
    monthsInYear,
    weeksInMonth
   } from '~utils/year-calendar'

  export default {
    name: 'cal-year',
    props: ['year', 'events'],
    computed: {
      activeDOY () {
        return dayOfYear(new Date())
      },
      allInOne () {
        return new Array(12)
          .fill(undefined)
          .map((_, m) => new Date(this.year, m, 1, 2))
          .map(month => ({
            month,
            number: month.getMonth(),
            weeks: weeksInMonth(month)
              .map(week => ({
                week,
                number: this.weekNumber(week),
                days: daysInweek(week)
              }))
          }))
      }
    },
    methods: {
      weekNumber (w) {
        let thursday = new Date(w.getFullYear(), w.getMonth(), w.getDate() - getDay(w) + 3)
        let firstOfYear = new Date(thursday.getFullYear(), 0, 1)
        return Math.ceil( (((thursday - firstOfYear) / 86400000) + getDay(firstOfYear) + 1) / 7 )
      },
      dayClasses (day, calendarMonth) {
        const str = dayOfYear(day)
        const dayMonth = day.getMonth()
        return {
          'cal-day--past': str < this.activeDOY,
          'cal-day--today': str === this.activeDOY,
          'cal-day--in': dayMonth === calendarMonth,
          'cal-day--prev': dayMonth < calendarMonth,
          'cal-day--next': dayMonth > calendarMonth
        }
      },
    },
    created () {
      const month = new Intl.DateTimeFormat(navigator.language || 'nl', { month: 'long' })
      this.monthNames = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(d => month.format(new Date(2002, d, 1)))
      const weekday = new Intl.DateTimeFormat(navigator.language || 'nl', { weekday: 'narrow' })
      this.weekdayNames = [0, 1, 2, 3, 4, 5, 6].map(d => weekday.format(new Date(2002, 0, d)))
    },
    mounted () {

    },
    beforeDestroy () {
    }
  }
</script>

<style lang="stylus">
  .cal-year
    margin: 3em 0
    text-align: center
    user-select: none
  .cal-year__number
    font-size: 3em
    font-weight: bold
  .cal-year__months
    display: flex
    flex-wrap: wrap
    justify-content: space-around
  .cal-month
    flex: 0
    padding: 1em
    flex-basis: 21%
    line-height: 24px
  .cal-month__name
    margin-bottom: .5em
    border-bottom: 2px solid #ccc
    padding-bottom: .5em
    font-size: 14px
    font-weight: bold
  .cal-month__daynames
    display: flex
    margin-left: 24px
    font-size: 11px
  .cal-month__dayname
    flex-grow: 1
  .cal-week
    flex: 1
    display: flex
  .cal-week__number
    width: 24px
    flex-shrink: 0
    font-weight: bold
    font-size: 12px
    opacity: .5
  .cal-week__days
    display: flex
    flex-grow: 1
  .cal-day
    flex-grow: 1
    width: 24px
    height: 24px
    font-size: 12px
  .cal-day:hover
    box-shadow: 0 0 0px 2px #000
  .cal-day--today
    font-weight: bold
    box-shadow: 0 0 0px 2px #ccc
  .cal-day--past
    color: rgba(0, 0, 0, 0.5)
  .cal-day--prev,
  .cal-day--next
    color: transparent
</style>
