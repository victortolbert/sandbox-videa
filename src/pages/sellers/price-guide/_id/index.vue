<template lang="pug">
  .child
    .vui-scrollable--x.vui-m-bottom--small

      table.vui-table.vui-no-row-hover
        thead
          tr
            th(
              rowspan = '2'
            ) Program
            th(
              colspan = '3'
            ) Station
            th.vui-hide(
              colspan = '2'
            ) Station Premium
            th(
              colspan = '4'
            ) Videa
            th(
              colspan = '3'
            ) On the Books
          tr
            // Station
            th.u-width-large(
              style = 'min-width: 5rem; padding-left: 0.5rem'
            ) Rate
            th.u-width-medium.vui-text-align--center(
              v-show = 'cppOrCpm == "cpp"'
            ) A25-54 #[sup 1]
            th.u-width-medium(
              v-show = 'cppOrCpm == "cpp"'
            ) CPP #[sup 1]
            th.u-width-medium(
              v-show = 'cppOrCpm == "cpm"'
            ) Imp (000)
            th.u-width-medium(
              v-show = 'cppOrCpm == "cpm"'
            ) CPM #[sup 1]

            // Station Premium
            th.u-width-medium.vui-text-align--center.vui-hide %
            th.u-width-large.vui-hide(
              style = 'min-width: 6rem'
            ) Rate
            th.u-width-medium.vui-hide(
              v-show = 'cppOrCpm == "cpp"'
              style = 'min-width: 6rem; max-width: 6rem'
            ) CPP #[sup 1]
            th.u-width-medium.vui-hide(
              v-show='cppOrCpm == "cpm"'
            ) CPM #[sup 1]

            // Videa
            th.u-width-small Accept #[br] Rate
            th.u-width-medium(
              style = 'min-width: 5rem'
            ) Rate
            th.u-width-medium(
              v-show = 'cppOrCpm == "cpp"'
              style = 'min-width: 5rem'
            ) A25-54 #[sup 1]
            th.u-width-medium(
              v-show = 'cppOrCpm == "cpp"'
            ) CPP #[sup 1]
            th.u-width-medium(
              v-show = 'cppOrCpm == "cpm"'
            ) Imp (000)
            th.u-width-medium(
              v-show = 'cppOrCpm == "cpm"'
            ) CPM #[sup 1]

            // On the Books
            th.u-width-small Min/Max Rate
            th.u-width-small AUR/LY AUR
            th.u-width-small Sellout %

        // Programs
        tbody(
          v-for = 'program in priceGuide.programs'
          transition = 'item'
        )

          tr.program

            // Program
            td.name
              span.vui-grid
                a.vui-align-middle.vui-m-right--x-small(
                  @click.prevent = 'program.expanded = !program.expanded'
                  href = '#'
                )
                  vui-icon.vui-align-middle.vui-m-right--x-small(
                    v-bind:name = "program.expanded ? 'caret-lower-right' : 'caret-right'"
                  )
                .vui-align-middle
                  .program-name {{ program.name }}
                  span {{ program.time }}

            // Station -- Rate (Program)
            td.station.rate.vui-text-align--right(
              v-bind:style = '$store.state.activeApp == "reps" ? "" : "padding-right: 1.5rem"'
            ) {{ avg(program.months, 'station', 'rate').toFixed(0) | numberWithCommas | formatMoney }}


            // Station -- Rating (Program)
            td.station.rating.vui-text-align--right(
              v-show = 'cppOrCpm == "cpp"'
            ) {{ avg(program.months, 'station', 'rating') | formatRating }}

            // Station -- CPP (Program)
            td.station.cpp.vui-text-align--right(
              v-show = 'cppOrCpm == "cpp"'
            )
              cpp(
                v-bind:rate = 'avg(program.months, "station", "rate")'
                v-bind:rating = 'avg(program.months, "station", "rating")'
              )

            // Station -- Impressions (Program)
            td.station.impressions.vui-text-align--right(
              v-show = 'cppOrCpm == "cpm"'
            ) {{ Math.round(avg(program.months, 'station', 'impressions')) | formatRating }}

            // Station -- CPM (Program)
            td.station.cpm.vui-text-align--right(
              v-show = 'cppOrCpm == "cpm"'
            )
              cpm(
                v-bind:impressions = 'avg(program.months, "station", "impressions")'
                v-bind:rate = 'avg(program.months, "station", "rate")'
              )

            // Station Premium -- Percent (Program)
            td.station.premium.percent.vui-text-align--center.vui-hide
              | {{ avg(program.months, 'station', 'premium_percent').toFixed(0) }}

            // Station Premium -- Rate (Program)
            td.station.premium.rate.vui-text-align--right.vui-hide(
              v-bind:style = '$store.state.activeApp == "reps" ? "" : "padding-right: 1.5rem"'
            ) {{ Math.round(avg(program.months, 'station', 'premium_rate')) | numberWithCommas | formatMoney }}

            // Station Premium -- CPP (Program)
            td.station.premium.cpp.vui-text-align--right.vui-hide(
              v-show = 'cppOrCpm == "cpp"'
            ) {{ Math.round(averageMonthlyStationPremiumCpp(program.months)) | numberWithCommas | formatMoney }}

            // Station Premium -- CPM (Program)
            td.station.premium.cpm.vui-text-align--right.vui-hide(
              v-show = 'cppOrCpm == "cpm"'
            ) {{ Math.round(averageMonthlyStationPremiumCpm(program.months)) | numberWithCommas | formatMoney }}

            // Videa -- Accept Videa Rate (Program)
            td.videa.accept-rate.vui-text-align--center.vui-highlight
              .vui-form-element
                .vui-form-element__control
                  label.vui-checkbox
                    input.vui-input(
                      @change = 'acceptVideaRate(program)'
                      v-bind:disabled = '$store.state.activeApp == "reps"'
                      v-bind:value = 'program.acceptRate'
                      v-model = 'program.acceptRate'
                      type = 'checkbox'
                    )
                    span.vui-checkbox--faux

            // Videa -- Rate (Program)
            td.videa.rate.vui-text-align--right.vui-highlight
              | {{ Math.round(avg(program.months, 'videa', 'rate')) | numberWithCommas | formatMoney }}

            // Videa -- Rating (Program)
            td.videa.rating.vui-text-align--right.vui-highlight(
              v-show = 'cppOrCpm == "cpp"'
            ) {{ avg(program.months, 'videa', 'rating') | formatRating }}

            // Videa -- CPP (Program)
            td.videa.cpp.vui-text-align--right.vui-highlight(
              v-show = 'cppOrCpm == "cpp"'
            )
              cpp(
                v-bind:rate = 'avg(program.months, "videa", "rate")'
                v-bind:rating = 'avg(program.months, "videa", "rating")'
              )

            // Videa -- Impressions (Program)
            td.videa.impressions.vui-text-align--right.vui-highlight(
              v-show = 'cppOrCpm == "cpm"'
            ) {{ Math.round(avg(program.months, 'videa', 'impressions')) | formatRating }}

            // Videa -- CPM (Program)
            td.videa.cpm.vui-text-align--right.vui-highlight(
              v-show = 'cppOrCpm == "cpm"'
            ) {{ Math.round(averageMonthlyVideaCpm(program.months)) | numberWithCommas | formatMoney }}

            // On The Books -- (Program)
            td.on-the-books.rate.min-max.vui-text-align--right
              | {{ Math.round(avg(program.months, 'onTheBooks', 'minRate')) | numberWithCommas | formatMoney }}
              | /
              | {{ Math.round(avg(program.months, 'onTheBooks', 'maxRate')) | numberWithCommas | formatMoney }}

            // On The Books -- (Program)
            td.on-the-books.rate.vui-text-align--right
              | {{ Math.round(avg(program.months, 'onTheBooks', 'aur')) | numberWithCommas | formatMoney }}
              | /
              | {{ Math.round(avg(program.months, 'onTheBooks', 'lyAur')) | numberWithCommas | formatMoney }}

            // On The Books -- (Program)
            td.on-the-books.sell-out-percent.vui-text-align--right
              | {{ avg(program.months, 'onTheBooks', 'sellOutPercent') | decimalToPercent }}

          // Months
          template(
            v-for = 'month in program.months'
            v-if = 'program.months'
          )

            tr.month(
              v-bind:class = 'month.station.rate !== month.videa.rate ? "has-changed" : ""'
              v-show = 'program.expanded'
            )

              // Month
              td.name
                .vui-grid.vui-grid--align-spread
                  span.vui-align-middle(
                    style = 'font-weight: 500'
                  ) {{ month.month }}
                  add-week-dropdown.vui-align-middle.dropdown-left.vui-m-right--x-small(
                    text = 'icon'
                    v-bind:weeks = 'month.weeks'
                    v-bind:month = 'month'
                  )

              // Station -- Rate (month)
              td.station.rate.vui-text-align--right(
                v-bind:style = '$store.state.activeApp == "reps" ? "" : ""'
              )
                span(
                  v-show = '$store.state.activeApp == "reps"'
                ) {{ month.station.rate | numberWithCommas | formatMoney }}
                input.vui-input(
                  @click.prevent = 'selectContents'
                  @keypress = 'onKeypress'
                  v-bind:value = 'month.station.rate'
                  v-model = 'month.station.rate'
                  v-show = '$store.state.activeApp == "sellers"'
                  style = 'text-align: right'
                  type = 'text'
                )

              // Station -- Rating (month)
              td.station.rating.vui-text-align--right(
                v-show = 'cppOrCpm == "cpp"'
              )
                a(
                  @click.prevent = 'displayEditRatingsModal(month)'
                  href = '#'
                  style = 'text-decoration: underline'
                ) {{ month.station.rating | formatRating }}
                input.vui-text-align--right.vui-input(
                  @click.prevent = 'selectContents'
                  @keypress = 'onKeypress'
                  v-model = 'month.station.rating'
                  v-show = 'false'
                  type = 'text'
                )

              // Station -- CPP (month)
              td.station.cpp.vui-text-align--right(
                v-show = 'cppOrCpm == "cpp"'
              )
                cpp(
                  v-bind:rate = 'month.station.rate'
                  v-bind:rating = 'month.station.rating'
                )

              // Station -- Impressions (month) // TODO Add Monthly Station Impressions to Data
              td.station.impressions.vui-text-align--right(
                v-show = 'cppOrCpm == "cpm"'
              ) {{ month.videa.impressions | formatRating }}

              // Station -- CPM (month)
              td.station.cpm.vui-text-align--right(
                v-show = 'cppOrCpm == "cpm"'
              )
                cpm(
                  v-bind:impressions = 'month.station.impressions'
                  v-bind:rate = 'month.station.rate'
                )

              // Station Premium -- Percent (month) (Percent)
              td.station.premium.percent.vui-text-align--center.vui-hide
                //- .form-group
                //-   .input-group.vui-grid
                //-     input.vui-input.form-control(type='text', placeholder='Amount')
                //-     .input-group-addon %

                fieldset.vui-form-element
                  .vui-form-element__control.vui-input-icon
                    input.vui-input.vui-text-align--center(
                      @click.prevent = 'selectContents'
                      @input = 'month.station.premium.rate = setPremiumRate(month.station.rate, month.station.premium.percent)'
                      @keypress = 'onKeypress'
                      v-bind:value = 'month.station.premium.percent'
                      v-model = 'month.station.premium.percent'
                      v-show = '$store.state.activeApp == "sellers"'
                      number
                    )
                span(
                  v-show = '$store.state.activeApp !== "sellers"'
                ) {{ month.station.premium.percent }}

              // Station Premium -- Rate (month)
              td.station.premium.rate.vui-text-align--right.vui-hide(
                v-bind:style = '$store.state.activeApp == "reps" ? "" : ""'
              )
                input.vui-text-align--right.vui-input(
                  @input = 'month.station.premium.percent = setPremiumPercent(month.station.premium.rate, month.station.rate)'
                  v-show = '$store.state.activeApp == "sellers"'
                  v-bind:value = 'month.station.premium.rate'
                  v-model = 'month.station.premium.rate'
                )
                span(
                  v-show = '$store.state.activeApp == "reps"'
                ) {{ month.station.premium.rate | numberWithCommas | formatMoney }}

              // Station Premium -- CPP (month)
              td.station.premium.cpp.vui-text-align--right.vui-hide(
                v-show = 'cppOrCpm == "cpp"'
              )
                cpp(
                  v-bind:rate = 'month.station.premium.rate'
                  v-bind:rating = 'month.station.premium.rating'
                )

              // Station Premium -- CPM (month)
              td.station.premium.cpm.vui-text-align--right.vui-hide(
                v-show = 'cppOrCpm == "cpm"'
              )
                cpm(
                  v-bind:impressions='month.station.impressions'
                  v-bind:rate = 'month.station.premium.rate'
                )

              // Videa -- Accept Videa Rate (month)
              td.videa.accept-rate.vui-text-align--center.vui-highlight
                .vui-form-element
                  .vui-form-element__control
                    label.vui-checkbox
                      input.vui-input(
                        @change = 'acceptVideaRate(month)'
                        v-bind:checked = 'month.station.rate == month.videa.rate'
                        v-bind:disabled = '$store.state.activeApp == "reps"'
                        v-bind:value = 'month.acceptRate'
                        v-model = 'month.acceptRate'
                        type = 'checkbox'
                      )
                      span.vui-checkbox--faux

              // Videa -- Rate (month)
              td.videa.rate.vui-text-align--right.vui-highlight
                | {{ month.videa.rate | numberWithCommas | formatMoney }}

              // Videa -- Rating (month)
              td.videa.rating.vui-text-align--right.vui-highlight(
                v-show = 'cppOrCpm == "cpp"'
              ) {{ month.videa.rating | formatRating }}

              // Videa -- CPP (month)
              td.videa.cpp.vui-text-align--right.vui-highlight(
                v-show = 'cppOrCpm == "cpp"'
              )
                cpp(
                  v-bind:rate = 'month.videa.rate'
                  v-bind:rating = 'month.videa.rating'
                )

              // Videa -- Impressions (month)
              td.videa.impressions.vui-text-align--right.vui-highlight(
                v-show = 'cppOrCpm == "cpm"'
              ) {{ month.videa.impressions }}

              // Videa -- CPM (month)
              td.videa.cpm.vui-text-align--right.vui-highlight(
                v-show = 'cppOrCpm == "cpm"'
              )
                cpm(
                  v-bind:rate = 'month.videa.rate'
                  v-bind:impressions = 'month.videa.impressions'
                )

              // On The Books -- (month)
              td.on-the-books.rate.min-max.vui-text-align--right
                | {{ month.onTheBooks.minRate | numberWithCommas | formatMoney }}
                | /
                | {{ month.onTheBooks.maxRate | numberWithCommas | formatMoney }}

              // On The Books -- (month)
              td.on-the-books.rate.vui-text-align--right
                | {{ month.onTheBooks.aur | numberWithCommas | formatMoney }}
                | /
                |  {{ month.onTheBooks.lyAur | numberWithCommas | formatMoney }}

              // On The Books -- (month)
              td.on-the-books.sell-out-percent.vui-text-align--right
                | {{ month.onTheBooks.sellOutPercent | decimalToPercent }}

            // Weeks
            template(
              v-for = 'week in month.weeks'
              v-if = 'month.weeks'
            )

              tr.week(
                v-bind:class = '[ week.station.rate !== week.videa.rate ? "has-changed" : "", !week.expanded ? "vui-hide" : "" ]'
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
                    span.vui-align-middle Week of {{ week.week }}

                // Station -- Rate (week)
                td.station.rate.vui-text-align--right(
                  v-bind:style = '$store.state.activeApp == "reps" ? "" : ""'
                )
                  input.vui-input.vui-text-align--right(
                    @click.prevent = 'selectContents'
                    @keypress = 'onKeypress'
                    v-show = '$store.state.activeApp == "sellers"'
                    type = 'text'
                    v-model = 'week.station.rate'
                  )
                  span(
                    v-show = '$store.state.activeApp == "reps"'
                  ) {{ week.station.rate | numberWithCommas | formatMoney }}

                // Station -- Rating (week)
                td.station.rating.vui-text-align--right(
                  v-show = 'cppOrCpm == "cpp"'
                )
                  input.vui-input.vui-text-align--right(
                    @click.prevent = 'selectContents'
                    @keypress = 'onKeypress'
                    v-model = 'week.station.rating'
                    v-show = 'false'
                    type = 'text'
                  )
                  a(
                    @click.prevent = 'displayEditRatingsModal(week)'
                    href = '#'
                    style = 'text-decoration: underline'
                  ) {{ month.station.rating | formatRating }}

                // Station -- CPP (week)
                td.station.cpp.vui-text-align--right(
                  v-show = 'cppOrCpm == "cpp"'
                )
                  cpp(
                    v-bind:rate = 'week.station.rate'
                    v-bind:rating = 'week.station.rating'
                  )

                // Station -- Impressions (week) // TODO Add Weekly Station Impressions to Data
                td.station.impressions.vui-text-align--right(
                  v-show = 'cppOrCpm == "cpm"'
                ) {{ week.videa.impressions | formatRating }}

                // Station -- CPM (week)
                td.station.cpm.vui-text-align--right(
                  v-show = 'cppOrCpm == "cpm"'
                )
                  cpm(
                    v-bind:impressions = 'week.station.impressions'
                    v-bind:rate = 'week.station.rate'
                  )

                // Station Premium -- Percent (week)
                td.station.premium.percent.vui-text-align--center.vui-hide
                  input.vui-input.vui-text-align--center(
                    @click.prevent = 'selectContents'
                    @input = 'week.station.premium.rate = setPremiumRate(week.station.rate, week.station.premium.percent)'
                    @keypress = 'onKeypress'
                    v-bind:value = 'week.station.premium.percent'
                    v-model = 'week.station.premium.percent'
                    v-show = '$store.state.activeApp == "sellers"'
                    number
                  )
                  span(
                    v-show = '$store.state.activeApp !== "sellers"'
                  ) {{ week.station.premium.percent  }}

                // Station Premium -- Rate (week)
                td.station.premium.rate.vui-text-align--right.vui-hide(
                  v-bind:style = '$store.state.activeApp == "reps" ? "" : ""'
                )
                  input.vui-text-align--right.vui-input(
                    @click.prevent = 'selectContents'
                    @input = 'week.station.premium.percent = week.station.premium.rate / week.station.rate'
                    @keypress = 'onKeypress'
                    v-bind:value = 'Math.round(week.station.premium.rate)'
                    v-model = 'week.station.premium.rate'
                    v-show = '$store.state.activeApp == "sellers"'
                  )
                  span(
                    v-show = '$store.state.activeApp == "reps"'
                  ) {{ week.station.premium.rate | numberWithCommas | formatMoney }}

                // Station Premium -- CPP (week)
                td.station.premium.cpp.vui-text-align--right.vui-hide(
                  v-show = 'cppOrCpm == "cpp"'
                )
                  cpp(
                    v-bind:rate = 'week.station.premium.rate'
                    v-bind:rating = 'week.station.premium.rating'
                  )

                // Station Premium -- CPM (week)
                td.station.premium.cpm.vui-text-align--right.vui-hide(
                  v-show = 'cppOrCpm == "cpm"'
                )
                  cpm(
                    v-bind:impressions = 'week.station.impressions'
                    v-bind:rate = 'week.station.premium.rate'
                  )

                // Videa -- Accept Videa Rate (week)
                td.videa.accept-rate.vui-text-align--center.vui-highlight
                  .vui-form-element
                    .vui-form-element__control
                      label.vui-checkbox
                        input.vui-input(
                          @change = 'acceptVideaRate(week)'
                          v-bind:checked ='week.station.rate == week.videa.rate'
                          v-bind:disabled = '$store.state.activeApp == "reps"'
                          v-bind:value = 'week.acceptRate'
                          v-model = 'week.acceptRate'
                          type = 'checkbox'
                        )
                        span.vui-checkbox--faux

                // Videa -- Rate (week)
                td.videa.rate.vui-text-align--right.vui-highlight
                  | {{ week.videa.rate | numberWithCommas | formatMoney }}

                // Videa -- Rating (week)
                td.videa.rating.vui-text-align--right.vui-highlight(
                  v-show = 'cppOrCpm == "cpp"'
                ) {{ week.videa.rating | formatRating }}

                // Videa -- CPP (week)
                td.videa.cpp.vui-text-align--right.vui-highlight(
                  v-show = 'cppOrCpm == "cpp"'
                )
                  cpp(
                    v-bind:rate = 'week.videa.rate'
                    v-bind:rating = 'week.videa.rating'
                  )

                // Videa -- Impressions (week)
                td.videa.impressions.vui-text-align--right.vui-highlight(
                  v-show = 'cppOrCpm == "cpm"'
                ) {{week.videa.impressions}}

                // Videa -- CPM (week)
                td.videa.cpm.vui-text-align--right.vui-highlight(
                  v-show = 'cppOrCpm == "cpm"'
                )
                  cpm(
                    v-bind:impressions = 'week.videa.impressions'
                    v-bind:rate = 'week.videa.rate'
                  )

                // On The Books -- (week)
                td.on-the-books.rate.min-max.vui-text-align--right
                  | {{ week.onTheBooks.minRate | numberWithCommas | formatMoney }}
                  | /
                  | {{ week.onTheBooks.maxRate | numberWithCommas | formatMoney }}

                // On The Books -- (week)
                td.on-the-books.rate.vui-text-align--right
                  | {{ week.onTheBooks.aur | numberWithCommas | formatMoney }}
                  | /
                  | {{ week.onTheBooks.lyAur | numberWithCommas | formatMoney }}

                // On The Books -- (week)
                td.on-the-books.sell-out-percent.vui-text-align--right
                  | {{ week.onTheBooks.sellOutPercent | decimalToPercent }}
    //- // Table Footer Flex Container
    //- .vui-grid.vui-grid--align-spread.vui-m-bottom--medium

    //-   // Flex Item
    //-   p.vui-text-body--small
    //-     sup.vui-m-right--xx-small 1
    //-     span Nielsen source or data derived from Nielsen

    //-   // Flex Item
    //-   div.vui-text-align--right(
    //-     v-show = '$store.state.activeApp !== "reps"'
    //-   )

    //-     // Accept Rates and Ratings Confirmation
    //-     fieldset.vui-form-element.vui-align-middle.vui-m-bottom--small
    //-       .vui-form-element__control
    //-         label.vui-checkbox
    //-           input.vui-input(
    //-             type = 'checkbox'
    //-             name = 'acceptedRatesAndRatings'
    //-             v-model = 'acceptedRatesAndRatings'
    //-           )
    //-           span.vui-form-element__label I have reviewed and accepted all rates and ratings
    //-           span.vui-checkbox--faux

    //-     // Submit Button
    //-     fieldset.vui-form-element
    //-       .vui-form-element__control
    //-         button.vui-button.vui-button--brand(
    //-           @click = 'submitted'
    //-           v-bind:disabled = '!acceptedRatesAndRatings'
    //-         ) Submit

    //- .vui-notify.vui-notify--alert.vui-theme--success(
    //-   v-show = 'submitAccepted'
    //-   role = 'alert'
    //- )
    //-   button.vui-button.vui-button--icon-inverse.vui-notify__close
    //-     svg.vui-button__icon(
    //-       aria-hidden = 'true'
    //-     )
    //-       use(
    //-         xlink:href = 'assets/icons/utility-sprite/svg/symbols.svg#close'
    //-       )
    //-     span.vui-assistive-text Close
    //-   span.vui-assistive-text Success
    //-   h2
    //-     svg.vui-icon.icon-text-email.vui-icon--small.vui-m-right--x-small(
    //-       aria-hidden = 'true'
    //-     )
    //-       use(
    //-         xlink:href = 'assets/icons/custom-sprite/svg/symbols.svg#custom19'
    //-       )
    //-     | Your rates and ratings are now saved in the Videa platform

    premium-clients-modal(
      v-bind:account = 'account'
      v-bind:show = 'showPremiumClientsModal'
    )
    edit-ratings-modal(
      v-bind:data = 'context'
      v-bind:heading = 'heading'
      v-bind:show = 'showEditRatingsModal'
    )
    add-program-modal(
      v-bind:show = 'showAddProgramModal'
    )
</template>

<script>
  import axios from '~plugins/axios'
  import { EventBus } from '~plugins/event-bus'

  import PremiumPercentDropdown from '~components/price-guide/apply-premium-percent-dropdown'
  import PremiumClientsModal from '~components/price-guide/premium-clients-modal'
  import EditRatingsModal from '~components/price-guide/edit-ratings-modal'
  import AddProgramModal from '~components/price-guide/add-program-modal'
  import AddWeekDropdown from '~components/common/add-week-dropdown'

  export default {
    components: {
      PremiumPercentDropdown,
      PremiumClientsModal,
      EditRatingsModal,
      AddWeekDropdown,
      AddProgramModal
    },

    props: {
      ordersRoute: {
        type: String,
        default: 'sellers-orders'
      }
    },

    data () {
      return {
        priceGuide: {},
        // dayparts: [
        //   { id: 'early-morning', name: 'Early Morning' },
        //   { id: 'early-morning', name: 'Daytime' },
        //   { id: 'early-morning', name: 'Early Fringe' },
        //   { id: 'early-morning', name: 'Early News' },
        //   { id: 'early-morning', name: 'Prime Access' },
        //   { id: 'early-morning', name: 'Prime/Specials' },
        //   { id: 'early-morning', name: 'Sports' },
        //   { id: 'early-morning', name: 'Late News' },
        //   { id: 'early-morning', name: 'Late Fringe' },
        //   { id: 'early-morning', name: 'Weekend' },
        //   { id: 'early-morning', name: 'Overnight' }
        // ],
        context: {},
        heading: '',
        acceptedRatesAndRatings: false,
        cppOrCpm: 'cpp',
        selectedDaypart: {},
        editingPercent: false,
        globalPercent: 0,
        lastUpdated: null,
        selected: 'early-morning',
        showAddProgramModal: false,
        showEditRatingsModal: false,
        showPremiumClientsModal: false,
        submitAccepted: false,
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
        ],
        account: {
          clients: [
            {
              agency: 'Zone Group Advertising',
              advertiser: 'Papa John\'s Pizza',
              premium: true
            },
            {
              agency: 'Auto Advertising Partners',
              advertiser: 'Southeast Ford',
              premium: true
            },
            {
              agency: 'Vanthrop and Associates',
              advertiser: 'Community Loans, Inc.',
              premium: true
            },
            {
              agency: 'The Media Masters Group',
              advertiser: 'Metro Wireless',
              premium: true
            },
            {
              agency: 'Huges-Martin Agency',
              advertiser: 'Piedmont Healthcare',
              premium: false
            },
            {
              agency: 'Mullberry Way Group',
              advertiser: 'Sun Valley Bank',
              premium: true
            }
          ]
        }
      }
    },

    methods: {
      fetchPriceGuide (id) {
        axios.get(`/priceGuide/${id}`)
          .then((response) => {
            this.priceGuide = response.data
          })
          .catch((error) => {
            console.log(error)
          })
      },

      submitted () {
        this.submitAccepted = true
        setTimeout(() => {
          this.submitAccepted = false
        }, 3000)
      },

      selectContents (event) {
        event.target.select()
        // this.select()
      },

      onKeypress (event) {
        if ((event.which !== 46 || $(this).val().indexOf('.') !== -1) && (event.which < 48 || event.which > 57)) {
          event.preventDefault()
        }
      },

      slugify (str) {
        return str.toString().toLowerCase().trim()
          .replace(/\s+/g, '-')           // Replace spaces with -
          .replace(/&/g, '-and-')         // Replace & with 'and'
          .replace(/[^\w-]+/g, '')       // Remove all non-word chars
          .replace(/--+/g, '-')        // Replace multiple - with single -
      },

      updateMarketCpp (event) {
        // console.log('Updated')
      },

      setGlobalPremiumPercent (percent) {
        this.globalPercent = percent
      },

      selectDaypart (daypart) {
        // this.fetchPriceGuide(daypart)
        // this.selected = daypart
        this.$store.state.selectedDaypart = daypart

        // this.$router.push({
        //   name: this.routeName,
        //   query: {
        //     daypart: this.slugify(daypart)
        //   }
        // })
      },

      fetchDayparts () {
        axios.get('/dayparts')
          .then((response) => {
            this.dayparts = response.data
          }, (response) => {
            // error callback
          })
      },

      displayEditRatingsModal (context) {
        console.log(context)
        this.showEditRatingsModal = true
        this.context = context
        EventBus.fire('display-edit-ratings-modal', this.context)
      },

      highlightModifiedRow () {
        alert('highlight')
      },

      calculateCpp (rate, rating, markup = 0.0) {
        return (rate / rating) * (1 + markup)
      },

      calculateCpm (rate, impressions) {
        return rate / impressions
      },

      calculateRate (rate, markup = 0.0) {
        return rate * (1 + markup)
      },

      displayPremiumRate (rate, premiumPercent = 0) {
        return Math.round(rate * (1 + premiumPercent))
      },

      addPremium (rate, premium) {
        return rate * (1 + premium)
      },

      setPremiumPercent (newNum, origNum) {
        return Math.ceil((newNum - origNum) / origNum * 100)
      },

      setPremiumRate (number, percent) {
        let value = number * (1 + (percent / 100))
        return value.toFixed(0)
      },

      updateDayparts (event) {
        // var vm = this
        this.editingPercent = false
        // $('.percent input').each(function () {
        //   $(this).val(vm.$store.state.globalPremiumPercent)
        // })
      },

      avg (arr, group, measure) {
        // let weeks = arr[group][measure].pr
        let average = arr.reduce((prev, current) => {
          return prev + current[group][measure]
        }, 0) / arr.length

        return average
      },

      averageMonthlyStationPremiumCpp (months) {
        return months.reduce((total, month) => {
          return total + (month.station.premium.rate / month.station.premium.rating)
        }, 0) / months.length
      },

      averageMonthlyStationPremiumCpm (months) {
        return months.reduce((total, month) => {
          return total + (month.station.premium.rate / month.station.impressions)
        }, 0) / months.length
      },

      averageMonthlyVideaCpp (months) {
        return months.reduce((total, month) => {
          return total + (month.videa.rate / month.videa.rating)
        }, 0) / months.length
      },

      averageMonthlyVideaCpm (months) {
        return months.reduce((total, month) => {
          return total + (month.videa.rate / month.videa.impressions)
        }, 0) / months.length
      },

      getAverage (arr) {
        return arr.reduce((prev, curr) => {
          return prev + curr
        }) / arr.length
      },

      acceptVideaRate (context) {
        context.acceptVideaRate = true
        context.station.rate = context.videa.rate
      }
    },

    beforeCreate () {
      this.$store.state.activeApp = 'sellers'
    },

    created () {
      this.fetchPriceGuide(this.$route.params.id)
    }
  }
</script>
