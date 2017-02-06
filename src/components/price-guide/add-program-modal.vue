<template lang="pug">
  modal(
    v-bind:on-close = 'close'
    v-bind:show = 'show'
    size = 'large'
  )

    .modal-header.vui-m-bottom--large

      h3.vui-text-heading--medium Add Program

    .modal-body

      // Form
      form

        // Special Event | Available All Quarters Fieldset
        fieldset.vui-form-element.vui-m-bottom--large
          .vui-form-element__control.vui-grid.vui-grid--align-end
            label.vui-checkbox
              input(
                name = 'options'
                type = 'checkbox'
              )
              span.vui-checkbox--faux
              span.vui-form-element__label Special Event
            label.vui-checkbox
              input(
                type = 'checkbox'
                name = 'options'
                checked = 'true'
              )
              span.vui-checkbox--faux
              span.vui-form-element__label Available All Quarters

        // Program Name | Rate | Rating Fieldset Group
        fieldset.vui-form--compound.vui-m-bottom--large
          //- legend.form-element__legend.vui-form-element__label
          //-   b Program Name
          .form-element__group
            .vui-form-element__row
              .vui-size--1-of-2.vui-m-right--small
                label.vui-form-element__label(
                  for = ''
                ) Program Name
                input.vui-input.vui-input--small.vui-text-align--right(
                  type = 'text'
                )

              .vui-size--1-of-4.vui-m-right--small
                label.vui-form-element__label(
                  for = ''
                ) Rate
                input.vui-input.vui-input--small.vui-text-align--right(
                  type = 'text'
                )

              .vui-size--1-of-4
                label.vui-form-element__label(
                  for = ''
                ) Rating
                input.vui-input.vui-input--small(
                  type = 'text'
                )

        // Daypart Select Fieldset
        fieldset.vui-form-element.vui-m-bottom--large
          label.vui-form-element__label(
            for = 'select-daypart'
          ) Daypart
          .vui-form-element__control
            .vui-select_container
              select#select-daypart.vui-select
                option Early Fringe
                option Early Morning
                option Daytime
                option Early Fringe
                option Early News
                option Prime Access
                option Prime/Specials
                option Sports
                option Late News
                option Late Fringe
                option Weekend
                option Overnight

        hr

        // Start Date | End Date Fieldset Group
        fieldset.vui-form--compound.vui-m-bottom--small
          //- legend.form-element__legend.vui-form-element__label
          //-   b Date
          .form-element__group
            .vui-form-element__row
              .vui-form-element.vui-size--1-of-2
                label.vui-form-element__label(
                  for = 'from-date'
                ) Start Date
                datepicker#from-date(
                  v-bind:value = 'fromDate'
                  name = 'fromDate'
                )
              .vui-form-element.vui-size--1-of-2
                label.vui-form-element__label(
                  for = 'to-date'
                ) End Date
                datepicker#to-date(
                  v-bind:value = 'toDate'
                  name = 'toDate'
                )

        // Start Time | End Time Fieldset Group
        fieldset.vui-form--compound.vui-m-bottom--small
          //- legend.form-element__legend.vui-form-element__label
          //-   b Time
          .form-element__group
            .vui-form-element__row
              .vui-form-element.vui-size--1-of-2
                label.vui-form-element__label(
                  for = 'select-start-time'
                ) Start Time
                .vui-form-element__control
                  .vui-select_container
                    select#select-start-time.vui-select
                      option 12:00 AM
              .vui-form-element.vui-size--1-of-2
                label.vui-form-element__label(
                  for = 'select-end-time'
                ) End Time
                .vui-form-element__control
                  .vui-select_container
                    select#select-end-time.vui-select
                      option 12:00 AM

        // Day of the Week Range Fieldset Group
        fieldset.vui-form--compound.vui-m-bottom--large
          //- legend.form-element__legend.vui-form-element__label
          //-   b Program Days
          .form-element__group
            .vui-form-element__row
              .vui-form-element.vui-size--1-of-2
                label.vui-form-element__label(
                  for = 'select-beginning'
                ) Beginning
                .vui-form-element__control
                  .vui-select_container
                    select#select-beginning.vui-select
                      option ---
                      option(
                        v-bind:selected = 'true'
                      ) Monday
                      option Tuesday
                      option Wednesday
                      option Thursday
                      option Friday
                      option Saturday
                      option Sunday
              .vui-form-element.vui-size--1-of-2
                label.vui-form-element__label(
                  for = 'select-thru'
                ) Thru
                .vui-form-element__control
                  .vui-select_container
                    select#select-thru.vui-select
                      option ---
                      option Monday
                      option Tuesday
                      option Wednesday
                      option Thursday
                      option Friday
                      option Saturday
                      option Sunday

        // Save | Cancel Fieldset Group
        fieldset.vui-text-align--right
          button.vui-button.vui-button--brand.vui-m-right--x-small(
            @click.prevent = 'close'
          ) Save
          button.vui-button.vui-button--neutral(
            @click.prevent = 'close'
          ) Cancel
</template>

<script>
  export default {
    props: ['show'],

    data () {
      return {
        comment: '',
        fromDate: new Date(),
        toDate: new Date()
      }
    },

    methods: {
      close () {
        this.show = false
        this.comment = ''
      },

      postComment () {
        this.close()
      }
    }
  }
</script>
