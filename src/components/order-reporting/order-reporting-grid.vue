<template lang="pug">
  .order-summary-grid.vui-scrollable--x(
    v-show = '!loading'
  )
    table.vui-table.vui-no-row-hover(
      border = '0'
      cellpadding = '0'
      cellspacing = '0'
    )
      thead
        tr
          th(
            v-for = 'column in gridColumns'
          )
            a.vui-grid.vui-grid--align-spread(
              @click.prevent = 'sortBy(column.field)'
              v-bind:class='{ active: sortKey == column.field }'
            )
              span {{column.title}}
              icon.vui-icon--sort-arrow(
                name = 'sort-asc'
              )
      tbody(
        v-for =' order in orders'
      )
        tr
          td
            a(
              @click.prevent = 'toggleDetail(order)'
            )
              icon.vui-align-middle(
                v-bind:name = 'order.expanded ? "caret-lower-right" : "caret-right"'
              )
            span {{ order.advertiser }}
          td {{ order.agency }}
          td {{ order.cpe }}
          td {{ order.flightStartDate }}
          td {{ order.flightEndDate }}
          td.vui-text-align--right {{ order.revenue | numberWithCommas | formatMoney }}
          //- td.vui-text-align--right {{ order.share | decimalToPercent }}
          td.vui-text-align--right {{ $store.state['share'+order.id] | decimalToPercent }}
          td {{ order.stationOrderNumber }}
          td.vui-text-align--center:  router-link(
            v-bind:to = '{ name: "sellers-order-management-pending-makegoods-id", params: { id: order.id } }'
          ) Manage Schedule
          td {{ order.id }}
          td {{ order.id == 135001 ? orderDate : order.orderDate }}
        tr.animated(
          v-show = 'order.expanded'
        )
          td.expanded(
            v-bind:colspan = 'gridColumns.length'
          )
            .vui-box.vui-theme--shade.vui-grid.vui-grid--align-spread.vui-m-top--medium
              span
                b.vui-m-right--x-small Agency:
                | {{ order.agency }}
                br
                b.vui-m-right--x-small Buyer:
                | {{ order.buyer }}
              .vui-theme--shade.vui-grid.vui-grid--align-spread(
                v-for = 'entry in order.revenueBy'
              )
                .vui-grid--vertical.vui-grid--align-center
                  .vui-text-align--center
                    b {{ entry.month }}
                  .vui-text-align--center $ {{ entry.revenue | numberWithCommas }}
              span
                b.vui-m-right--x-small Dates:
                | {{ order.flightStartDate }} - {{ order.flightEndDate }}
                br
                b.vui-m-right--x-small Demo:
                | {{ order.demo }}
            table.vui-table.vui-no-row-hover.vui-m-bottom--large(
              style = 'background: white'
            )
              thead
                tr
                  th Daypart
                  th.vui-text-align--right.u-width-small AUR
                  th.vui-text-align--right.u-width-small # of Spots
                  th.vui-text-align--right.u-width-medium Revenue
                  th.vui-text-align--right.u-width-small
                    | CPP
                    sup 1
                  th.vui-text-align--right.u-width-small
                    | Rating
                    sup 1
                  th.vui-text-align--right.u-width-small(
                    style = 'padding-right: 1rem'
                  )
                    | GRPs
                    sup 1
              tbody(
                v-for = 'daypart in order.dayparts'
              )
                tr
                  td {{ daypart.name }}
                  td.vui-text-align--right {{ daypart.aur | numberWithCommas | formatMoney }}
                  td.vui-text-align--right {{ daypart.spots }}
                  td.vui-text-align--right {{ daypart.revenue | numberWithCommas | formatMoney }}
                  td.vui-text-align--right {{ Math.round((daypart.aur / daypart.rating)) | numberWithCommas | formatMoney  }}
                  td.vui-text-align--right {{ daypart.rating | formatRating }}
                  td.vui-text-align--right {{ (daypart.spots * daypart.rating) | formatRating  }}
              tfoot
                tr
                  td(
                    colspan = '7'
                  )
                    .vui-grid.vui-grid--align-spread
                      .vui-align-middle
                        sup.vui-m-right--xx-small 1
                        span(
                          style = 'font-weight: normal'
                        ) Nielsen source or data derived from Nielsen

                      a.vui-align-middle(
                        @click.prevent = 'showOrder(order.id)'
                      )
                        span.vui-align-middle.vui-m-right--xx-small View Detail
                        icon.vui-align-middle(
                          name = 'arrow-circle-right'
                        )
</template>

<script>
  import moment from 'moment'

  export default {
    props: {
      loading: {
        type: Boolean,
        default: false
      },
      orderRoute: {
        type: String,
        default: 'sellers-reporting-order-reporting-id'
      },
      orders: {
        type: Array
      },
      gridColumns: {
        type: Array
      },
      sortKey: {
        type: String
      }
    },
    data () {
      return {
        orderDate: moment().format('MM/DD/YY')
      }
    },

    methods: {
      toggleDetail (order) {
        order.expanded = !order.expanded
      },

      showOrder (id, version = '') {
        let routeInfo = {
          name: this.orderRoute,
          params: {
            id: id
          }
        }

        if (version) {
          routeInfo.query = { version: version }
        }

        this.$router.push(routeInfo)
      },

      sortBy (sortKey) {
        this.sortOrder = (this.sortKey === sortKey) ? this.sortOrder * -1 : 1
        this.sortKey = sortKey
      }
    }
  }
</script>

<style lang="stylus" scoped>
  tbody:nth-child(odd) tr
     background-color: #eee
</style>
