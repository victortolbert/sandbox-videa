<template lang="pug">
  .vui-scrollable--x.vui-m-bottom--medium
    table.vui-table.vui-table--striped
      thead
        tr
          th.u-width-medium Order #
          th.u-width-medium Status
          th.u-width-medium Type
          th Advertiser
          th Agency
          th CPE
          th.u-width-medium Start
          th.u-width-medium End
          th.u-width-medium Currency
          th.u-width-large Revenue
          th.u-width-large Share
      tbody(
        v-for = 'order in orders'
      )
        tr(style='cursor: pointer')
          td
            a(
              @click.prevent = 'toggleExpanded'
              v-if = 'order.versions.length !== 1'
              href = '#'
            )
              vui-icon.vui-icon--small(
                v-bind:name = 'expanded ? "caret-lower-right" : "caret-right"'
                style = 'margin-left: -1.5rem'
              )
            //- a.vui-align-middle(@click.prevent='showDetail(order.id)', href='#') {{ order.id }}
            span(@click.prevent = 'showDetail(order.id)') {{ order.id }}
          td(@click.prevent = 'showDetail(order.id)')
            span.vui-badge.new(
              v-bind:class = 'order.status'
            ) {{ order.status }}
          td(@click.prevent = 'showDetail(order.id)') {{ order.type }}
          td(@click.prevent = 'showDetail(order.id)') {{ order.advertiser }}
          td(@click.prevent = 'showDetail(order.id)') {{ order.agency }}
          td(@click.prevent = 'showDetail(order.id)') {{ order.cpe }}
          td(@click.prevent = 'showDetail(order.id)') {{ order.flightStartDate }}
          td(@click.prevent = 'showDetail(order.id)') {{ order.flightEndDate }}
          td(@click.prevent = 'showDetail(order.id)') {{ order.currency }}
          td.vui-text-align--right(@click.prevent = 'showDetail(order.id)') {{ order.revenue | numberWithCommas | formatMoney }}
          //- td.vui-text-align--right {{ order.share | decimalToPercent }}
          td.vui-text-align--right(@click.prevent = 'showDetail(order.id)') {{ $store.state['share'+order.id] | decimalToPercent }}
        tr(
          v-if = 'order.versions.length !== 1'
          v-show = 'expanded'
        )
          td.expanded(
            colspan = '11'
          )
            .vui-box.vui-theme--shade.vui-grid.vui-grid--align-spread.vui-m-top--medium
              h3.vui-text-heading--small Version History
            table.vui-table.vui-no-row-hover.vui-m-bottom--large(
              style = 'background: white'
            )
              thead
                tr
                  th.vui-text-align--center.u-width-x-large Version
                  th.u-width-x-large Date Submitted
                  th.u-width-x-large Time Submitted
                  th Submitted By
                  th
              tbody
                tr(
                  v-for = 'version in order.versions'
                )
                  td.vui-text-align--center {{ version.id }}
                  td {{ version.dateSubmitted }}
                  td {{ version.timeSubmitted }}
                  td {{ version.submittedBy }}
                  td: a(
                    @click.prevent = 'showDetail(order.id, version.id)'
                    href = '#'
                  ) View
                  //- td: a(router-link='{ name: route, params: { id: order.id }, query: { version: version.id } }') View
</template>

<script>
  export default {
    props: {
      orders: {
        type: Array
      },
      detailRoute: {
        type: String,
        default: 'sellers-order-management-pending-orders-id'
      }
    },

    data () {
      return {
        expanded: false
      }
    },

    methods: {
      showDetail (id, version = '') {
        let routeInfo = {
          name: this.detailRoute,
          params: {
            id: id
          }
        }

        if (version) {
          routeInfo.query = { version: version }
        }

        this.$router.push(routeInfo)
      },

      toggleExpanded () {
        this.expanded = !this.expanded
      }
    }

  }
</script>

<style lang="stylus" scoped>
  @import '~assets/variables'

  tbody:nth-child(odd) tr
     background-color: #eee
</style>
