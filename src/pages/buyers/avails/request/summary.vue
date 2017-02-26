<template lang="pug">
  .avails-summary
    h2.vui-text-heading--medium.vui-m-bottom--medium.vui-box(
      v-show = 'loading'
      style = 'background-color: #fff'
    )
      i.fa.fa-refresh.fa-spin.vui-m-right--small(
        style = 'color: hsla(196, 46%, 48%, 1)'
      ) {{ loadingMessage }}

    h1.vui-text-heading--large.vui-m-bottom--medium Summary

    .vui-box.vui-grid.vui-grid--align-spread.vui-m-bottom--large.vui-wrap.vui-theme--default
      .vui-form-element
        label.vui-form-element__label Client
        .vui-form-element__control
          span.vui-form-element__static {{ avail.client }}

      .vui-form-element
        label.vui-form-element__label Product
        .vui-form-element__control
          span.vui-form-element__static {{ avail.product }}

      .vui-form-element
        label.vui-form-element__label Estimate
        .vui-form-element__control
          span.vui-form-element__static {{ avail.estimate }}

      .vui-form-element
        label.vui-form-element__label Campaign Name
        .vui-form-element__control
          span.vui-form-element__static {{ avail.campaignName }}

      .vui-form-element
        label.vui-form-element__label Expiration Date
        .vui-form-element__control
          span.vui-form-element__static {{ expirationDate | formatDate }}

      .vui-form-element
        label.vui-form-element__label Start Date
        .vui-form-element__control
          span.vui-form-element__static {{ avail.startDate }}

      .vui-form-element
        label.vui-form-element__label End Date
        .vui-form-element__control
          span.vui-form-element__static {{ avail.endDate }}

      .vui-form-element
        label.vui-form-element__label Gross Market Budget
        .vui-form-element__control
          span.vui-form-element__static {{ avail.grossMarketBudget | numberWithCommas | formatMoney }}

      .vui-form-element
        label.vui-form-element__label Target GRP Goal
        .vui-form-element__control
          span.vui-form-element__static {{ avail.targetGrpGoal }}

      .vui-form-element
        label.vui-form-element__label Primary Target
        .vui-form-element__control
          span.vui-form-element__static {{ avail.primaryTarget }}

    div(
      v-show = '!loading'
    )
      .vui-grid.vui-grid--align-spread
        h2.vui-text-heading--large.vui-m-bottom--medium Detail
        .buttons
          router-link.vui-m-right--xx-small.vui-button.vui-button--secondary(
            v-bind:to = '{ name: "buyers-avails", exact: true }'
            tag = 'button'
          ) Save and Close
          router-link.vui-m-right--xx-small.vui-button.vui-button--secondary(
            v-bind:to = '{ name: "buyers-avails", exact: true }'
            tag = 'button'
          ) Cancel
          a.vui-button.vui-button--brand(
            @click.prevent = 'exportAvail'
          ) Export Avail

      .vui-tabs--scoped
        ul.vui-tabs--scoped__nav(
          role = 'tablist'
        )
          li.vui-tabs--scoped__item.vui-active.vui-text-heading--label(
            role = 'presentation'
            title = 'WVVV'
          )
            a.vui-tabs--scoped__link(
              @click.prevent = ''
              aria-controls = 'tab-default-1'
              aria-selected = 'true'
              href = '#'
              role = 'tab'
              tabindex = '0'
            ) WVVV
      #wnn.vui-tabs--scoped__content.vui-p-around--x-large.vui-show(
        role = 'tabpanel'
      )
        .vui-scrollable--x.vui-m-bottom--medium
          table.vui-table.vui-table--nested-rows.vui-no-row-hover
            thead
              tr
                th
                  .vui-form-element
                    .vui-form-element__control
                      label.vui-checkbox
                        input#checkbox-01(
                          checked = 'true'
                          name = 'options'
                          type = 'checkbox'
                        )
                        span.vui-checkbox--faux
                        span.vui-form-element__label(
                          style = 'color: white'
                        ) Program
                th Avg. Rate
                th
                  | Avg. Rating
                  sup 1
                th
                  | Avg. CPP
                  sup 1
                th Daypart
                th Start Date
                th End Date
                th Start Time
                th End Time
                th Length
            tbody(
              v-for = '(program, index) in programs'
            )
              tr.program(
                v-bind:class = '(index % 2 === 0) ? "vui-highlight" : ""'
                v-if = 'program.active'
              )
                td
                  .vui-grid
                    a.vui-align-middle(
                      @click.prevent = 'program.expanded = !program.expanded'
                      v-if = 'program.details'
                      href = '#'
                    )
                      vui-icon.vui-align-middle(
                        v-bind:name = 'program.expanded ? "caret-lower-right" : "caret-right"'
                      )
                    .vui-form-element(
                      v-bind:class = '!program.details ? "vui-m-left--medium" : ""'
                    )
                      .vui-form-element__control
                        label.vui-checkbox
                          input#checkbox-01(
                            checked = 'true'
                            name = 'options'
                            type = 'checkbox'
                          )
                          span.vui-checkbox--faux
                          span.vui-form-element__label {{ program.name }}
                td.vui-text-align--right.u-width-medium {{ program.avgRate | numberWithCommas | formatMoney }}
                td.vui-text-align--right.u-width-xx-small {{ program.avgRating | formatRating }}
                td.vui-text-align--right.u-width-medium {{ program.avgCpp | numberWithCommas | formatMoney }}
                td.u-width-medium {{ program.daypart }}
                td.u-width-medium {{ program.flightStartDate }}
                td.u-width-medium {{ program.flightEndDate }}
                td.u-width-medium {{ program.startTime }}
                td.u-width-medium {{ program.endTime }}
                td.vui-text-align--center.u-width-small {{ program.spotLength }}
              template(
                v-for = 'detail in program.details'
                v-if = 'program.details'
              )
                tr.detail(
                  v-show = 'program.expanded'
                )
                  td
                    .vui-grid
                      .vui-form-element__control.vui-m-right--x-small
                        label.vui-checkbox
                          input#checkbox-01(
                            checked = 'true'
                            name = 'options'
                            type = 'checkbox'
                          )
                          span.vui-checkbox--faux
                      span {{ detail.flightStartDate }} - {{ detail.flightEndDate }}
                  td.vui-text-align--right.u-width-medium {{ detail.avgRate | numberWithCommas | formatMoney }}
                  td.vui-text-align--right.u-width-xx-small {{ detail.avgRating | formatRating }}
                  td.vui-text-align--right.u-width-medium {{ detail.avgCpp | numberWithCommas | formatMoney }}
                  td.u-width-medium
                  td.u-width-medium
                  td.u-width-medium
                  td.u-width-medium
                  td.u-width-medium
                  td.vui-text-align--center.u-width-small
        p.vui-text-body--small
          sup.vui-m-right--xx-small 1
          span Nielsen source or data derived from Nielsen
</template>

<script>
  import moment from 'moment'
  import axios from '~plugins/axios'

  export default {
    data () {
      return {
        programs: [],
        expirationDate: new Date(moment().add(14, 'days').toISOString()),
        loading: false,
        loadingMessage: null,
        loadingMessages: [
          'Request sent...',
          'Matching inventory...',
          'Almost there, getting prices and ratings...',
          '...presenting your avails.'
        ],
        avail: {
          client: 'Piedmont Healthcare',
          product: 'HEA',
          estimate: '57',
          campaignName: "WASHI WVVV PIE-HEA-57 Q1'17",
          expirationDate: '06/07/16',
          startDate: '02/13/17',
          endDate: '03/26/17',
          grossMarketBudget: '140000',
          targetGrpGoal: '800',
          primaryTarget: 'A25-54'
        }
      }
    },

    methods: {
      fetchRequestedAvails () {
        axios.get('/requestedAvails')
          .then((response) => {
            this.programs = response.data
          })
          .catch((error) => {
            console.log(error)
          })
      },

      doSomething () {
        this.loadingMessage = ''
      },

      exportAvail () {
        require('downloadjs')('hello world', 'piedmont-healthcare-avail.xml', 'text/xml')
      },

      delay (ms) {
        var ctr
        var rej
        var p = new Promise(function (resolve, reject) {
          ctr = setTimeout(resolve, ms)
          rej = reject
        })
        p.cancel = function () {
          clearTimeout(ctr)
          rej(Error('Cancelled'))
        }
        return p
      }
    },

    beforeCreate () {
      this.$store.state.activeApp = 'buyers'
    },

    created () {
      this.fetchRequestedAvails()
    },

    mounted () {
      this.loading = true
      this.delay(0)
        .then(() => {
          this.loadingMessage = `Step 1 of 4: ${this.loadingMessages[0]}`
          return this.delay(1000)
        })
        .then(() => {
          this.loadingMessage = `Step 2 of 4: ${this.loadingMessages[1]}`
          return this.delay(1000)
        })
        .then(() => {
          this.loadingMessage = `Step 3 of 4: ${this.loadingMessages[2]}`
          return this.delay(1000)
        })
        .then(() => {
          this.loadingMessage = `Step 4 of 4: ${this.loadingMessages[3]}`
          return this.delay(1000)
        })
        .then(() => {
          this.loading = false
        })
    }
  }
</script>
