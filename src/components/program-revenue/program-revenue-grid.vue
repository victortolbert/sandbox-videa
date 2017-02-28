<template lang="pug">
  .program-revenue-grid.vui-scrollable--x.vui-m-bottom--medium
    table.vui-table.vui-no-row-hover
      thead
        tr
          th(
            rowspan = '2'
            colspan= '2'
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
          th.u-width-medium This Year
          th.u-width-medium Last Year
          th.u-width-medium This Year
          th.u-width-medium Last Year
      tbody(
        v-for = 'programRevenueDaypart in programRevenueDayparts'
      )
        tr
          td(
            colspan = '2'
          )
            a(
              @click.prevent = 'toggleExpanded(programRevenueDaypart)'
              href = '#'
            )
              vui-icon.vui-icon--small(
                v-bind:name = 'programRevenueDaypart.expanded ? "caret-lower-right" : "caret-right"'
              )
              span {{ programRevenueDaypart.daypartName }}
          td.vui-text-align--right {{ programRevenueDaypart.aurTy | numberWithCommas | formatMoney }}
          td.vui-text-align--right {{ programRevenueDaypart.aurLy | numberWithCommas | formatMoney }}
          td.vui-text-align--right {{ programRevenueDaypart.revenueTy | numberWithCommas | formatMoney }}
          td.vui-text-align--right {{ programRevenueDaypart.revenueLy | numberWithCommas | formatMoney }}
          td.vui-text-align--right {{ programRevenueDaypart.spotCount }}
        template(
          v-for = 'program in programRevenueDaypart.programs'
          v-if = 'programRevenueDaypart.programs'
        )

          tr.month(
            v-show = 'programRevenueDaypart.expanded'
          )
            td {{ program.name }}
            td {{ program.time }}
            td.vui-text-align--right {{ program.aurTy | numberWithCommas | formatMoney }}
            td.vui-text-align--right {{ program.aurLy | numberWithCommas | formatMoney }}
            td.vui-text-align--right {{ program.revenueTy | numberWithCommas | formatMoney }}
            td.vui-text-align--right {{ program.revenueLy | numberWithCommas | formatMoney }}
            td.vui-text-align--right
              a(
                @click.prevent = 'showSpotDetailModal = true'
              ) {{ program.spotCount }}
    program-revenue-spot-detail-modal(
      v-show = 'showSpotDetailModal'
      @close = 'showSpotDetailModal = false'
    )
</template>

<script>
  import ProgramRevenueSpotDetailModal from '~components/program-revenue/program-revenue-spot-detail-modal'

  export default {
    components: { ProgramRevenueSpotDetailModal },
    data () {
      return {
        showSpotDetailModal: false,
        programRevenueDayparts: [
          {
            daypartName: 'Early Morning',
            aurTy: 343,
            aurLy: 0,
            revenueTy: 55730,
            revenueLy: 0,
            spotCount: 137,
            expanded: false,
            programs: [
              {
                name: 'Network23 6a News',
                time: 'M-F/6:00 AM - 7:00 AM',
                aurTy: 450,
                aurLy: 0,
                revenueTy: 14060,
                revenueLy: 0,
                spotCount: 38,
              },
              {
                name: 'Network23 Nws This Morning',
                time: 'M-F/7:00 AM - 8:00 AM',
                aurTy: 425,
                aurLy: 0,
                revenueTy: 24300,
                revenueLy: 0,
                spotCount: 54,
              },
              {
                name: 'Network23 Nws This Morning',
                time: 'M-F/8:00 AM - 9:00 AM',
                aurTy: 425,
                aurLy: 0,
                revenueTy: 15725,
                revenueLy: 0,
                spotCount: 37,
              },
              {
                name: 'Network23 Weekend News-Sat',
                time: 'M-F/9:00 AM - 10:00 AM',
                aurTy: 200,
                aurLy: 0,
                revenueTy: 1000,
                revenueLy: 0,
                spotCount: 5,
              },
              {
                name: 'Network23 Weekend News-Sun',
                time: 'M-F/9:00 AM - 10:00 AM',
                aurTy: 215,
                aurLy: 0,
                revenueTy: 645,
                revenueLy: 0,
                spotCount: 3,
              }
            ]
          },
          {
            daypartName: 'Daytime',
            aurTy: 254,
            aurLy: 0,
            revenueTy: 21340,
            revenueLy: 0,
            spotCount: 84,
            expanded: false,
            programs: [
              {
                name: 'Network23 6a News',
                time: 'M-F/6:00 AM - 7:00 AM',
                aurTy: 450,
                aurLy: 0,
                revenueTy: 14060,
                revenueLy: 0,
                spotCount: 38,
              },
              {
                name: 'Network23 Nws This Morning',
                time: 'M-F/7:00 AM - 8:00 AM',
                aurTy: 425,
                aurLy: 0,
                revenueTy: 24300,
                revenueLy: 0,
                spotCount: 54,
              },
              {
                name: 'Network23 Nws This Morning',
                time: 'M-F/8:00 AM - 9:00 AM',
                aurTy: 425,
                aurLy: 0,
                revenueTy: 15725,
                revenueLy: 0,
                spotCount: 37,
              },
              {
                name: 'Network23 Weekend News-Sat',
                time: 'M-F/9:00 AM - 10:00 AM',
                aurTy: 200,
                aurLy: 0,
                revenueTy: 1000,
                revenueLy: 0,
                spotCount: 5,
              },
              {
                name: 'Network23 Weekend News-Sun',
                time: 'M-F/9:00 AM - 10:00 AM',
                aurTy: 215,
                aurLy: 0,
                revenueTy: 645,
                revenueLy: 0,
                spotCount: 3,
              }
            ]
          },
          {
            daypartName: 'Early Fringe',
            aurTy: 550,
            aurLy: 0,
            revenueTy: 11550,
            revenueLy: 0,
            spotCount: 21,
            expanded: false,
            programs: [
              {
                name: 'Network23 6a News',
                time: 'M-F/6:00 AM - 7:00 AM',
                aurTy: 450,
                aurLy: 0,
                revenueTy: 14060,
                revenueLy: 0,
                spotCount: 38,
              },
              {
                name: 'Network23 Nws This Morning',
                time: 'M-F/7:00 AM - 8:00 AM',
                aurTy: 425,
                aurLy: 0,
                revenueTy: 24300,
                revenueLy: 0,
                spotCount: 54,
              },
              {
                name: 'Network23 Nws This Morning',
                time: 'M-F/8:00 AM - 9:00 AM',
                aurTy: 425,
                aurLy: 0,
                revenueTy: 15725,
                revenueLy: 0,
                spotCount: 37,
              },
              {
                name: 'Network23 Weekend News-Sat',
                time: 'M-F/9:00 AM - 10:00 AM',
                aurTy: 200,
                aurLy: 0,
                revenueTy: 1000,
                revenueLy: 0,
                spotCount: 5,
              },
              {
                name: 'Network23 Weekend News-Sun',
                time: 'M-F/9:00 AM - 10:00 AM',
                aurTy: 215,
                aurLy: 0,
                revenueTy: 645,
                revenueLy: 0,
                spotCount: 3,
              }
            ]
          },
          {
            daypartName: 'Early News',
            aurTy: 425,
            aurLy: 0,
            revenueTy: 17940,
            revenueLy: 0,
            spotCount: 40,
            expanded: false,
            programs: [
              {
                name: 'Network23 6a News',
                time: 'M-F/6:00 AM - 7:00 AM',
                aurTy: 450,
                aurLy: 0,
                revenueTy: 14060,
                revenueLy: 0,
                spotCount: 38,
              },
              {
                name: 'Network23 Nws This Morning',
                time: 'M-F/7:00 AM - 8:00 AM',
                aurTy: 425,
                aurLy: 0,
                revenueTy: 24300,
                revenueLy: 0,
                spotCount: 54,
              },
              {
                name: 'Network23 Nws This Morning',
                time: 'M-F/8:00 AM - 9:00 AM',
                aurTy: 425,
                aurLy: 0,
                revenueTy: 15725,
                revenueLy: 0,
                spotCount: 37,
              },
              {
                name: 'Network23 Weekend News-Sat',
                time: 'M-F/9:00 AM - 10:00 AM',
                aurTy: 200,
                aurLy: 0,
                revenueTy: 1000,
                revenueLy: 0,
                spotCount: 5,
              },
              {
                name: 'Network23 Weekend News-Sun',
                time: 'M-F/9:00 AM - 10:00 AM',
                aurTy: 215,
                aurLy: 0,
                revenueTy: 645,
                revenueLy: 0,
                spotCount: 3,
              }
            ]
          },
          {
            daypartName: 'Prime Access',
            aurTy: 481,
            aurLy: 0,
            revenueTy: 53775,
            revenueLy: 0,
            spotCount: 100,
            expanded: false,
            programs: [
              {
                name: 'Network23 6a News',
                time: 'M-F/6:00 AM - 7:00 AM',
                aurTy: 450,
                aurLy: 0,
                revenueTy: 14060,
                revenueLy: 0,
                spotCount: 38,
              },
              {
                name: 'Network23 Nws This Morning',
                time: 'M-F/7:00 AM - 8:00 AM',
                aurTy: 425,
                aurLy: 0,
                revenueTy: 24300,
                revenueLy: 0,
                spotCount: 54,
              },
              {
                name: 'Network23 Nws This Morning',
                time: 'M-F/8:00 AM - 9:00 AM',
                aurTy: 425,
                aurLy: 0,
                revenueTy: 15725,
                revenueLy: 0,
                spotCount: 37,
              },
              {
                name: 'Network23 Weekend News-Sat',
                time: 'M-F/9:00 AM - 10:00 AM',
                aurTy: 200,
                aurLy: 0,
                revenueTy: 1000,
                revenueLy: 0,
                spotCount: 5,
              },
              {
                name: 'Network23 Weekend News-Sun',
                time: 'M-F/9:00 AM - 10:00 AM',
                aurTy: 215,
                aurLy: 0,
                revenueTy: 645,
                revenueLy: 0,
                spotCount: 3,
              }
            ]
          },
          {
            daypartName: 'Prime/Specials',
            aurTy: 1665,
            aurLy: 0,
            revenueTy: 48075,
            revenueLy: 0,
            spotCount: 31,
            expanded: false,
            programs: [
              {
                name: 'Network23 6a News',
                time: 'M-F/6:00 AM - 7:00 AM',
                aurTy: 450,
                aurLy: 0,
                revenueTy: 14060,
                revenueLy: 0,
                spotCount: 38,
              },
              {
                name: 'Network23 Nws This Morning',
                time: 'M-F/7:00 AM - 8:00 AM',
                aurTy: 425,
                aurLy: 0,
                revenueTy: 24300,
                revenueLy: 0,
                spotCount: 54,
              },
              {
                name: 'Network23 Nws This Morning',
                time: 'M-F/8:00 AM - 9:00 AM',
                aurTy: 425,
                aurLy: 0,
                revenueTy: 15725,
                revenueLy: 0,
                spotCount: 37,
              },
              {
                name: 'Network23 Weekend News-Sat',
                time: 'M-F/9:00 AM - 10:00 AM',
                aurTy: 200,
                aurLy: 0,
                revenueTy: 1000,
                revenueLy: 0,
                spotCount: 5,
              },
              {
                name: 'Network23 Weekend News-Sun',
                time: 'M-F/9:00 AM - 10:00 AM',
                aurTy: 215,
                aurLy: 0,
                revenueTy: 645,
                revenueLy: 0,
                spotCount: 3,
              }
            ]
          },
          {
            daypartName: 'Late News',
            aurTy: 1074,
            aurLy: 0,
            revenueTy: 20838,
            revenueLy: 0,
            spotCount: 18,
            expanded: false,
            programs: [
              {
                name: 'Network23 6a News',
                time: 'M-F/6:00 AM - 7:00 AM',
                aurTy: 450,
                aurLy: 0,
                revenueTy: 14060,
                revenueLy: 0,
                spotCount: 38,
              },
              {
                name: 'Network23 Nws This Morning',
                time: 'M-F/7:00 AM - 8:00 AM',
                aurTy: 425,
                aurLy: 0,
                revenueTy: 24300,
                revenueLy: 0,
                spotCount: 54,
              },
              {
                name: 'Network23 Nws This Morning',
                time: 'M-F/8:00 AM - 9:00 AM',
                aurTy: 425,
                aurLy: 0,
                revenueTy: 15725,
                revenueLy: 0,
                spotCount: 37,
              },
              {
                name: 'Network23 Weekend News-Sat',
                time: 'M-F/9:00 AM - 10:00 AM',
                aurTy: 200,
                aurLy: 0,
                revenueTy: 1000,
                revenueLy: 0,
                spotCount: 5,
              },
              {
                name: 'Network23 Weekend News-Sun',
                time: 'M-F/9:00 AM - 10:00 AM',
                aurTy: 215,
                aurLy: 0,
                revenueTy: 645,
                revenueLy: 0,
                spotCount: 3,
              }
            ]
          },
          {
            daypartName: 'Late Fringe',
            aurTy: 110,
            aurLy: 0,
            revenueTy: 12090,
            revenueLy: 0,
            spotCount: 86,
            expanded: false,
            programs: [
              {
                name: 'Network23 6a News',
                time: 'M-F/6:00 AM - 7:00 AM',
                aurTy: 450,
                aurLy: 0,
                revenueTy: 14060,
                revenueLy: 0,
                spotCount: 38,
              },
              {
                name: 'Network23 Nws This Morning',
                time: 'M-F/7:00 AM - 8:00 AM',
                aurTy: 425,
                aurLy: 0,
                revenueTy: 24300,
                revenueLy: 0,
                spotCount: 54,
              },
              {
                name: 'Network23 Nws This Morning',
                time: 'M-F/8:00 AM - 9:00 AM',
                aurTy: 425,
                aurLy: 0,
                revenueTy: 15725,
                revenueLy: 0,
                spotCount: 37,
              },
              {
                name: 'Network23 Weekend News-Sat',
                time: 'M-F/9:00 AM - 10:00 AM',
                aurTy: 200,
                aurLy: 0,
                revenueTy: 1000,
                revenueLy: 0,
                spotCount: 5,
              },
              {
                name: 'Network23 Weekend News-Sun',
                time: 'M-F/9:00 AM - 10:00 AM',
                aurTy: 215,
                aurLy: 0,
                revenueTy: 645,
                revenueLy: 0,
                spotCount: 3,
              }
            ]
          }
        ]
      }
    },
    methods: {
      showSpotDetail (programRevenueDaypart) {
        this.selectedProgram = programRevenueDaypart
        this.showSpotDetailModal = true
      },
      toggleExpanded (programRevenueDaypart) {
        programRevenueDaypart.expanded = !programRevenueDaypart.expanded
      }
    }

  }
</script>
