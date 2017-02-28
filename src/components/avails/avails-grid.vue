<template lang="pug">
  .avails-summary-grid.vui-scrollable--x
    table.vui-table.vui-no-row-hover
      thead
        tr
          th
            a.vui-grid.vui-grid--align-spread(
              @click.prevent = ''
              href = '#'
            )
              span.vui-align-middle Avail #
              span.vui-align-middle
                vui-icon(
                  name = 'sort-asc'
                  style = 'color: hsla(192, 9%, 89%, 1)'
                )
          th
            a.vui-grid.vui-grid--align-spread(
              @click.prevent = ''
              href = '#'
            )
              span.vui-align-middle Status
              span.vui-align-middle
                vui-icon(
                  name = 'sort-asc'
                  style = 'color: hsla(192, 9%, 89%, 1)'
                )
          th
            a.vui-grid.vui-grid--align-spread(
              @click.prevent = ''
              href = '#'
            )
              span.vui-align-middle Released Date
              span.vui-align-middle
                vui-icon(
                  name = 'sort-asc'
                  style = 'color: hsla(192, 9%, 89%, 1)'
                )
          th
            a.vui-grid.vui-grid--align-spread(
              @click.prevent = ''
              href = '#'
            )
              span.vui-align-middle Advertiser
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
              span.vui-align-middle Estimate #
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
              span.vui-align-middle Agency
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
              span.vui-align-middle Last Updated
              span.vui-align-middle
                vui-icon(
                  name = 'sort'
                  style = 'color: hsla(192, 9%, 89%, .5)'
                )
      tbody(
        v-for = 'avail in avails'
      )
        tr
          td(:style="!avail.versions ? 'padding-left: 1.5rem' : ''")
            a(
              @click.prevent = 'toggleDetail(avail)'
              v-if = 'avail.versions'
              href = '#'
            )
              vui-icon.vui-icon--small.vui-align-middle(
                v-bind:name = 'avail.expanded ? "caret-lower-right" : "caret-right"'
                style = 'margin-left: -0.5rem'
              )
            router-link(
              v-bind:to = '{ name: "sellers-avails-id", params: { id: avail.id } }'
            ) {{ avail.id }}
          td
            span.vui-badge(
              v-bind:class = 'avail.availStatus'
            ) {{ avail.availStatus }}
          td {{ avail.id == 65733 ? releasedDate : avail.releasedDate }}
          td {{ avail.advertiser.toUpperCase() }}
          td {{ avail.product }}
          td {{ avail.estimateNumber }}
          td {{ avail.flightStartDate }}
          td {{ avail.flightEndDate }}
          td {{ avail.agency.toUpperCase() }}
          td {{ avail.id == 65733 ? lastUpdated : avail.lastUpdated }}
        tr(
          v-show = 'avail.expanded'
        )
          td.expanded(
            colspan = '10'
          )
            .vui-box.vui-theme--shade.vui-grid.vui-grid--align-spread.vui-m-top--medium
              h3.vui-text-heading--small Version History
            table.vui-table.vui-no-row-hover.vui-m-bottom--large(
              style = 'background: white'
            )
              thead
                tr
                  th Version
                  th Date Submitted
                  th Time Submitted
                  th Submitted by
                  th
              tbody
                tr(
                  v-for = 'version in avail.versions'
                )
                  td {{ version.id }}
                  td {{ avail.id == 65733 ? dateSubmitted : version.dateSubmitted }}
                  td {{ version.timeSubmitted }}
                  td {{ version.submittedBy }}
                  td
                    router-link(
                      v-bind:to = '{ name: "sellers-avails-id", params: { id: avail.id }, query: { version: version.id } }'
                    ) View
</template>

<script>
  import moment from 'moment'

  export default {
    props: {
      avails: {
        type: Array
      },
      availRoute: {
        type: String,
        default: 'sellers-avails-id'
      }
    },

    data () {
      return {
        testDate: new Date('05 October 2011 14:48 UTC').toISOString(),
        releasedDate: moment().format('MM/DD/YY'),
        lastUpdated: moment().startOf('day').hour(7).format('MM/DD/YY HH:mm A'),
        dateSubmitted: moment().add(-1, 'days').format('MM/DD/YY')
      }
    },

    methods: {
      toggleDetail (avail) {
        avail.expanded = !avail.expanded
      }
    }
  }
</script>
