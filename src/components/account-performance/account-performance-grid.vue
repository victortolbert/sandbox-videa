<template lang="pug">
  .vui-scrollable--x.account-performance-grid
    table.vui-table.vui-no-row-hover
      thead
        tr
          th.vui-text-align--center.u-width-x-small Order Count
          th
            vui-sorting-column(
              title = 'Advertiser'
            )
          th
            vui-sorting-column(
              title = 'Agency'
            )
          th.u-width-x-small
            vui-sorting-column(
              title = 'Revenue'
            )
          th.vui-text-align--center.u-width-x-small Spot Volume
      tfoot
        tr
          td.vui-text-align--right(
            colspan = '3'
          ) Total
          td.vui-text-align--right {{ totalRevenueTy | numberWithCommas | formatMoney }}
          td.vui-text-align--right {{ totalSpotVolumeTy | numberWithCommas }}
      tbody(
        v-for = 'account in accounts'
      )
        tr
          td.vui-text-align--right {{ account.orderCount }}
          td
            a(
              @click.prevent = 'toggleExpanded(account)'
              href = '#'
            )
              vui-icon.vui-icon--small(
                v-bind:name = 'account.expanded ? "caret-lower-right" : "caret-right"'
              )
              span {{ account.advertiser }}
          td {{ account.agency }}
          td.vui-text-align--right {{ account.revenueTy | numberWithCommas | formatMoney }}
          td.vui-text-align--right {{ account.spotVolumeTy }}
        tr(
          v-show = 'account.expanded'
        )
          td.expanded(
            colspan = '5'
          )
            table.vui-table.vui-no-row-hover.vui-m-bottom--large.vui-m-top--medium(
              style = 'background: white'
            )
              thead.vui-theme--shade
                tr
                  th Station Order #
                  th CPE
                  th Flight Start
                  th Flight End
                  th Revenue
                  th Market Budget
                  th Demo
                  th Share
              tbody
                tr(
                  v-for = 'order in account.orders'
                )
                  td {{ order.id }}
                  td {{ order.CPE }}
                  td {{ order.flightStartDate }}
                  td {{ order.flightEndDate }}
                  td {{ order.revenue | numberWithCommas | formatMoney }}
                  td {{ order.marketBudget | numberWithCommas | formatMoney }}
                  td {{ order.demo }}
                  td {{ order.share | decimalToPercent }}
</template>

<script>

  export default {
    props: {
      accounts: {
        type: Array
      },
      orders: {
        type: Array
      },
    },

    data () {
      return {
        expanded: false
      }
    },

    computed: {
      totalRevenueTy () {
        // return this.accountPerformance.rows
        return this.accounts.reduce((total, account) => {
          return total + account.revenueTy
        }, 0)
      },

      totalMarketRevenueTy () {
        // return this.accountPerformance.rows
        return this.accounts.reduce((total, account) => {
          return total + account.marketRevenueTy
        }, 0)
      },

      totalSpotVolumeTy () {
        // return this.accountPerformance.rows
        return this.accounts.reduce((total, account) => {
          return total + account.spotVolumeTy
        }, 0)
      }
    },

    methods: {
      toggleExpanded (account) {
        account.expanded = !account.expanded
      }
    }
  }
</script>
