<template lang="pug">
  .price-guide-parent
    ul
      li(
        v-bind:key = 'item.id'
        v-for = 'item in items'
      )
    .example(ref='source')
      btn(
        type="button"
        class="mix-any-class"
        size="large"
        look="primary"
        icon="emoji"
      ) I am BEM button!
    vui-title Price Guide

    p.vui-text-heading--label Videa Pricing was last updated on {{ lastUpdated }} at 08:30 AM
    p.vui-text-body--small ON THE BOOKS WAS LAST UPDATED ON FEBRUARY 13, 2017 AT  12:00 AM
    p.vui-text-longform.vui-m-bottom--medium Use the Price Guide to review your rates and to either accept the Videa rates or override the Videa rates. The price is set prior to avail in the price guide. If you accept the Videa rates, know that Videa updates the rates every Sunday.
    vui-panel
      // Form
      form.vui-grid.vui-grid--vertical-align-end(
        action = ''
      )

        // CPP | CPM Radio Fieldset
        fieldset.vui-form-element.vui-m-right--small
          legend.form-element__legend.vui-form-element__label Metric
          .vui-form-element__control.vui-grid
            // CPP Radio Input
            label.vui-radio(
              for = 'cpp'
            )
              input#cpp(
                v-model = 'cppOrCpm'
                name = 'cpp'
                type = 'radio'
                value = 'cpp'
              )
              span.vui-radio--faux.vui-m-right--xx-small
              span.vui-form-element__label CPP

            // CPM Radio Input
            label.vui-radio.vui-m-right--large(
              for = 'cpm'
            )
              input#cpm(
                v-model = 'cppOrCpm'
                name = 'cpm'
                type = 'radio'
                value = 'cpm'
              )
              span.vui-radio--faux.vui-m-right--xx-small
              span.vui-form-element__label CPM

        // Quarter Select Fieldset
        fieldset.vui-form-element.vui-m-right--small
          label.vui-form-element__label(
            for = ''
          ) Quarter
          .vui-form-element__control.vui-m-right--small
            .vui-select_container
              select.vui-select(
                v-model = 'selectedQuarter'
                id = ''
                name = ''
              )
                option(
                  v-for = 'quarter in quarters'
                ) {{ quarter }}

        // $0 Spots Checkbox Fieldset
        fieldset.vui-form-element.vui-m-right--small
          .vui-form-element__control(
            style = 'margin-top: -2rem'
          )
            label.vui-checkbox
              input#checkbox-01(
                name = 'options'
                type = 'checkbox'
              )
              span.vui-checkbox--faux
              span.vui-form-element__label $0 Spots

    #daypart-selector.vui-m-bottom--large
      h3.vui-text-heading--medium.vui-m-bottom--small Select Daypart
      button.vui-button.vui-button--neutral.vui-max-small-buttons--stretch(
        v-for = '(daypart, index) in dayparts'
        v-bind:class = 'selectedDaypart == daypart.id ? "vui-button--brand" : "vui-button--neutral"'
        @click.prevent = 'selectDaypart(daypart.id)',
        tag = 'button'
      ) {{ daypart.name }}

    h3.vui-text-heading--medium.vui-m-bottom--small {{ selectedDaypart | toTitleCase }} | {{ selectedQuarter }}

    // Market CPP
    .vui-grid.vui-grid--align-end
      form.vui-form--inline.vui-m-bottom--x-small(
        name='marketCppForm'
        v-bind:class = '$store.state.user.name == "Rep User" ? "vui-grid vui-grid--align-end" : ""'
      )
        // Market CPP Input Fieldset
        .vui-media
          .vui-media__body
            .vui-align-middle(
              v-if = '$store.state.user.name == "Rep User"'
            )

              fieldset.vui-form-element
                label.vui-form-element__label Market CPP

              fieldset.vui-form-element.u-width-large
                .vui-form-element__control
                  input.vui-input(
                    name='marketCppField'
                    maxlength='15'
                    v-bind:disabled = '$store.state.user.name !== "Rep User"'
                    v-model='$store.state.marketCpp'
                    required=''
                    style = 'width: 5rem'
                    type = 'text'
                )
            p.vui-align-middle(
              v-else
            )
              span.vui-m-right--xx-small Market CPP
              span.vui-text-heading--medium {{ $store.state.marketCpp | numberWithCommas | formatMoney }}

        // Update Market CPP Button Fieldset
        fieldset.vui-form-element(
          v-show = '$store.state.user.name == "Rep User"'
        )
          button.vui-button.vui-button--brand(
            @click.prevent = 'updateMarketCpp'
          ) Update

    // Add Program Modal | Manage Premium Clients
    .vui-box.vui-grid.vui-grid--align-spread.vui-grid--vertical-align-middle.vui-theme--default(
      v-show = '$store.state.activeApp == "sellers"'
    )

      //- a.vui-align-middle(@click.prevent='', href='#') View Previously Accepted Rates and Ratings

      .vui-grid.vui-hide
        .vui-align-middle.vui-m-right--xx-small Premium percent for daypart

        .vui-align-middle.vui-m-right--xx-small
          input#global-premium-percent.vui-align-middle.vui-input.vui-input--small.vui-text-align--center(
            v-model = '$store.state.globalPremiumPercent'
            v-show = 'editingPercent'
            style = 'width: 3.25rem'
          )
          span.vui-align-middle.vui-form-element__static(
            v-show = '!editingPercent'
          ) {{ $store.state.globalPremiumPercent }}
        .vui-align-middle.vui-m-right--small %

        .vui-align-middle
          a(
            @click.prevent = 'editingPercent = true'
            v-show = '!editingPercent'
            href = '#'
          )
            vui-icon(
              name = 'pencil'
            )
          a(
            @click.prevent = 'updateDayparts'
            v-show = 'editingPercent'
            href = '#'
          ) Update Dayparts

      span.vui-align-middle.vui-col--bump-left
        router-link.vui-m-right--medium(
          v-bind:to = '{ name: "settings-specials" }'
        )
          vui-icon.vui-align-middle(
            name = 'plus-circle'
          )
          span.vui-align-middle Add a Program

      a.vui-align-middle.vui-hide(
        @click.prevent = 'showPremiumClientsModal = true'
      )
          vui-icon.vui-align-middle(
            name='pencil'
          )
          span.vui-align-middle(
            name='edit'
          ) Edit Premium Advertisers

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
                colspan = '5'
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
              th.u-width-medium(
                style = 'min-width: 5rem'
              ) Rate
              th.u-width-small Accept #[br] Rate
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
              th.u-width-small Min
              th.u-width-small Max
              th.u-width-small AUR
              th.u-width-small LY AUR
              th.u-width-small Sell Out %

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
                    vui-icon.vui-icon--small.vui-align-middle.vui-m-right--x-small(
                      v-bind:name = "program.expanded ? 'caret-lower-right' : 'caret-right'"
                    )
                  .vui-align-middle
                    .program-name {{ program.name }}
                    span {{ program.time }}

              // Station -- Rate (Program)
              td.station.rate.vui-text-align--right(
                v-bind:style = '$store.state.user.name == "Rep User" ? "" : "padding-right: 1.5rem"'
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
                v-bind:style = '$store.state.user.name == "Rep User" ? "" : "padding-right: 1.5rem"'
              ) {{ Math.round(avg(program.months, 'station', 'premium_rate')) | numberWithCommas | formatMoney }}

              // Station Premium -- CPP (Program)
              td.station.premium.cpp.vui-text-align--right.vui-hide(
                v-show = 'cppOrCpm == "cpp"'
              ) {{ Math.round(averageMonthlyStationPremiumCpp(program.months)) | numberWithCommas | formatMoney }}

              // Station Premium -- CPM (Program)
              td.station.premium.cpm.vui-text-align--right.vui-hide(
                v-show = 'cppOrCpm == "cpm"'
              ) {{ Math.round(averageMonthlyStationPremiumCpm(program.months)) | numberWithCommas | formatMoney }}

              // Videa -- Rate (Program)
              td.videa.rate.vui-text-align--right.vui-highlight
                | {{ Math.round(avg(program.months, 'videa', 'rate')) | numberWithCommas | formatMoney }}

              // Videa -- Accept Videa Rate (Program)
              td.videa.accept-rate.vui-text-align--center.vui-highlight
                .vui-form-element
                  .vui-form-element__control
                    label.vui-checkbox
                      input.vui-input(
                        @change = 'acceptVideaRate(program)'
                        v-bind:disabled = '$store.state.user.name == "Rep User"'
                        v-bind:value = 'program.acceptRate'
                        v-model = 'program.acceptRate'
                        type = 'checkbox'
                      )
                      span.vui-checkbox--faux

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
              td.on-the-books.rate.min.vui-text-align--right
                | {{ Math.round(avg(program.months, 'onTheBooks', 'minRate')) | numberWithCommas | formatMoney }}
              td.on-the-books.rate.max.vui-text-align--right
                | {{ Math.round(avg(program.months, 'onTheBooks', 'maxRate')) | numberWithCommas | formatMoney }}

              // On The Books -- (Program)
              td.on-the-books.aur.vui-text-align--right
                | {{ Math.round(avg(program.months, 'onTheBooks', 'aur')) | numberWithCommas | formatMoney }}
              td.on-the-books.aur-ly.vui-text-align--right
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

                td.u-width-medium
                  input.vui-input.vui-text-align--right.u-width-medium(
                    ng-disabled = 'isRepUser || pgpt.allWeeksSelected(month)'
                    type = 'text'
                    number-format = ''
                    decimals = '0'
                    ng-model = 'month.stationRate.value'
                    ng-change = 'pgpt.detailRateChanged(month)'
                    maxlength = '10'
                    vui-select-on-focus = ''
                  )
                  button.vui-button.vui-button--can-be-focused.vui-button--icon-container(
                    title = 'Copy To Quarter'
                    aria-haspopup = 'true'
                    ng-click = 'pgpt.copyStationRate(program.details, month)'
                    ng-show = '!isRepUser && (!pgpt.allWeeksSelected(month)) && $index==0 '
                  )
                    vui-icon(name='copy')
                    span.vui-assistive-text Add weeks


                //- td.station.rate.vui-text-align--right(
                //-   v-bind:style = '$store.state.user.name == "Rep User" ? "" : ""'
                //- )
                //-   span(
                //-     v-show = '$store.state.user.name == "Rep User"'
                //-   ) {{ month.station.rate | numberWithCommas | formatMoney }}
                //-   input.vui-input(
                //-     @click.prevent = 'selectContents'
                //-     @keypress = 'onKeypress'
                //-     v-bind:value = 'month.station.rate'
                //-     v-model = 'month.station.rate'
                //-     v-show = '$store.state.activeApp == "sellers"'
                //-     style = 'text-align: right'
                //-     type = 'text'
                //-   )

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
                  v-bind:style = '$store.state.user.name == "Rep User" ? "" : ""'
                )
                  input.vui-text-align--right.vui-input(
                    @input = 'month.station.premium.percent = setPremiumPercent(month.station.premium.rate, month.station.rate)'
                    v-show = '$store.state.activeApp == "sellers"'
                    v-bind:value = 'month.station.premium.rate'
                    v-model = 'month.station.premium.rate'
                  )
                  span(
                    v-show = '$store.state.user.name == "Rep User"'
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

                // Videa -- Rate (month)
                td.videa.rate.vui-text-align--right.vui-highlight
                  | {{ month.videa.rate | numberWithCommas | formatMoney }}

                // Videa -- Accept Videa Rate (month)
                td.videa.accept-rate.vui-text-align--center.vui-highlight
                  .vui-form-element
                    .vui-form-element__control
                      label.vui-checkbox
                        input.vui-input(
                          @change = 'acceptVideaRate(month)'
                          v-bind:checked = 'month.station.rate == month.videa.rate'
                          v-bind:disabled = '$store.state.user.name == "Rep User"'
                          v-bind:value = 'month.acceptRate'
                          v-model = 'month.acceptRate'
                          type = 'checkbox'
                        )
                        span.vui-checkbox--faux

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
                td.on-the-books.rate.min.vui-text-align--right
                  | {{ month.onTheBooks.minRate | numberWithCommas | formatMoney }}
                td.on-the-books.rate.max.vui-text-align--right
                  | {{ month.onTheBooks.maxRate | numberWithCommas | formatMoney }}

                // On The Books -- (month)
                td.on-the-books.aur.vui-text-align--right
                  | {{ month.onTheBooks.aur | numberWithCommas | formatMoney }}
                td.on-the-books.aur-ly.vui-text-align--right
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
                  td.station.rate.u-width-medium(
                    v-bind:style = '$store.state.user.name == "Rep User" ? "" : ""'
                  )
                    input.vui-input.vui-text-align--right.u-width-medium(
                      @click.prevent = 'selectContents'
                      @keypress = 'onKeypress'
                      v-show = '$store.state.activeApp == "sellers"'
                      type = 'text'
                      v-model = 'week.station.rate'
                    )
                    span(
                      v-show = '$store.state.user.name == "Rep User"'
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
                    v-bind:style = '$store.state.user.name == "Rep User" ? "" : ""'
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
                      v-show = '$store.state.user.name == "Rep User"'
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

                  // Videa -- Rate (week)
                  td.videa.rate.vui-text-align--right.vui-highlight
                    | {{ week.videa.rate | numberWithCommas | formatMoney }}

                  // Videa -- Accept Videa Rate (week)
                  td.videa.accept-rate.vui-text-align--center.vui-highlight
                    .vui-form-element
                      .vui-form-element__control
                        label.vui-checkbox
                          input.vui-input(
                            @change = 'acceptVideaRate(week)'
                            v-bind:checked ='week.station.rate == week.videa.rate'
                            v-bind:disabled = '$store.state.user.name == "Rep User"'
                            v-bind:value = 'week.acceptRate'
                            v-model = 'week.acceptRate'
                            type = 'checkbox'
                          )
                          span.vui-checkbox--faux

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
                  td.on-the-books.rate.min.vui-text-align--right
                    | {{ week.onTheBooks.minRate | numberWithCommas | formatMoney }}
                  td.on-the-books.rate.max.vui-text-align--right
                    | {{ week.onTheBooks.maxRate | numberWithCommas | formatMoney }}

                  // On The Books -- (week)
                  td.on-the-books.aur.vui-text-align--right
                    | {{ week.onTheBooks.aur | numberWithCommas | formatMoney }}
                  td.on-the-books.aur-ly.vui-text-align--right
                    | {{ week.onTheBooks.lyAur | numberWithCommas | formatMoney }}

                  // On The Books -- (week)
                  td.on-the-books.sell-out-percent.vui-text-align--right
                    | {{ week.onTheBooks.sellOutPercent | decimalToPercent }}
      // Table Footer Flex Container
      .vui-grid.vui-grid--align-spread.vui-m-bottom--medium

        // Flex Item
        p.vui-text-body--small
          sup.vui-m-right--xx-small 1
          span Nielsen source or data derived from Nielsen

        // Flex Item
        div.vui-text-align--right(
          v-show = '$store.state.user.name !== "Rep User"'
        )

          // Accept Rates and Ratings Confirmation
          fieldset.vui-form-element.vui-align-middle.vui-m-bottom--small
            .vui-form-element__control
              label.vui-checkbox
                input.vui-input(
                  type = 'checkbox'
                  name = 'acceptedRatesAndRatings'
                  v-model = 'acceptedRatesAndRatings'
                )
                span.vui-form-element__label I have reviewed and accepted all rates and ratings
                span.vui-checkbox--faux

          // Submit Button
          fieldset.vui-form-element
            .vui-form-element__control
              button.vui-button.vui-button--brand(
                @click = 'submitted'
                v-bind:disabled = '!acceptedRatesAndRatings'
              ) Submit

      .vui-notify.vui-notify--alert.vui-theme--success(
        v-show = 'submitAccepted'
        role = 'alert'
      )
        h2 Your rates and ratings are now saved in the Videa platform

      premium-clients-modal(
        v-bind:account = 'account'
        v-show = 'showPremiumClientsModal'
        @close = 'showPremiumClientsModal = false'
      )
      edit-ratings-modal(
        v-bind:context = 'context'
        v-if='showEditRatingsModal'
        @close='showEditRatingsModal = false'
      )

      //- button(@click = 'showEditRatingsModal = true') show modal

      //- edit-ratings-modal(
      //-   v-bind:ratings = 'ratings'
      //-   v-on:close = 'showEditRatingsModal = false'
      //-   v-show = 'showEditRatingsModal'
      //- ) Inside the Modal main slot

      //- bootstrap-modal(
      //-   v-bind:ratings = 'ratings'
      //-   v-on:close = 'showEditRatingsModal = false'
      //-   v-show = 'showEditRatingsModal'
      //-   ref='theBootstrapModal'
      //- )
      //-   div(slot='title')
      //-     | Your title here
      //-   div(slot='body')
      //-     | Your body here
      //-   div(slot='footer')
      //-     | Your footer here


      //- add-program-modal(v-show = 'showAddProgramModal')

</template>

<script>
  import axios from '~plugins/axios'
  import { EventBus } from '~plugins/event-bus'

  import PremiumPercentDropdown from '~components/price-guide/apply-premium-percent-dropdown'
  import PremiumClientsModal from '~components/price-guide/premium-clients-modal'
  import EditRatingsModal from '~components/price-guide/edit-ratings-modal'
  // import EditRatingsModal from '~components/modal2'
  // import BootstrapModal from '~components/modal/bootstrap-modal'
  // import AddProgramModal from '~components/price-guide/add-program-modal'
  import AddWeekDropdown from '~components/common/add-week-dropdown'

  export default {
    name: 'price-guide',

    metaInfo: {
      title: 'Price Guide',
    },

    components: {
      PremiumPercentDropdown,
      PremiumClientsModal,
      // BootstrapModal,
      EditRatingsModal,
      AddWeekDropdown,
      // AddProgramModal
    },

    //- custom -- props/event pair 2.2  new behavior   `model:` component option
    //- This makes v-model use :myCustomProp and @myCustomEvent instead of :value and @input:
    // model: {
    //   prop: 'myCustomProp',
    //     event: 'myCustomEvent'
    // },
    // <!-- v-model version -->
    // <child-component v-model="binding"></child-component>
    // <!-- Translates to: -->
    // <child-component :myCustomProp="binding" @myCustomEvent="evt => { binding = evt }"></child-component>
    props: {
      ordersRoute: {
        type: String,
        default: 'sellers-orders'
      }
    },

    data () {
      return {
        context: {},
        priceGuide: {},
        selectedQuarter: '2017/Q2',
        quarters: [
          '2016/Q3',
          '2016/Q4',
          '2017/Q1',
          '2017/Q2'
        ],
        selected: 'early-morning',
        selectedDaypart: 'early-morning',
        dayparts: [
          { id: 'early-morning', name: 'Early Morning' },
          { id: 'daytime', name: 'Daytime' },
          { id: 'early-fringe', name: 'Early Fringe' },
          { id: 'early-news', name: 'Early News' },
          { id: 'prime-access', name: 'Prime Access' },
          { id: 'prime-specials', name: 'Prime/Specials' },
          { id: 'sports', name: 'Sports' },
          { id: 'late-news', name: 'Late News' },
          { id: 'late-fringe', name: 'Late Fringe' },
          { id: 'weekend', name: 'Weekend' },
          { id: 'overnight', name: 'Overnight' }
        ],
        acceptedRatesAndRatings: false,
        cppOrCpm: 'cpp',
        editingPercent: false,
        globalPercent: 0,
        lastUpdated: moment().format('MMMM DD, YYYY'),
        showAddProgramModal: false,
        showEditRatingsModal: false,
        showPremiumClientsModal: false,
        submitAccepted: false,
        heading: '',
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

    // computed: {
    //   ...inject({
    //     myBus: 'bus'
    //   })
    // },

    // computed: Object.assign(inject(['bus']), {
    //     // My computed properties...
    // }),

    methods: {
      fetchPriceGuide () {
        axios.get(`/priceGuide/early-morning`)
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

      selectDaypart (daypart) {
        this.selectedDaypart = daypart
        // console.log(daypart)
        let routeInfo = {
          name: this.routeName,
          params: {
            id: daypart
          }
        }
        this.$router.push(routeInfo)
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
        // alert('\n\nThe work is still in progress on the common Modal component...\n\n...might be ready today\n\n\n')
        this.showEditRatingsModal = true
        this.context = context
        EventBus.fire('display-edit-ratings-modal', context)
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

    watch: {
      '$route' (to, from) {
        this.id = to.params.id
      }
    },

    beforeCreate () {
      this.$store.state.activeApp = 'sellers'
    },

    created () {
      this.fetchPriceGuide()
    },

    mounted () {
      this.source = this.$refs.source.outerHTML
    }
    // mounted () {
    //   EventBus.listen('body-clicked', () => {
    //     this.showEditRatingsModal = false
    //   })
    // }
  }
</script>
