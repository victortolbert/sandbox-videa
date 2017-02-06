<template lang="pug">
  table.vui-table.vui-no-row-hover.vui-table--nested-rows.vui-m-bottom--large
    thead
      tr
        th Daypart
        th.u-width-small Length
        th.vui-text-align--right.u-width-medium AUR
        th.u-width-small # of Spots
        th.u-width-medium Revenue
        th.vui-text-align--right.u-width-small GRPs
        th.u-width-small
          | CPP
          sup 1
    tbody(
      v-for = 'daypart in order.dayparts'
    )
      tr.daypart
        td
          .vui-grid
            a.vui-align-middle(
              @click.prevent = 'daypart.expanded = !daypart.expanded'
              href = '#'
            )
              vui-icon.vui-align-middle(
                v-bind:name = 'daypart.expanded ? "caret-lower-right" : "caret-right"'
              )
            span {{ daypart.name }}
        td
        td.vui-text-align--right {{ daypart.aur | numberWithCommas | formatMoney }}
        td.vui-text-align--right(
          style = 'padding-right: 1rem'
        ) {{ daypart.spots }}
        td.vui-text-align--right {{ daypart.revenue | numberWithCommas | formatMoney }}
        td.vui-text-align--right {{ daypart.grps | formatRating}}
        td.vui-text-align--right {{ Math.round(daypart.cpp) | numberWithCommas | formatMoney }}
      template(
        v-for = 'show in daypart.shows'
      )
        tr.show(
         v-show = 'daypart.expanded'
        )
          td(
            colspan = '7'
          )
            .vui-grid
              a.vui-align-middle(
                @click.prevent = 'show.expanded = !show.expanded'
                href = '#'
              )
                vui-icon.vui-align-middle(
                  v-bind:name = 'show.expanded ? "caret-lower-right" : "caret-right"'
                )
              span.vui-align-middle {{ show.name }}
        template(
          v-for = 'showTime in show.showTimes'
        )
          tr.showTime(
            v-show = 'show.expanded'
          )
            td(
              colspan = '7'
            )
              span.vui-align-middle {{ showTime.time }}
          template(
            v-for = 'date in showTime.dates'
          )
            tr.date(
              v-show = 'show.expanded'
            )
              td {{ date.date }}
              td.vui-text-align--center {{ date.spotLength }}
              td.vui-text-align--right {{ date.aur | numberWithCommas | formatMoney }}
              td.vui-text-align--right(
                style = 'padding-right: 1rem'
              ) {{ date.numberOfSpots }}
              td.vui-text-align--right {{ date.revenue | numberWithCommas | formatMoney }}
              td.vui-text-align--right {{ date.grps | formatRating }}
              td.vui-text-align--right {{ Math.round(date.cpp) | numberWithCommas | formatMoney }}
</template>

<script>
  export default {
    props: [ 'order' ]
  }
</script>
