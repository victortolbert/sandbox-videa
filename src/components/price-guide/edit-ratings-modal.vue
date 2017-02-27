<template lang="pug">
  vui-modal(size='large')
    .modal-header.vui-m-bottom--large
      h3.vui-text-heading--medium.vui-grid.vui-grid--align-spread
        span Edit Rating
        a.vui-text-align--right(@click.prevent = '$emit("close")')
          vui-icon(name='close')
    .modal-body
      .ng-scope(ng-if='ratingType.rating')
        h2.vui-text-heading--large Skew and Factor
        p.vui-text--longform.vui-m-bottom--large
          | Use the Edit Ratings window to skew ratings by household, apply a positive or negative factor, or edit ratings individually. To view ratings rationale click here.
        .vui-grid.vui-grid--pull-padded.vui-grid--align-spread.vui-m-bottom--large.ng-scope(ng-if='ratingType.rating')
          .vui-col--padded
            .vui-form-element
              label.vui-form-element__label(for='hhRating') HH Rating
            .vui-form--inline
              .vui-form-element
                .vui-form-element__control
                  input#hhRating.vui-input.u-width-medium.ng-pristine.ng-untouched.ng-valid-min.ng-valid-max.ng-valid-pattern.ng-not-empty.ng-valid.ng-valid-required(type='number', data-ng-disabled='isRepUser', name='hhRating', data-ng-model='programRatings.householdRating', ng-pattern='/^[0-9]+(\.[0-9])?$/', pv-decimal='{nullable: true, scale:1,formatRaw: true}', required='', min='0.1', max='70', step='0.1')
              .vui-form-element
                .vui-form-element__control
                  // ngIf: !isRepUser
                  input#btnApplySkew.vui-button.vui-button--brand.ng-scope(type='button', ng-if='!isRepUser', value='Apply Skew', data-ng-click='applySkewOnClick()', data-ng-disabled='ratingForProgram.hhRating.$invalid')
                  // end ngIf: !isRepUser
          .vui-col--padded
            .vui-form-element
              label.vui-form-element__label(for='ratingFactor') Factor
            .vui-form--inline
              .vui-form-element
                .vui-form-element__control
                  input#ratingFactor.vui-input.vui-p-right--none.ng-pristine.ng-untouched.ng-empty.ng-valid-min.ng-valid-max.ng-invalid.ng-invalid-required(type='number', data-ng-disabled='isRepUser', name='ratingFactor', data-ng-model='$parent.$parent.factor', pv-decimal='{nullable: true}', required='', min='0.01', max='5.00', step='0.01')
              .vui-form-element
                .vui-form-element__control
                  // ngIf: !isRepUser
                  input#btnApplyFactor.vui-button.vui-button--brand.ng-scope(type='button', ng-if='!isRepUser', value='Apply Factor', data-ng-click='applyFactorOnClick()', data-ng-disabled='ratingForProgram.ratingFactor.$invalid', disabled='disabled')
                  // end ngIf: !isRepUser
      .vui-grid.vui-grid--align-spread.vui-p-around--small(style='background-color: white')
        .vui-media
          .vui-media__body
            p.vui-align-middle
              span.vui-m-right--xx-small Station Rate
              span.vui-text-heading--medium  ${{ context.station.rate }}

      .vui-scrollable--x.vui-m-bottom--large(style='height: 20rem; overflow-x: hidden; overflow-y: scroll')

        table.vui-table.vui-no-row-hover
          thead
            tr
              th Demo
              th.u-width-medium Station Rating
              th.u-width-small
                | CPP
                sup 1
              th.u-width-small
                | Premium CPP
                sup 1
              th.u-width-medium Videa Rating
              th.u-width-small
                | CPP
                sup 1

          tbody
            tr(
              v-bind:class = '(index % 2 === 0) ? "vui-highlight" : ""'
              v-for = '(demo, index) in context.station.demos',
            )
              td {{ demo.name }}
              td
                input.vui-input.vui-text-align--right(
                  v-bind:value = 'demo.rating | formatRating'
                  v-model = 'demo.rating'
                )
              td.vui-text-align--right
                cpp(
                  v-bind:rate = 'context.station.rate'
                  v-bind:rating = 'demo.rating'
                )
              td.vui-text-align--right
                cpp(
                  v-bind:rate = 'context.station.premium.rate'
                  v-bind:rating = 'demo.rating'
                )
              td.vui-text-align--right {{ demo.rating | formatRating }}
              td.vui-text-align--right
                cpp(
                  v-bind:rate = 'context.station.rate'
                  v-bind:rating = 'demo.rating'
                )

      .vui-grid.vui-grid--align-end
        button.vui-button.vui-button--neutral.vui-m-right--x-small(@click.prevent='$emit("close")') Cancel
        button.vui-button.vui-button--brand(@click.prevent='saveEditedRatings(context)') Save
</template>

<script>
  import { EventBus } from '~plugins/event-bus'

  export default {
    props: {
      show: Boolean,
      heading: String,
      data: Object,
      context: Object,
    },

    data () {
      return {
        comment: '',
        reps: [
          {
            name: 'Adamy, John',
            office: 'New York, NY',
            checked: false
          },
          {
            name: 'Admire, Tony',
            office: 'Austin, TX',
            checked: false
          },
          {
            name: 'Akens, Phil',
            office: 'New York, NY',
            checked: false
          },
          {
            name: 'Aden, Michael',
            office: 'Chicago, IL',
            checked: false
          },
          {
            name: 'Adel, Joe',
            office: 'Atlanta, GA',
            checked: false
          }
        ]
      }
    },

    methods: {
      saveEditedRatings (context) {
        this.$emit('close')
      }
    }
    // mounted () {
    //   EventBus.listen('display-edit-ratings-modal', (context) => {
    //     this.show = true
    //     this.context = context
    //   })
    // }
  }
</script>
