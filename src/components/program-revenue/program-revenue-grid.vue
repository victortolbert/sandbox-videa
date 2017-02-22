<template lang="pug">
  .program-revenue-grid.vui-scrollable--x.vui-m-bottom--medium
    table.vui-table.vui-table--striped.vui-no-row-hover
      thead
        tr
          th(
            rowspan = '2'
          )
            vui-sorting-column(
              title = 'Daypart'
            )
          th(
            colspan = '2'
          ) AUR
          th(
            colspan = '2'
          ) Revenue
          th.u-width-small.vui-text-align--center(
            rowspan = '2'
          ) Spot #
        tr
          th.u-width-medium(
            style = 'padding-left: 0.5rem'
          ) This Year
          th.u-width-medium Last Year
          th.u-width-medium This Year
          th.u-width-medium Last Year
      tbody
        tr(
          v-for = 'program in programs'
        )
          td {{ program.daypart }}
          td.vui-text-align--right {{ program.aurTy | numberWithCommas | formatMoney }}
          td.vui-text-align--right {{ program.aurLy | numberWithCommas | formatMoney }}
          td.vui-text-align--right {{ program.revenueTy | numberWithCommas | formatMoney }}
          td.vui-text-align--right {{ program.revenueLy | numberWithCommas | formatMoney }}
          td.vui-text-align--right
            a(
              @click.prevent = 'showSpotDetail(program)'
            ) {{ program.spotCount }}
    program-revenue-spot-detail-modal(
      v-bind:show = 'showSpotDetailModal'
      v-bind:program = 'selectedProgram'
    )
</template>

<script>
  import ProgramRevenueSpotDetailModal from '~components/program-revenue/program-revenue-spot-detail-modal'

  export default {
    components: { ProgramRevenueSpotDetailModal },
    props: ['programs'],
    data () {
      return {
        sortKey: 'programName',
        activeTab: '#program-guide',
        showSpotDetailModal: false,
        selectedProgram: {
          id: 1,
          name: 'ddd',
          spots: [
            {
              id: 1,
              advertiser: '',
              intendedAirDate: '',
              unitRate: 0,
              cpp: 0
            }
          ]
        },
        sportsAndSpecials: []
      }
    },
    methods: {
      showSpotDetail (program) {
        this.selectedProgram = program
        this.showSpotDetailModal = true
      }
    }

  }
</script>
