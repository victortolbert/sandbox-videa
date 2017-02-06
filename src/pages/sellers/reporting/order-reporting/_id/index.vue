<template lang="pug">
  .orders-show-detail
    .vui-grid.vui-grid--align-spread
        h1.vui-text-heading--large Order Reporting Detail
        h2.vui-text-heading--medium.vui-text-align--right.vui-align-middle
          | {{ order.advertiser }}
          | &mdash;Order #
          | {{ order.id }}
    .vui-grid.vui-grid--align-spread.vui-m-bottom--large
        a(
          @click.prevent = 'showOrders'
        )
          icon.vui-align-middle(
            name = 'arrow-circle-left'
          )
          span.vui-align-middle Back to Order Reporting
    .vui-scrollable--x
      .vui-grid.vui-grid--align-spread.vui-m-bottom--xx-small
        #excelExporter.vui-hint-parent.hint-parent-demo.vui-align-middle.vui-container--right
          | Export to Excel
          button.vui-button.vui-button--icon-border-filled.vui-m-left--x-small
            icon(
              name = 'download'
              style = 'width: 1.5rem; height: 1.5rem; color: #0177a2'
            )
          span.vui-assistive-text Export to Excel
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
                  icon.vui-align-middle(
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
                    icon.vui-align-middle(
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
    p.vui-text-body--small
      sup.vui-m-right--xx-small 1
      span Nielsen source or data derived from Nielsen
</template>

<script>
  import axios from '~plugins/axios'

  export default {
    beforeCreate () {
      this.$store.state.activeApp = 'sellers'
    },

    props: {
      ordersRoute: {
        type: String,
        default: 'sellers-reporting-order-reporting'
      }
    },

    async data ({ env, params }) {
      let { data } = await axios.get(`/orders/${params.id}`)
      return {
        order: data,
        editing: false,
        loading: false,
        error: false,
        blank: false
      }
    },

    methods: {
      handleDaypartExpansion (daypart, event) {
        // var $element = $(event.target).closest('tr')

        if (daypart.expanded === true) {
          daypart.expanded = false
          // $element.siblings().css('display', 'none')
        } else {
          daypart.expanded = true
        }
      },

      handleShowExpansion (show) {
        if (show.expanded === true) {
          show.expanded = false
        } else {
          show.expanded = true
        }
      },

      showOrders () {
        this.$router.push({
          name: this.ordersRoute
        })
      }
    }
  }
</script>
