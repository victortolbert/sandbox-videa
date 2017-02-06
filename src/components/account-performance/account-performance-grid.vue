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
          th.vui-text-align--right.u-width-x-small Market Budget
          th.vui-text-align--center.u-width-x-small Spot Volume
          th.u-width-x-small Share
      tfoot
        tr
          td.vui-text-align--right(
            colspan = '3'
          ) Total
          td.vui-text-align--right {{ totalRevenueTy | numberWithCommas | formatMoney }}
          td.vui-text-align--right {{ totalMarketRevenueTy | numberWithCommas | formatMoney }}
          td.vui-text-align--right {{ totalSpotVolumeTy | numberWithCommas }}
          td
      tbody
        tr(
          v-for = 'account in accounts'
        )
          td.vui-text-align--center {{ account.orderCount }}
          td
            a(
              @click.prevent = 'showAccountDetail(account)'
              href = '#'
            ) {{ account.advertiser }}
          td {{ account.agency }}
          td.vui-text-align--right {{ account.revenueTy | numberWithCommas | formatMoney }}
          td.vui-text-align--right {{ account.marketRevenueTy | numberWithCommas | formatMoney }}
          td.vui-text-align--right {{ account.spotVolumeTy }}
          td.vui-text-align--right {{ account.shareTy | decimalToPercent }}
    account-detail-modal(
      v-bind:account = 'selectedAccount'
      v-bind:show = 'showAccountDetailModal'
    )
</template>

<script>
  import AccountDetailModal from '~components/account-detail-modal'

  export default {
    components: { AccountDetailModal },
    props: ['accounts'],
    data () {
      return {
        showAccountDetailModal: false,
        selectedAccount: {
          id: 1,
          advertiser: '',
          orders: [
            {
              id: 1,
              start: '',
              end: '',
              revenue: 0,
              share: 0
            }
          ]
        },
        accountPerformance: {}
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
      showAccountDetail (account) {
        this.showAccountDetailModal = true
        this.selectedAccount = account
      }
    }
  }
</script>
