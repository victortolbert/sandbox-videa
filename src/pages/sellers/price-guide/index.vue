<template lang="pug">
  .price-guide-parent
    vui-title Price Guide
    h2.vui-text-heading--label.vui-m-bottom--medium Videa Pricing was last updated on {{ lastUpdated }} at 08:30 AM
    vui-subtitle Use the Price Guide to review your rates and to either accept the Videa rates or override the Videa rates. The price is set prior to avail in the price guide. If you accept the Videa rates, know that Videa updates the rates every Sunday.
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

        // Submit Button Fieldset
        fieldset.vui-form-element
          button.vui-button.vui-button--brand.vui-m-right--x-small(
            @click.prevent = ''
          ) Submit

    #daypart-selector.vui-m-bottom--large
      h3.vui-text-heading--medium.vui-m-bottom--small Select Daypart
      button.vui-button.vui-button--neutral.vui-max-small-buttons--stretch(
        v-for = '(daypart, index) in dayparts'
        v-bind:class = 'selectedDaypart == daypart.id ? "vui-button--brand" : "vui-button--neutral"'
        @click.prevent = 'selectDaypart(daypart.id)',
        tag = 'button'
      ) {{ daypart.name }}

    h3.vui-text-heading--medium.vui-m-bottom--small {{ selectedDaypart | toTitleCase }} | Q1 2017 {{ selectedQuarter }}

    // Market CPP
    .vui-grid.vui-grid--align-end

      form.vui-form--inline.vui-m-bottom--x-small(
        v-bind:class = '$store.state.activeApp == "reps" ? "vui-grid vui-grid--align-end" : ""'
      )

        // Market CPP Input Fieldset
        .vui-media
          .vui-media__body
            .vui-align-middle(
              v-if = '$store.state.activeApp == "reps"'
            )
              span.vui-m-right--xx-small Market CPP
              input.vui-input.vui-m-right--xx-small(
                @click.prevent = ''
                v-model = '$store.state.marketCpp'
                style = 'width: 5rem'
                type = 'text'
              )
            p.vui-align-middle(
              v-else
            )
              span.vui-m-right--xx-small Market CPP
              span.vui-text-heading--medium {{ $store.state.marketCpp }}

        // Update Market CPP Button Fieldset
        fieldset.vui-form-element(
          v-show = '$store.state.activeApp == "reps"'
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

    router-view
</template>

<script>
  export default {
    props: {
      routeName: {
        type: String,
        default: 'sellers-price-guide-id'
      }
    },

    data () {
      return {
        selectedQuarter: '2017/Q1',
        quarters: [
          '2016/Q3',
          '2016/Q4',
          '2017/Q1',
          '2017/Q2'
        ],
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
        lastUpdated: null,
        selected: 'early-morning',
        showAddProgramModal: false,
        showEditRatingsModal: false,
        showPremiumClientsModal: false,
        submitAccepted: false
      }
    },

    methods: {
      submitted () {
        this.submitAccepted = true
        setTimeout(() => {
          this.submitAccepted = false
        }, 3000)
      },

      // selectDaypart (daypart) {
      //   alert(daypart)

      //   this.$store.state.selectedDaypart = daypart
      // },

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
      }
    },

    beforeCreate () {
      this.$store.state.activeApp = 'sellers'
    }
  }
</script>
