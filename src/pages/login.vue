<template lang="pug">
  .container
    .text-center.col-md-4.col-sm-offset-4
      // errors
      .text-red(v-if='response')
        p {{response}}
      // login form
      form.ui.form.loginForm(@submit.prevent='checkCreds')
        .input-group
          span.input-group-addon
            i.fa.fa-envelope
          input.form-control(name='username', placeholder='Username', type='text', v-model='username')
        .input-group
          span.input-group-addon
            i.fa.fa-lock
          input.form-control(name='password', placeholder='Password', type='password', v-model='password')
        button(type='submit', v-bind:class="'btn btn-primary btn-lg ' + loading") Submit
</template>

<script>
export default {
  name: 'Login',
  data (router) {
    return {
      section: 'Login',
      loading: '',
      username: '',
      password: '',
      response: ''
    }
  },

  methods: {
    checkCreds () {
      //  Change submit button
      var self = this
      var store = this.$store
      this.toggleLoading()
      this.resetResponse()
      store.commit('TOGGLE_LOADING')
      //  Login
      this.$parent.callAPI('POST', '/login', {
        username: this.username, password: this.password
      }).then(function (response) {
        store.commit('TOGGLE_LOADING')
        if (response.data) {
          var data = response.data
          if (data.error) {
            if (data.error.name) { //  Object from LDAP at this point
              switch (data.error.name) {
                case 'InvalidCredentialsError' : self.response = 'Username/Password incorrect. Please try again.'; break
                default: self.response = data.error.name
              }
            } else {
              self.response = data.error
            }
          } else {
            //  success. Let's load up the dashboard
            if (data.user) {
              store.commit('SET_USER', data.user)
              var token = 'Bearer ' + data.token
              store.commit('SET_TOKEN', token)
              // Save to local storage as well
              if (window.localStorage) {
                window.localStorage.setItem('user', JSON.stringify(data.user))
                window.localStorage.setItem('token', token)
              }
              this.$router.push(data.redirect)
            }
          }
        } else {
          self.response = 'Did not receive a response. Please try again in a few minutes'
        }
        self.toggleLoading()
      }, function (response) {
        // error
        store.commit('TOGGLE_LOADING')
        console.log('Error', response)
        self.response = 'Server appears to be offline'
        self.toggleLoading()
      })
    },
    toggleLoading: function () {
      this.loading = (this.loading === '') ? 'loading' : ''
    },
    resetResponse: function () {
      this.response = ''
    }
  }
}
</script>
