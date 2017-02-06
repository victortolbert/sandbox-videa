<template lang="pug">
  .avails-edit-view
    vui-title Avail ID {{ avail.id }} &mdash; Edit

    .vui-box.vui-grid.vui-grid--align-spread.vui-m-bottom--large.vui-wrap.vui-theme--default
      fieldset.vui-form-element
        label.vui-form-element__label(
          for = ''
        ) Client
        .vui-form-element__control
          span.vui-form-element__static {{ avail.advertiser }}

      fieldset.vui-form-element
        label.vui-form-element__label(
          for = ''
        ) Product
        .vui-form-element__control
          span.vui-form-element__static {{ avail.product }}

      fieldset.vui-form-element
        label.vui-form-element__label(
          for = ''
        ) Estimate
        .vui-form-element__control
          span.vui-form-element__static {{ avail.estimateNumber }}

      fieldset.vui-form-element
        label.vui-form-element__label(
          for = ''
        ) CPE
        .vui-form-element__control
          span.vui-form-element__static {{ avail.cpe }}

      fieldset.vui-form-element
        label.vui-form-element__label(
          for = ''
        ) Start
        .vui-form-element__control
          span.vui-form-element__static {{ avail.flightStartDate }}

      fieldset.vui-form-element
        label.vui-form-element__label(
          for = ''
        ) End
        .vui-form-element__control
          span.vui-form-element__static {{ avail.flightEndDate }}

      fieldset.vui-form-element
        label.vui-form-element__label(
          for = ''
        ) Hiatus&nbsp;Weeks
        .vui-form-element__control
          span.vui-form-element__static N/A

      fieldset.vui-form-element
        label.vui-form-element__label(
          for = ''
        ) Primary&nbsp;Demo
        .vui-form-element__control
          span {{ avail.primaryDemo }}

    ol.steps
      li.steps__item.steps__item--done.steps__item--first(
        v-bind:class = '{"steps__item--active" : activeTab !== "market-competitive"}'
      )
        a.steps__link(
          @click.prevent = 'setActiveTab("market-competitive")'
          v-bind:class = '{"done": activeTab == "market-competitive" }'
          style = 'cursor: pointer'
        ) Market Competitive
      li.steps__item.steps__item--done(
        v-bind:class = '{"steps__item--active" : activeTab !== "buyer-ratings"}'
      )
        a.steps__link(
          @click.prevent = 'setActiveTab("buyer-ratings")'
          v-bind:class = '{"done": activeTab == "buyer-ratings" }'
          style = 'cursor: pointer'
        ) Buyer Ratings
      li.steps__item.steps__item--last(
        v-bind:class = '{"steps__item--active" : activeTab !== "rates-and-ratings"}'
      )
        a.steps__link(
          @click.prevent = 'setActiveTab("rates-and-ratings")'
          v-bind:class = '{"done": activeTab == "rates-and-ratings" }'
          style = 'cursor: pointer'
        ) Rates and Ratings

    #market-competitive(
      v-show = 'activeTab == "market-competitive"'
    )
      h2.vui-text-heading--medium Market Competitive
      p.vui-m-bottom--medium.
        Need rates are generated from the market competitive.
        Buy specifications are not considered when generating
        need rates.

      .vui-scrollable--x.vui-m-bottom--large
        table.vui-table.vui-no-row-hover.vui-m-bottom--large
          thead
            tr
              th(
                rowspan = '2'
              ) Daypart
              th(
                colspan = '2'
              ) Market Competitive
            tr
              th.u-width-small Low CPP
              th.u-width-small High CPP
          tbody
            tr(
              v-for = 'daypart in avail.dayparts'
            )
              td {{ daypart.name }}
              td.u-width-medium
                input.vui-input(
                  type = 'text'
                  v-model = 'daypart.marketCompetitive.low'
                )
              td.u-width-medium
                input.vui-input(
                  type = 'text'
                  v-model = 'daypart.marketCompetitive.high'
                )

        .vui-grid.vui-grid--align-spread
          a(
            @click.prevent = 'showAvail(avail.id)'
            href = '#'
          )
            vui-icon.vui-m-right--xx-small(
              name = 'arrow-circle-left'
            )
            | Back to Avail
          .action-buttons.vui-m-bottom--x-small
            button.vui-button.vui-button--neutral.vui-m-right--x-small Cancel
            button.vui-button.vui-button--brand(
              @click.prevent = 'setActiveTab("buyer-ratings")'
            ) Save Changes and Continue #[sup 1]
        p.vui-text-body--small.vui-text-align--right(
          style = 'line-height: 1.2'
        )

      p.vui-text-body--small
        sup.vui-m-right--xx-small 1
        span Saved changes are viewable by all station users and assigned reps.
    #buyer-ratings(
      v-show = 'activeTab == "buyer-ratings"'
    )
      h2.vui-text-heading--medium Buyer Ratings
      p.vui-m-bottom--medium.
        Enter the buyer ratings per program. To switch to
        a different daypart, click on the desired daypart
        in the timeline below.

      .vui-scrollable--x.vui-m-bottom--large
        .daypart-selector
          button.vui-button.vui-max-small-buttons--stretch(
            @click.prevent = 'selectDaypart(daypart)'
            v-bind:class = 'daypart.id == selectedDaypart.id ? "vui-button--brand" : "vui-button--neutral"'
            v-for = 'daypart in avail.dayparts'
          ) {{ daypart.name }}

      .avail-programs.vui-scrollable--x.vui-m-bottom--large
        h3.vui-text-heading--small.vui-m-bottom--small {{ selectedDaypart.name }}
        table.vui-table.vui-no-row-hover.vui-m-bottom--medium.vui-table--nested-rows
          thead
            tr
              th
                a.vui-grid.vui-grid--align-spread(
                  @click.prevent = ''
                  href = '#'
                )
                  span.vui-align-middle Program
                  span.vui-align-middle
                    vui-icon(
                      name = 'sort'
                      style = 'color: hsla(192, 9%, 89%, .5)'
                    )
              th.u-width-small Buyer Rating
          tbody(
            v-for = 'program in selectedDaypart.programs'
            v-if = 'selectedDaypart'
          )
            tr
              td
                span
                  span {{ program.name }} #[br]
                  span {{ program.time }}
              td.u-width-small
                input.vui-input(
                  v-model = 'program.buyer.rating'
                  style = 'text-align: right'
                  type = 'text'
                )
        .vui-grid.vui-grid--align-spread
          a(
            @click.prevent = 'setActiveTab("market-competitive")'
            href = '#'
          )
            vui-icon.vui-m-right--xx-small(
              name = 'arrow-circle-left'
            )
            | Back to Market Competitive
          .action-buttons.vui-m-bottom--x-small
            button.vui-button.vui-button--neutral.vui-m-right--x-small(
              @click.prevent= 'setActiveTab("market-competitive")'
              href='#'
            ) Cancel
            button.vui-button.vui-button--brand(
              @click.prevent = 'setActiveTab("rates-and-ratings")'
            ) Save Changes and Continue #[sup 1]
        p.vui-text-body--small
          sup.vui-m-right--xx-small 1
          span Saved changes are viewable by all station users and assigned reps.
    #rates-and-ratings(
      v-show = 'activeTab == "rates-and-ratings"'
    )
      h2.vui-text-heading--medium Rates and Ratings
      p.vui-m-bottom--medium Adjust your rates and ratings using the worksheet below.

      .vui-scrollable--x.vui-m-bottom--large
        .daypart-selector
          button.vui-button.vui-max-small-buttons--stretch(
            @click.prevent = 'selectDaypart(daypart)'
            v-bind:class = '(daypart.id == selectedDaypart.id) ? "vui-button--brand" : "vui-button--neutral"'
            v-for = 'daypart in avail.dayparts'
          ) {{ daypart.name }}

      .avail-programs.vui-scrollable--x.vui-m-bottom--medium
        .vui-grid.vui-grid--align-spread
          h3.vui-text-heading--small.vui-m-bottom--small {{ selectedDaypart.name }}
          a.vui-text-align--right(
            @click.prevent = 'showEditProgramsModal = true'
            href = '#'
          )
            vui-icon.vui-m-right--xx-small(
              name = 'edit'
            )
            | Add Programs

        table.vui-table.vui-no-row-hover.vui-m-bottom--large
          thead
            tr
              th(
                rowspan = '2'
              ) Program
              th.u-width-large(
                rowspan = '2'
              ) Start
              th.u-width-large(
                rowspan = '2'
              ) End
              th(
                colspan = '3'
              ) Availed
              th(
                colspan = '4'
              ) Videa
              th(
                colspan = '4'
              )
                .vui-grid.vui-grid--align-spread
                  span.vui-align-middle Buyer
                  span.vui-align-middle.vui-grid
                    //- input.vui-align-middle.vui-m-right--xx-small(type = 'checkbox')
                    .vui-form-element
                      .vui-checkbox.vui-m-right--xxx-small
                        input(
                          id = 'accept-all-buyer-ratings'
                          type = 'checkbox'
                        )
                        span.vui-checkbox--faux
                      label.vui-align-middle(
                        for = 'accept-all-buyer-ratings'
                      ) Accept All Buyer Ratings #[small (except 0's)]
            tr
              th.u-width-large Rate
              th.u-width-large Rating
              th CPP #[sup 1]
              th Rating
              th Need Goal
              th Need Low
              th Need High
              th Rating
              th Need Goal
              th Need Low
              th Need High
          // Programs
          tbody(
            v-for = 'program in selectedDaypart.programs'
            v-if = 'selectedDaypart'
          )
            tr.program
              td.name
                span.vui-grid
                  a.vui-align-middle.vui-m-right--x-small(
                    @click.prevent = 'program.expanded = !program.expanded'
                    href='#'
                  )
                    vui-icon.vui-align-middle.vui-m-right--x-small(
                      v-bind:name = '(program.expanded) ? "caret-lower-right" : "caret-right"'
                      v-if = 'program.months'
                    )
                  template(
                    v-if = '!program.months'
                  )
                    span.vui-m-left--large
                      span {{ program.name }} #[br]
                      span {{program.time}}
                  template(
                    v-else
                  )
                    span
                      span {{ program.name }} #[br]
                      span {{ program.time }}
              // Flight Start Date(program)
              td {{ program.flightStartDate }}
              // Flight End Date (program)
              td {{ program.flightEndDate }}
              // Rate (program)
              td.u-width-small
                input.vui-input.vui-text-align--right(
                  @keypress = 'onKeypress'
                  v-bind:value='program.rate'
                  v-model = 'program.rate'
                  type = 'text'
                )
              // Rating (program)
              td.u-width-small
                input.vui-text-align--right.vui-input(
                  v-bind:value = 'program.rating'
                  v-model = 'program.rating'
                )
              // Average CPP
              td.vui-text-align--right.u-width-small
                cpp(
                  v-bind:rating = 'program.rating'
                  v-bind:rate = 'program.rate'
                )
                //- {{ program.avgCpp | numberWithCommas | formatMoney }}
              // Rating (program)
              td.vui-text-align--right.u-width-small.u-highlight {{ program.rating | formatRating }}
              // Videa -- Need Goal (program)
              td.vui-text-align--right.u-width-small.u-highlight {{ program.videa.needGoal | numberWithCommas | formatMoney }}
              // Videa -- Need Low (program)
              td.vui-text-align--right.u-width-small.u-highlight {{ program.videa.needLow | numberWithCommas | formatMoney }}
              // Videa -- Need High (program)
              td.vui-text-align--right.u-width-small.u-highlight {{ program.videa.needHigh | numberWithCommas | formatMoney }}
              // Buyer --  Rating (program)
              td.vui-text-align--right.u-width-small
                .vui-grid.vui-grid--align-spread
                  .vui-form-element
                    .vui-checkbox.vui-m-right--xxx-small
                      input(
                        type = 'checkbox'
                      )
                      span.vui-checkbox--faux
                  span.vui-align-middle {{ program.buyer.rating | formatRating }}
              // Buyer --  Need Goal (program)
              td.vui-text-align--right.u-width-small {{ program.buyer.needGoal | numberWithCommas | formatMoney }}
              // Buyer --  Need Low (program)
              td.vui-text-align--right.u-width-small {{ program.buyer.needLow | numberWithCommas | formatMoney }}
              // Buyer --  Need High (program)
              td.vui-text-align--right.u-width-small {{ program.buyer.needHigh | numberWithCommas | formatMoney }}
            // Months
            template(
              v-for = 'month in program.months'
            )
              tr.month(
                v-show = 'program.expanded'
              )
                // Month
                td.name
                  .vui-grid.vui-grid--align-spread
                    span.vui-align-middle(
                      style = 'font-weight: 500'
                    ) {{ month.month }}
                    add-week-dropdown.vui-align-middle.dropdown-left.vui-m-right-x-small(
                      text = 'icon'
                      v-bind:month = 'month'
                      v-bind:weeks = 'month.weeks'
                    )
                // Flight Start Date (month)
                td.u-width-small {{ month.flightStartDate }}
                // Flight End Date (month)
                td.u-width-small {{ month.flightEndDate }}
                // Rate (month)
                td.u-width-small
                  input.vui-input.vui-text-align--right(
                    @keypress = 'onKeypress'
                    v-bind:value = 'month.rate'
                    v-model = 'month.rate'
                    type = 'text'
                  )
                // Rating (month)
                td.u-width-small
                  input.vui-text-align--right.vui-input(
                    v-bind:value = 'month.rating'
                    v-model = 'month.rating'
                  )
                // Average CPP (month)
                td.vui-text-align--right.u-width-small
                  cpp(
                    v-bind:rating = 'month.rating'
                    v-bind:rate = 'month.rate'
                  )
                  //- {{ month.avgCpp | numberWithCommas | formatMoney }}
                // Videa Rating (month)
                td.vui-text-align--right.u-width-small.u-highlight {{ month.videa.rating | formatRating }}
                // Videa Need Goal (month)
                td.vui-text-align--right.u-width-small.u-highlight {{ month.videa.needGoal | numberWithCommas | formatMoney }}
                // Videa Need Low (month)
                td.vui-text-align--right.u-width-small.u-highlight {{ month.videa.needLow | numberWithCommas | formatMoney }}
                // Videa Need High (month)
                td.vui-text-align--right.u-width-small.u-highlight {{ month.videa.needHigh | numberWithCommas | formatMoney }}
                // Buyer Rating (month)
                td.vui-text-align--right.u-width-small
                  .vui-grid.vui-grid--align-spread
                    .vui-form-element
                      .vui-checkbox.vui-m-right--xxx-small
                        input(
                          type = 'checkbox'
                        )
                        span.vui-checkbox--faux
                    span.vui-align-middle {{ month.buyer.rating | formatRating }}
                // Buyer Need Goal(month)
                td.vui-text-align--right.u-width-small {{ month.buyer.needGoal | numberWithCommas | formatMoney }}
                // Buyer Need Low (month)
                td.vui-text-align--right.u-width-small {{ month.buyer.needLow | numberWithCommas | formatMoney }}
                // Buyer Need High (month)
                td.vui-text-align--right.u-width-small {{ month.buyer.needHigh | numberWithCommas | formatMoney }}
              // Weeks
              template(
                v-for = 'week in month.weeks'
              )
                tr.week(
                  v-bind:class = '[(!week.expanded) ? "vui-hide" : ""]'
                  v-show = 'week.expanded'
                )
                  // Week
                  td.name
                    .vui-grid
                      a.vui-align-middle(
                        @click.prevent = 'week.expanded = false'
                        href = '#'
                      )
                        vui-icon.vui-m-right--x-small(
                          name = 'times-circle'
                        )
                      span.vui-align-middle {{ week.week }}
                  // Flight Start Date (week)
                  td.u-width-small {{ week.flightStartDate }}
                  // Flight End Date (week)
                  td.u-width-small {{ week.flightEndDate }}
                  // Rate (week)
                  td.u-width-small
                    input.vui-input.vui-text-align--right(
                      @keypress = 'onKeypress'
                      v-bind:value = 'week.rate'
                      v-model = 'week.rate'
                      type = 'text'
                    )

                  // Rating (week)
                  td.u-width-small
                    input.vui-text-align--right.vui-input(
                      v-bind:value = 'week.rating'
                      v-model = 'week.rating'
                    )

                  // Average CPP (week)
                  td.vui-text-align--right.u-width-small
                    cpp(
                      v-bind:rating = 'week.rating'
                      v-bind:rate = 'week.rate'
                    )
                    //-{{ week.avgCpp | numberWithCommas | formatMoney }}
                  // Videa Rating (week)
                  td.vui-text-align--right.u-width-small.u-highlight {{ week.videa.rating | formatRating }}
                  // Videa Need Goal (week)
                  td.vui-text-align--right.u-width-small.u-highlight {{ week.videa.needGoal | numberWithCommas | formatMoney }}
                  // Videa Need Low (week)
                  td.vui-text-align--right.u-width-small.u-highlight {{ week.videa.needLow | numberWithCommas | formatMoney }}
                  // Videa Need High (week)
                  td.vui-text-align--right.u-width-small.u-highlight {{ week.videa.needHigh | numberWithCommas | formatMoney }}
                  // Buyer Rating (week)
                  td.vui-text-align--right.u-width-small {{ week.buyer.rating | formatRating }}
                  // Buyer Need Goal (week)
                  td.vui-text-align--right.u-width-small {{ week.buyer.needGoal | numberWithCommas | formatMoney }}
                  // Buyer Need Low
                  td.vui-text-align--right.u-width-small {{ week.buyer.needLow | numberWithCommas | formatMoney }}
                  // Buyer Need High
                  td.vui-text-align--right.u-width-small {{ week.buyer.needHigh | numberWithCommas | formatMoney }}

      .vui-grid.vui-grid--align-spread
        a(
          @click.prevent = 'setActiveTab("buyer-ratings")'
          href = '#'
        )
          vui-icon.vui-m-right--xx-small(
            name = 'arrow-circle-left'
          )
          | Back to Buyer Ratings
        .action-buttons.vui-m-bottom--x-small
          button.vui-button.vui-button--neutral.vui-m-right--x-small(
            @click.prevent = 'setActiveTab("buyer-ratings")'
            href = '#'
          ) Cancel
          button.vui-button.vui-button--brand.vui-m-right--x-small(
            @click.prevent = 'setActiveTab("buyer-ratings")'
            href = '#'
          ) Save
          button.vui-button.vui-button--brand(
            @click.prevent = 'showAvail(avail.id)'
            href = '#'
            style = 'color: #fff !important'
          ) Save and Release #[sup 1]
      p.vui-text-body--small
        sup.vui-m-right--xx-small 1
        span Nielsen source or data derived from Nielsen <br>
        sup.vui-m-right--xx-small 1
        span Saving will allow your station to see the work you have completed on this page
    avails-edit-programs-modal(
      v-bind:show = 'showEditProgramsModal'
    )
</template>

<script>
  import axios from '~plugins/axios'
  import AvailsEditProgramsModal from '~components/avails/avails-edit-programs-modal'
  import AddWeekDropdown from '~components/common/add-week-dropdown'
  import StepWizard from '~components/avails/step-wizard'

  export default {
    metaInfo: {
      title: 'Avails'
    },

    components: {
      AvailsEditProgramsModal,
      AddWeekDropdown,
      StepWizard
    },

    props: {
      availRoute: {
        type: String
      },

      availsRoute: {
        type: String
      }
    },

    data () {
      return {
        avail: {},
        showEditProgramsModal: false,
        activeTab: 'market-competitive',
        application: 'reps',
        avails: [],
        selectedDaypart: require('~components/avails/selected.json'),
        'dayparts': [
          {
            'id': 1,
            'name': 'Early Morning',
            'startTime': '04:30 AM'
          },
          {
            'id': 2,
            'name': 'Daytime',
            'startTime': '09:00 AM'
          },
          {
            'id': 3,
            'name': 'Early Fringe',
            'startTime': '03:00 PM'
          },
          {
            'id': 4,
            'name': 'Early News',
            'startTime': '5:00 PM'
          },
          {
            'id': 5,
            'name': 'Prime Access',
            'startTime': '07:00 PM'
          },
          {
            'id': 6,
            'name': 'Prime/Specials',
            'startTime': '08:00 PM'
          },
          {
            'id': 7,
            'name': 'Sports',
            'startTime': ''
          },
          {
            'id': 8,
            'name': 'Late News',
            'startTime': '10:00 PM'
          },
          {
            'id': 9,
            'name': 'Late Fringe',
            'startTime': '11:00 PM'
          },
          {
            'id': 10,
            'name': 'Weekend',
            'startTime': '11:00 PM'
          },
          {
            'id': 11,
            'name': 'Overnight',
            'startTime': '01:00 AM'
          }
        ]
      }
    },

    methods: {
      fetchAvail (id) {
        axios.get(`/avails/${id}`)
          .then((response) => {
            this.avail = response.data
          })
          .catch((error) => {
            console.log(error)
          })
      },

      fetchDayparts () {
        axios.get('/dayparts')
          .then((response) => {
            this.dayparts = response.data
          })
          .catch((error) => {
            console.log(error)
          })
      },

      selectDaypart (daypart) {
        this.selectedDaypart = daypart
      },

      setActiveTab (tab) {
        this.activeTab = tab
      },

      showAvail (id, version = '') {
        let routeInfo = {
          name: this.availRoute,
          params: {
            id: id
          }
        }

        if (version) {
          routeInfo.query = { version: version }
        }

        this.$router.push(routeInfo)
      },

      showAvails () {
        this.$router.push({
          name: this.availsRoute
        })
      },

      onKeypress (event) {
        if ((event.which !== 46 || $(this).val().indexOf('.') !== -1) && (event.which < 48 || event.which > 57)) {
          event.preventDefault()
        }
      }
    },

    events: {
      'activate-tab' (tab) {
        this.activeTab = tab
      },

      'selected-daypart' (daypart) {
        this.selectedDaypart = this.avail.dayparts[daypart.id - 1]
      }
    },

    beforeCreate () {
      this.$store.state.activeApp = 'sellers'
    },

    created () {
      this.fetchAvail(this.$route.params.id)
      this.fetchDayparts()
    }
  }
</script>
