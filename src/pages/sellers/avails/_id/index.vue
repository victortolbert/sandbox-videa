<template lang="pug">
  .avails-show-view
    .vui-grid.vui-grid--align-spread.vui-m-bottom--large
      div.vui-m-bottom--medium
        h1.vui-text-heading--large.vui-align-middle Avail ID {{ avail.id }}
        h2.vui-text-heading--small(
          v-if = '$route.query.version'
        ) Version {{ $route.query.version }}
      .vui-align-middle(
        v-if = '! $route.query.version'
      )
        a(
          @click.prevent = 'setEditMode'
          v-if = '!editing'
          href = '#'
        )
          vui-icon.vui-m-right--xx-small(
            name = 'edit'
          )
          | Edit Buyer Specs and Daypart Goals
        .buttons(
          v-if = 'editing'
        )
          button.vui-button.vui-button.vui-button--small.vui-button--brand.vui-m-right--xx-small(
            @click.prevent = 'editing = false'
          ) Save
          button.vui-button.vui-button.vui-button--small.vui-button--neutral(
            @click.prevent = 'editing = false'
          ) Cancel

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
        ) Start Date
        .vui-form-element__control
          span.vui-form-element__static {{ avail.flightStartDate }}

      fieldset.vui-form-element
        label.vui-form-element__label(
          for = ''
        ) End Date
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

    .vui-contain
      .vui-box.vui-grid.vui-grid--align-spread.vui-m-bottom--large.vui-wrap.vui-theme--default
        .vui-col--padded-medium(
          style = 'width: 50%'
        )
          fieldset.vui-form-element.vui-m-bottom--small(
            v-bind:class = 'error'
          )
            label.vui-form-element__label(
              for = ''
            ) Gross Market Budget
            .vui-form-element__control
              span(
                v-if = '!editing'
              ) {{ avail.grossMarketBudget | formatMoney | numberWithCommas }}
              input.vui-input(
                v-if = 'editing'
                v-model = 'avail.grossMarketBudget'
              )
              span#errorSample1.vui-form-element__help(
                v-if = 'error'
              ) This field is required
          fieldset.vui-form-element.vui-m-bottom--small
            label.vui-form-element__label(
              for = ''
            ) Target GRP Goal
            .vui-form-element__control
              span(
                v-if = '!editing'
              ) {{ avail.totalGrpGoal }}
              input.vui-input(
                v-if = 'editing'
                v-model = 'avail.totalGrpGoal'
              )

          fieldset.vui-form-element.vui-m-bottom--small
            label.vui-form-element__label Expiration Date
            .vui-form-element__control
              span(
                v-if = '!editing'
              ) {{ expirationDate | formatDate }}
              //- input.vui-input(type='text', v-if='editing', v-model='avail.dueDate')
              vui-datepicker#expirationDate(
                v-model = 'expirationDate'
                v-if = 'editing'
                name = 'expirationDate'
              )

          fieldset.vui-form-element.vui-m-bottom--small
            label.vui-form-element__label(
              for = ''
            ) Share Goal
            .vui-form-element__control
              span(
                v-if = '!editing'
              ) {{ avail.shareGoal | decimalToPercent }}
              input.vui-input(
                v-if = 'editing'
                v-model = 'avail.shareGoal'
              )
          fieldset.vui-form-element.vui-m-bottom--small
            label.vui-form-element__label(
              for = ''
            ) Due Date
            .vui-form-element__control
              span(
                v-if = '!editing'
              ) {{ dueDate | formatDate }}
              vui-datepicker#dueDate(
                v-model = 'dueDate'
                name = 'dueDate'
                v-if = 'editing'
              )
        .vui-col--padded-medium(
          style = 'width: 50%'
        )
          fieldset.vui-form-element.vui-m-bottom--small
            label.vui-form-element__label.vui-m-bottom--xx-small(
              for = ''
            ) Station &amp; Reps Notes
            div(
              v-if = '!editing'
              style = 'box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.16);border: 1px solid #ccc; min-height: 11.5rem; background: rgba(250, 255, 189, 0.2);padding: 1rem'
            ) {{ avail.notes }}
            textarea.vui-textarea(
              v-if = 'editing'
              v-model = 'avail.notes'
              style = 'min-height: 11.5rem'
            )
            .vui-form-element__help Notes are not shared with the buyer
          fieldset.vui-form-element
            label.vui-form-element__label(
              for = ''
            ) Last Updated by
            .vui-form-element__control
              span.vui-form-element__static {{ avail.lastUpdatedBy }}

    #daypart-goals.vui-scrollable--x.vui-m-bottom--large
      .vui-grid.vui-grid--align-spread.vui-m-bottom--medium
        h2.vui-text-heading--medium.vui-align-middle Daypart Goals
        .vui-align-middle(
          v-if = '!$route.query.version'
        )
          a(
            @click.prevent = 'setEditMode'
            v-if = '!editing'
            href = '#'
          )
            vui-icon.vui-m-right--xx-small(
              name = 'edit'
            )
            | Edit Buyer Specs and Daypart Goals
          .buttons(
            v-if = 'editing'
          )
            button.vui-button.vui-button--small.vui-button--brand.vui-m-right--xx-small(
              @click.prevent = 'editing = false'
            ) Save
            button.vui-button.vui-button--small.vui-button.vui-button--neutral(
              @click.prevent = 'editing = false'
            ) Cancel
      table.vui-table.vui-m-bottom--medium.vui-no-row-hover
        thead
          tr
            th(
              rowspan = '2'
            )
              a.vui-grid.vui-grid--align-spread(
                @click.prevent = ''
                href = '#'
              )
                span.vui-align-middle Daypart
                span.vui-align-middle
                  vui-icon(
                    name = 'sort-asc'
                    style = 'color: hsla(192, 9%, 89%, 1)'
                  )
            th(
              colspan = '3'
            ) Goals
          tr
            th(
              style = 'padding-left: 0.5rem'
            )
              a.vui-grid.vui-grid--align-spread(
                @click.prevent = ''
                href = '#'
              )
                span.vui-align-middle CPP - 30 secs
                span.vui-align-middle
                  vui-icon(
                    name = 'sort'
                    style = 'color: hsla(192, 9%, 89%, .5)'
                  )
            th
              a.vui-grid.vui-grid--align-spread(
                @click.prevent = ''
                href = "#"
              )
                span.vui-align-middle GRPs
                span.vui-align-middle
                  vui-icon(
                    name = 'sort'
                    style = 'color: hsla(192, 9%, 89%, .5)'
                  )
            th
              a.vui-grid.vui-grid--align-spread(
                @click.prevent = ''
                href = "#"
              )
                span.vui-align-middle Mix %
                span.vui-align-middle
                  vui-icon(
                    name = 'sort'
                    style = 'color: hsla(192, 9%, 89%, .5)'
                  )
        tbody
          tr(
            v-for = 'daypartGoal in avail.daypartGoals'
          )
            td {{ daypartGoal.daypart }}
            td.vui-highlight.u-width-medium.vui-text-align--right
              span(
                v-if = '!editing'
              ) {{ daypartGoal.cpp | numberWithCommas | formatMoney }}
              input.vui-input.vui-text-align--right(
                v-if = 'editing'
                type = 'text'
                v-model = 'daypartGoal.cpp'
              )
            td.vui-text-align--right.vui-highlight.u-width-medium
              span(
                v-if = '!editing'
                ) {{ daypartGoal.grps }}
              input.vui-input.vui-text-align--right(
                v-if = 'editing'
                v-model = 'daypartGoal.grps'
                type = 'text'
                )
            td.vui-text-align--right.vui-highlight.u-width-medium
              span(
                v-if = '!editing'
                ) {{ daypartGoal.mix | decimalToPercent }}
              input.vui-input.vui-text-align--right(
                v-if = 'editing'
                v-model = 'daypartGoal.mix'
                type = 'text'
                )
      .vui-text-align--right(
        v-if = 'editing'
        )
        .buttons
          button.vui-button.vui-button.vui-button--small.vui-button--brand.vui-m-right--xx-small(
            @click.prevent = 'editing = false'
          ) Save
          button.vui-button.vui-button.vui-button--small.vui-button--neutral(
            @click.prevent = 'editing = false'
          ) Cancel
    #avail.vui-m-bottom--medium
      h2.vui-text-heading--medium.vui-m-bottom--small Avail
      //- daypart-selector
      .vui-scrollable--x.vui-m-bottom--large
        #daypart-selector
          button.vui-button.vui-max-small-buttons--stretch(
            @click.prevent = 'selectDaypart(daypart)'
            v-bind:class = 'daypart.id == selectedDaypart.id ? "vui-button--brand" : "vui-button--neutral"'
            v-for = 'daypart in avail.dayparts'
          ) {{ daypart.name }}

    .avail-programs.vui-scrollable--x.vui-m-bottom--medium
      h3.vui-text-heading--small.vui-m-bottom--small {{ selectedDaypart.name }}
      table.vui-table.vui-table--nested-rows.vui-no-row-hover
        thead
          tr
            th Programs
            th.u-width-small Start Date
            th.u-width-small End Date
            th.u-width-small Rate
            th.u-width-small Rating #[sup 1]
            th.u-width-small Avg. CPP #[sup 1]
        tbody(
          v-for = 'program in selectedDaypart.programs'
          v-if = 'selectedDaypart'
        )
          tr
            td
              span.vui-grid
                a.vui-align-middle.vui-m-right--x-small(
                  @click.prevent = 'program.expanded = !program.expanded'
                  href = '#'
                )
                  vui-icon.vui-icon--small.vui-align-middle.vui-m-right--x-small(
                    v-bind:name = 'program.expanded ? "caret-lower-right" : "caret-right"'
                    v-if = 'program.months'
                    style = 'margin-left: -0.5rem'
                  )
                template(
                  v-if = '!program.months'
                )
                  span.vui-m-left--large
                    span {{program.name}} #[br]
                    span {{ program.time }}
                template(
                  v-else
                )
                  span
                    span {{program.name}} #[br]
                    span {{ program.time }}
            td {{ program.flightStartDate }}
            td {{ program.flightEndDate }}
            td.vui-text-align--right {{ program.rate | numberWithCommas | formatMoney }}
            td.vui-text-align--right {{ program.rating | formatRating }}
            td.vui-text-align--right {{ program.avgCpp | numberWithCommas | formatMoney }}
          template(
            v-for = 'month in program.months'
          )
            tr.month(
              v-show = 'program.expanded'
            )
              td
                span.vui-grid
                  a.vui-align-middle.vui-m-right--x-small(
                    @click.prevent = 'month.expanded = !month.expanded'
                    href = '#'
                  )
                    vui-icon.vui-icon--small.vui-align-middle.vui-m-right--x-small(
                      v-bind:name = 'month.expanded ? "caret-lower-right" : "caret-right"'
                      v-if = 'month.weeks'
                      style = 'margin-left: -0.5rem'
                    )
                  template(
                    v-if = '!month.weeks'
                  )
                    span.vui-m-left--large {{ month.month }}
                  template(
                    v-else
                  )
                    span {{ month.month }}
              td {{ month.flightStartDate }}
              td {{ month.flightEndDate }}
              td.vui-text-align--right {{ month.rate | numberWithCommas | formatMoney  }}
              td.vui-text-align--right {{ month.rating | formatRating }}
              td.vui-text-align--right {{ month.avgCpp | numberWithCommas | formatMoney  }}

            template(
              v-for = 'week in month.weeks'
            )
              tr.week(
                v-show = 'month.expanded'
              )
                td {{ week.week }}
                td
                td
                td.vui-text-align--right {{ week.rate | numberWithCommas | formatMoney }}
                td.vui-text-align--right {{ week.rating | formatRating }}
                td.vui-text-align--right {{ week.avgCpp | numberWithCommas | formatMoney  }}
    p.vui-text-body--small
      sup.vui-m-right--xx-small 1
      span Nielsen source or data derived from Nielsen

    .vui-text-align--right(
      v-if = '!$route.query.version'
    )
      .buttons
        button.vui-button.vui-button.vui-button--secondary.vui-m-right--x-small(
          @click = 'showReleaseToBuyerModal = true'
        ) Release to Buyer
        button.vui-button.vui-button.vui-button--brand(
          @click.prevent = 'editAvail(avail.id)'
          href = '#'
        ) Edit Avail
    avails-release-to-buyer-modal(
      v-bind:show = 'showReleaseToBuyerModal'
    )
</template>

<script>
  import axios from '~plugins/axios'
  import moment from 'moment'
  import AvailsReleaseToBuyerModal from '~components/avails/avails-release-to-buyer-modal'

  export default {
    metaInfo: {
      title: 'Avails'
    },

    components: { AvailsReleaseToBuyerModal },

    props: {
      availsRoute: {
        type: String,
        default: 'sellers-avails'
      },

      editAvailRoute: {
        type: String,
        default: 'sellers-avails-id-edit'
      }
    },

    data () {
      return {
        id: this.$route.params.id,
        avail: {},
        expirationDate: new Date(moment().add(14, 'days').toISOString()),
        dueDate: new Date(moment().add(5, 'days').toISOString()),
        showReleaseToBuyerModal: false,
        selectedDaypart: require('~components/avails/selected.json'),
        editing: false,
        error: false,
        'dayparts': [
          {
            'id': 1,
            'name': 'Early Morning',
            'startTime': '04:30 am'
          },
          {
            'id': 2,
            'name': 'Daytime',
            'startTime': '09:00 am'
          },
          {
            'id': 3,
            'name': 'Early Fringe',
            'startTime': '03:00 pm'
          },
          {
            'id': 4,
            'name': 'Early News',
            'startTime': '5:00 pm'
          },
          {
            'id': 5,
            'name': 'Prime Access',
            'startTime': '07:00 pm'
          },
          {
            'id': 6,
            'name': 'Prime/Specials',
            'startTime': '08:00 pm'
          },
          {
            'id': 7,
            'name': 'Sports',
            'startTime': ''
          },
          {
            'id': 8,
            'name': 'Late News',
            'startTime': '10:00 pm'
          },
          {
            'id': 9,
            'name': 'Late Fringe',
            'startTime': '11:00 pm'
          },
          {
            'id': 10,
            'name': 'Weekend',
            'startTime': '11:00 pm'
          },
          {
            'id': 11,
            'name': 'Overnight',
            'startTime': '01:00 am'
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
          }, (response) => {
            // error callback
          })
      },

      setEditMode () {
        this.editing = true
      },

      selectDaypart (daypart) {
        this.selectedDaypart = daypart
      },

      showAvails () {
        this.$router.push({
          name: this.availsRoute
        })
      },

      editAvail (id, version = '') {
        let routeInfo = {
          name: this.editAvailRoute,
          params: {
            id: id
          }
        }

        if (version) {
          routeInfo.query = { version: version }
        }

        this.$router.push(routeInfo)
      }
    },

    events: {
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
    },
  }
</script>
