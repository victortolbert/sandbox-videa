<template lang="pug">
  .vui-container.vui-grid.vui-grid--align-spread.vui-grid-vertical-align-center
    form.vui-form--compound.vui-align-middle
      fieldset.vui-form--compound
        .form-element__group

          .vui-form-element__row(
            style = 'margin-bottom: 1rem'
          )
            .vui-form-element.vui-size--1-of-3.vui-align-bottom
              label.vui-form-element__label(
                for = 'input-01'
                style = 'color: white'
              ) Email
              .vui-form-element__control.vui-input-has-icon.vui-input-has-icon--left
                vui-icon.vui-input__icon(
                  name = 'envelope'
                  style = 'color: hsla(214, 66%, 34%, 1)'
                )
                input.vui-input(
                  v-model = '$store.state.user.email'
                  placeholder = 'john.doe@email.com'
                  style = 'min-width: 14rem'
                  type = 'email'
                )

            //- .vui-form-element.vui-align-bottom.vui-m-right--x-small
            //-   label.vui-form-element__label(for='password', style='color: white') Password
            //-   .vui-form-element__control.vui-input-has-icon.vui-input-has-icon--left
            //-     svg.vui-icon.vui-input__icon(aria-hidden='true', style='color: hsla(214, 66%, 34%, 1)')
            //-       use(xmlns:xlink='http://www.w3.org/1999/xlink', xlink:href='/assets/icons.svg#icon-lock')
            //-     input#password.vui-input.ng-pristine.ng-empty.ng-invalid.ng-invalid-required.ng-touched(tabindex='2', type='password', name='password', ng-model='login.model.password', placeholder='', required='', style='min-width: 16rem')
            //-   .vui-form-element__help.vui-grid.vui-grid--align-spread
            //-     span.ng-scope(ng-repeat='link in login.model.additionalLinks')
            //-       a.ng-binding(style='color:#fff;padding:0;border: none', ng-href='account/forgot-password?signin=4391e0603de5336ea11255918d775112', href='account/forgot-password?signin=4391e0603de5336ea11255918d775112') Forgot Password
            //-     span
            //-       input#remember-me.input-group__checkbox.vui-align-middle.ng-pristine.ng-untouched.ng-valid.ng-empty(type='checkbox', ng-model='login.model.rememberMe', name='rememberMe', value='true')
            //-       label.input-group__label--inline(for='remember-me') Remember Me


            .vui-form-element.vui-size--1-of-3.vui-align-bottom
              label.vui-form-element__label(
                for = 'input-01'
                style = 'color: white'
              ) Password
              .vui-form-element__control.vui-input-has-icon.vui-input-has-icon--left
                vui-icon.vui-input__icon(
                  name = 'lock'
                  style = 'color: hsla(214, 66%, 34%, 1)'
                )

                input.vui-input(
                  placeholder = 'Password'
                  style = 'min-width: 14rem'
                  type = 'password'
                )
            .vui-form-element.vui-size--1-of-3.vui-align-bottom
              button.vui-button.vui-button--secondary.vui-m-right--x-small(
                @click.prevent = 'login'
              ) Login
</template>

<script>
  export default {
    methods: {
      login () {
        if (this.$store.state.user.email.toLowerCase().includes('sell')) {
          this.$store.state.hasError = false
          this.$store.state.user.name = 'Seller User'
          // From some method in one of your Vue components
          this.$store.state.activeApp = 'sellers'
          this.$router.push({
            name: 'sellers-order-management-pending-orders'
          })
        }
        else if (this.$store.state.user.email.toLowerCase().includes('buy')) {
          this.$store.state.hasError = false
          this.$store.state.user.name = 'Buyer User'
          this.$store.state.activeApp = 'buyers'
          this.$router.push({
            name: 'buyers-avails-request'
          })
        }
        else if (this.$store.state.user.email.toLowerCase().includes('ex')) {
          this.$store.state.hasError = false
          this.$store.state.user.name = 'Example User'
          this.$store.state.activeApp = 'examples'
          this.$router.push({
            name: 'examples'
          })
        }
        else if (this.$store.state.user.email.toLowerCase().includes('tic')) {
          this.$store.state.hasError = false
          this.$store.state.user.name = 'Tickets User'
          this.$store.state.activeApp = 'tickets'
          this.$router.push({
            name: 'tickets'
          })
        }
        else if (this.$store.state.user.email.toLowerCase().includes('rep')) {
          this.$store.state.hasError = false
          this.$store.state.user.name = 'Rep User'
          this.$store.state.activeApp = 'sellers'
          this.$router.push({
            name: 'sellers-order-management-pending-orders'
          })
        }
        else {
          this.$store.state.hasError = true
        }

        this.$cookie.set('user', this.$store.state.user.name, 1)

        // // To get the value of a cookie use
        // this.$cookie.get('test');

        // // To delete a cookie use
        // this.$cookie.delete('test');
      }
    }
  }
</script>
