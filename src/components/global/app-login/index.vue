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
              ) Username
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
          this.$store.state.user.name = 'Seller User'
          this.$store.state.activeApp = 'sellers'
          this.$router.push({
            name: 'campaign-performance'
          })
        }
        // else if (this.$store.state.user.email.toLowerCase().includes('buy')) {
        //   this.$store.state.user.name = 'Buyer User'
        //   this.$store.state.activeApp = 'buyers'
        //   // this.$router.push({
        //   //   name: 'buyers-avails-request'
        //   // })
        // } else if (this.$store.state.user.email.toLowerCase().includes('rep')) {
        //   this.$store.state.user.name = 'Rep User'
        //   this.$store.state.activeApp = 'reps'
        //   // this.$router.push({
        //   //   name: 'reps-avails'
        //   // })
        // }
      }
    }
  }
</script>
