<template lang="pug">
  .vui-scrollable--x
    table.vui-table
      thead
        tr
          th(v-for='column in columns')
            a.vui-grid.vui-grid--align-spread(
              v-bind:class = '{ active: sortKey == column.field }'
              v-on:click.prevent = 'sortBy(column.field)'
              v-if = 'column.isSortable'
            )
              span {{ column.title }}
              vui-icon.vui-icon--sort-arrow(name='sort-asc')
            span(v-else) {{ column.title }}

      tbody(v-for='order in orders')
        tr(style='cursor: pointer')
          td(v-on:click.prevent='toggleDetail(order)')
            a(v-on:click.prevent='')
              vui-icon.vui-icon--small.vui-align-middle(
                v-bind:name = 'order.expanded ? "caret-lower-right" : "caret-right"'
              )
            span {{ order.advertiser }}
          td(v-on:click.prevent='toggleDetail(order)') {{ order.agency }}
          td(v-on:click.prevent='toggleDetail(order)') {{ order.cpe }}
          td(v-on:click.prevent='toggleDetail(order)') {{ order.flightStartDate }}
          td(v-on:click.prevent='toggleDetail(order)') {{ order.flightEndDate }}
          td.vui-text-align--right(v-on:click.prevent='toggleDetail(order)') {{ order.revenue | numberWithCommas | formatMoney }}
          td.vui-text-align--right(v-on:click.prevent='toggleDetail(order)') {{ $store.state['share'+order.id] | decimalToPercent }}
          td(v-on:click.prevent='toggleDetail(order)') {{ order.stationOrderNumber }}
          td.vui-text-align--center
            a.vui-m-right--xx-small(
              v-bind:href = '`/sellers/order-management/pending-makegoods/${order.id}`'
              target = '_blank'
            ) Manage Schedule
          td(v-on:click.prevent='toggleDetail(order)') {{ order.id }}
          td(v-on:click.prevent='toggleDetail(order)') {{ order.id == 135001 ? orderDate : order.orderDate }}

        tr.animated(v-show='order.expanded')
          td.expanded(v-bind:colspan='columns.length')
            .vui-box.vui-theme--shade.vui-grid.vui-grid--align-spread.vui-m-top--medium
              span
                b.vui-m-right--x-small Agency: {{ order.agency }} #[br]
                b.vui-m-right--x-small Buyer: {{ order.buyer }}
              .vui-theme--shade.vui-grid.vui-grid--align-spread(v-for='entry in order.revenueBy')
                .vui-grid--vertical.vui-grid--align-center
                  .vui-text-align--center #[b {{ entry.month.toUpperCase() }}]
                  .vui-text-align--center $ {{ entry.revenue | numberWithCommas }}
              span
                b.vui-m-right--x-small Dates: {{ order.flightStartDate }} - {{ order.flightEndDate }} #[br]
                b.vui-m-right--x-small Demo: {{ order.demo }}

            table.vui-table.vui-no-row-hover.vui-m-bottom--large(style='background: white')
              thead: tr
                th Daypart
                th.vui-text-align--right.u-width-small AUR
                th.vui-text-align--right.u-width-small # of Spots
                th.vui-text-align--right.u-width-medium Revenue
                th.vui-text-align--right.u-width-small RTGs/IMPs #[sup 1]
                th.vui-text-align--right.u-width-small(style='padding-right: 1rem') GRPs/IMPs #[sup 1]
                th.vui-text-align--right.u-width-small CPP/CPM #[sup 1]

              tbody(v-for='daypart in order.dayparts'): tr
                td {{ daypart.name }}
                td.vui-text-align--right {{ daypart.aur | numberWithCommas | formatMoney }}
                td.vui-text-align--right {{ daypart.spots }}
                td.vui-text-align--right {{ daypart.revenue | numberWithCommas | formatMoney }}
                td.vui-text-align--right {{ daypart.rating | formatRating }}
                td.vui-text-align--right {{ (daypart.spots * daypart.rating) | formatRating  }}
                td.vui-text-align--right {{ Math.round((daypart.aur / daypart.rating)) | numberWithCommas | formatMoney  }}

              tfoot: tr: td(colspan = '7')
                .vui-grid.vui-grid--align-spread
                  vui-footnote
                  a.vui-align-middle(v-on:click.prevent='showOrder(order.id)')
                    span.vui-align-middle.vui-m-right--xx-small View Detail
                    vui-icon.vui-align-middle(name='arrow-circle-right')
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
      columns: {
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
  @import '~assets/variables'

  tbody:nth-child(odd) tr
     background-color: #eee
</style>
