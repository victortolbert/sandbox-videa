<template lang="pug">
  .page.settings.user.vui-p-around--x-large.vui-tabs--scoped__content(
    v-show = "activeTab == '#user-settings'"
    aria-labelledby = 'tab-scoped-1__item'
    role = 'tabpanel'
  )
    //- validator(name='userSettingsValidation')
    form.vui-container--medium(
      @submit = 'onSubmit'
      novalidate
    )
      #resetPassword.vui-m-bottom--large
        h3.vui-text-heading--medium.vui-m-bottom--medium Reset Password
        .vui-grid.vui-grid--align-spread
          div.vui-p-right--xx-large.vui-size--12-of-12.vui-medium-size--1-of-2.vui-large-size--1-of-2
            p.vui-m-bottom--medium Please enter your old password and confirm your new password.
            // Old Password Fieldset
            fieldset.vui-form-element.vui-m-bottom--large
              label.vui-form-element__label(
                for = 'password'
              ) Old Password
              .vui-form-element__control
                input#password.vui-input(
                  @keyup.191 = 'onKeyup'
                  detect-blur = 'off'
                  detect-change = 'off'
                  name = 'password'
                  type = 'password'
                )

            // New Password Fieldset
            fieldset.vui-form-element.vui-m-bottom--large
              label.vui-form-element__label(
                for = 'newpassword'
              ) New Password
              .vui-form-element__control
                input#newpassword.vui-input(
                  v-model = 'newpassword'
                  detect-blur = 'off'
                  detect-change = 'off'
                  name = 'newpassword'
                  type = 'password'
                )

            // Confirm Password Fieldset
            fieldset.vui-form-element.vui-m-bottom--large
              label.vui-form-element__label(
                for = 'confirmpassword'
              ) Confirm Password:
              .vui-form-element__control
                input#confirmpassword.vui-input(
                  detect-blur = 'off'
                  detect-change = 'off'
                  name = 'confirmpassword'
                  type = 'password'
                )
          div.vui-size--12-of-12.vui-medium-size--1-of-2.vui-large-size--1-of-2
            h4.vui-text-heading--small.vui-m-bottom--medium Password Requirements
            .errors(
              v-if = "hasErrors"
            )
              //- validator-errors(:validation="$userSettingsValidation")
            ul
              //- li(v-if='$userSettingsValidation.password.minlength') At least 6 characters
              li Contains uppercase and lowercase letters
              li Contains a number
              li Contains at least 1 special character (!@$)
              li Does NOT include your email or username
      #contactInformation
        h3.vui-text-heading--medium.vui-m-bottom--medium Contact Information
        .vui-grid.vui-grid--align-spread
          div.vui-col.vui-size--12-of-12.vui-medium-size--1-of-2.vui-large-size--1-of-2.vui-p-right--xx-large
            h4.vui-text-heading--small.vui-m-bottom--medium Update Phone Number
            p.vui-m-bottom--medium Please enter your phone number and confirm your new phone number.
            // Phone Number
            vui-input.vui-m-bottom--large(
              id = 'phoneNumber'
              label = 'Phone Number (xxx-xxx-xxxx)'
              type = 'tel'
            )
            // New Phone Number
            vui-input.vui-m-bottom--large(
              id = 'newPhoneNumber'
              label = 'New Phone Number (xxx-xxx-xxxx)'
              type = 'tel'
            )
            // Confirm Phone Number
            vui-input.vui-m-bottom--large(
              id = 'confirmPhoneNumber'
              label = 'Confirm Phone Number'
              type = 'tel'
            )
            button.vui-button.vui-button--brand.vui-m-right--x-small(
              @click.prevent = ''
            ) Submit
            button.vui-button.vui-button--neutral(
              @click.prevent = ''
            ) Cancel
          div.vui-size--12-of-12.vui-medium-size--1-of-2.vui-large-size--1-of-2
            p
              | Please contact the administrator at 844-213-8543 or admin@videa.tv if you need to have your email updated.
</template>

<script>
  export default {
    beforeCreate () {
      this.$store.state.activeApp = 'sellers'
    },

    data () {
      return {
        newpassword: '',
        hasErrors: false,
        activeTab: '#user-settings'
      }
    },

    validators: {
      confirm (val) {
        return this.newpassword === val
      }
    },

    methods: {
      onKeyup () {
        alert('on keyup')
      },

      onSubmit (e) {
        // validate manually
        this.$validate(true)

        if (this.$validation.invalid) {
          e.preventDefault()
        }
      }
    }
  }
</script>
