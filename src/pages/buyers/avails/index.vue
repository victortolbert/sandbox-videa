<template lang="pug">
  #avails
    .vui-scrollable--x.vui-m-bottom--large
      .vui-grid.vui-grid--align-spread.vui-m-bottom--medium
        h1.vui-text-heading--large Avails
        router-link.vui-button.vui-button--secondary(
          v-bind:to = '{ name: "buyers-avails-request" }'
          tag = 'button'
        ) Request New Avail

      vui-panel
        form.vui-form--inline(
          action = ''
        )
          .vui-form-element__control.vui-m-right--small
            .vui-select_container
              select.vui-select(
                id = ''
              )
                option Client...
                option Community Loans, LLC
                option Metro Wireless
                option Papa John's Pizza
                option Piedmont Healthcare
                option Southeast Ford
                option Sun Valley Bank
          .vui-form-element__control.vui-m-right--small
            .vui-select_container
              select.vui-select(
                id = ''
              )
                option Product...
          .vui-form-element
            input.vui-input(
              placeholder = 'Estimate'
              style = 'width: 8rem'
            )

          .vui-form-element__control.vui-m-right--small
            .vui-select_container
              select.vui-select(
                id = ''
              )
                option Market...
                option Tulsa
          .vui-form-element__control.vui-m-right--small
            .vui-select_container
              select.vui-select(
                id = ''
              )
                option Station...
                option WVVV

          .vui-form-element__control.vui-m-right--small
            vui-datepicker#startDate(
              v-bind:value = 'startDate'
              name = 'startDate'
            )

          .vui-form-element__control.vui-m-right--small
            vui-datepicker#endDate(
              v-bind:value = 'endDate'
              name = 'endDate'
            )

          .vui-form-element__control.vui-m-right--small
            .vui-select_container
              select.vui-select(
                id = ''
              )
                option Status
          button.vui-button.vui-button--brand.vui-m-right--x-small(
            @click.prevent = ''
          ) Search
      table.vui-table.vui-no-row-hover
        thead
          tr
            th Duplicate
            th
              a.vui-grid.vui-grid--align-spread(
                @click.prevent = ''
                href = '#'
              )
                span.vui-align-middle Status
                span.vui-align-middle
                  vui-icon(
                    name = 'sort'
                    style = 'color: hsla(192, 9%, 89%, .5)'
                  )
            th
              a.vui-grid.vui-grid--align-spread(
                @click.prevent = ''
                href = '#'
              )
                span.vui-align-middle Client
                span.vui-align-middle
                  vui-icon(
                    name = 'sort'
                    style = 'color: hsla(192, 9%, 89%, .5)'
                  )
            th
              a.vui-grid.vui-grid--align-spread(
                @click.prevent = ''
                href = '#'
              )
                span.vui-align-middle Product
                span.vui-align-middle
                  vui-icon(
                    name = 'sort'
                    style = 'color: hsla(192, 9%, 89%, .5)'
                  )
            th
               a.vui-grid.vui-grid--align-spread(
                @click.prevent = ''
                href = '#'
              )
                 span.vui-align-middle Estimate
                 span.vui-align-middle
                   vui-icon(
                    name = 'sort'
                    style = 'color: hsla(192, 9%, 89%, .5)'
                  )
            th
              a.vui-grid.vui-grid--align-spread(
                @click.prevent = ''
                href = '#'
              )
                span.vui-align-middle Campaign Name
                span.vui-align-middle
                  vui-icon(
                    name =' sort'
                    style = 'color: hsla(192, 9%, 89%, .5)'
                  )
            th
              a.vui-grid.vui-grid--align-spread(
                @click.prevent = ''
                href = '#'
              )
                span.vui-align-middle Market
                span.vui-align-middle
                  vui-icon(
                    name = 'sort'
                    style = 'color: hsla(192, 9%, 89%, .5)'
                  )
            th
              a.vui-grid.vui-grid--align-spread(
                @click.prevent = ''
                href = '#'
              )
                span.vui-align-middle Station
                span.vui-align-middle
                  vui-icon(
                    name = 'sort'
                    style = 'color: hsla(192, 9%, 89%, .5)'
                  )
            th
              a.vui-grid.vui-grid--align-spread(
                @click.prevent = ''
                href = '#'
              )
                span.vui-align-middle Start
                span.vui-align-middle
                  vui-icon(
                    name = 'sort'
                    style = 'color: hsla(192, 9%, 89%, .5)'
                  )
            th
              a.vui-grid.vui-grid--align-spread(
                @click.prevent = ''
                href = '#'
              )
                span.vui-align-middle End
                span.vui-align-middle
                  vui-icon(
                    name = 'sort'
                    style = 'color: hsla(192, 9%, 89%, .5)'
                  )
            th
              a.vui-grid.vui-grid--align-spread(
                @click.prevent = ''
                href = '#'
              )
                span.vui-align-middle Expiration
                span.vui-align-middle
                  vui-icon(
                    name = 'sort'
                    style = 'color: hsla(192, 9%, 89%, .5)'
                  )
        tbody
          tr(
            v-bind:class = '(index % 2 === 0) ? "vui-highlight" : ""'
            v-for = '(avail, index) in avails'
          )
            td.vui-text-align--center
              a(
                @click.prevent = 'duplicate == true'
                href = '#'
              )
                vui-icon(
                  name = 'copy'
                )
            td
              span.vui-badge(
                v-bind:class = 'avail.status'
              )  {{avail.status}}
            td {{ avail.advertiser }}
            td {{ avail.product }}
            td {{ avail.estimateNumber }}
            td {{ avail.campaignName }}
            td {{ avail.market }}
            td {{ avail.station }}
            td {{ avail.flightStartDate }}
            td {{ avail.flightEndDate }}
            td {{ (avail.id == 65733 ) ? expirationDate : avail.expirationDate | formatDate }}
</template>

<script>
  import moment from 'moment'
  import axios from '~plugins/axios'

  export default {
    data () {
      return {
        avails: [],
        expirationDate: new Date(moment().add(14, 'days').toISOString()),
        // sharedState: store.state,
        startDate: new Date('2016-12-26T03:24:00'),
        endDate: new Date('2017-03-26T03:24:00'),
        gridColumns: [
          { field: 'advertiser', title: 'Advertiser' },
          { field: 'agency', title: 'Agency' },
          { field: 'cpe', title: 'CPE' },
          { field: 'flightStartDate', title: 'Start' },
          { field: 'flightEndDate', title: 'End' },
          { field: 'revenue', title: 'Revenue' },
          { field: 'share', title: 'Share' },
          { field: 'stationOrderNumber', title: 'Station Order #' },
          { field: 'manageSchedule', title: 'Manage Schedule' },
          { field: 'orderId', title: 'Videa Order #' },
          { field: 'orderDate', title: 'Order Date' }
        ]
      }
    },

    methods: {
      fetchAvails () {
        axios.get('/avails')
          .then((response) => {
            this.avails = response.data
          })
          .catch((error) => {
            console.log(error)
          })
      }
    },

    beforeCreate () {
      this.$store.state.activeApp = 'buyers'
    },

    created () {
      this.fetchAvails()
    }
  }
</script>
