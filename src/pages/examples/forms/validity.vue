<template lang="pug">
  .example
    vui-title Form Validation
    grid
      grid-item(size='1/2')
        form(@submit.prevent='submitForm')
          vui-subtitle Example form
          input.vui-input(type='text', v-model='match.firstName', placeholder='First name', v-validity='')
          error-messages(:model='$v.match.firstName')
          input.vui-input(type='text', v-model='match.lastName', placeholder='Last name', v-validity='')
          error-messages(:model='$v.match.lastName')
          button.vui-button.vui-button--brand(type='submit') Submit
      grid-item(size='1/2')
        .vui-box.vui-theme--default
          h5 Validation state:
          pre.text-left $v: {{ $v }}
</template>

<script>
import ErrorMessages from './error-messages'
import PrismCode from '~components/prism-code'

export default {
  name: 'validity-example',
  data () {
    return {
      match: {
        firstName: null,
        lastName: null,
        message: '',
      },
      errorHtml: `<form>
  <input type="text" v-model="name">
  <ul>
    <li v-for="error in $v.name.$errors">
      {{ error.message }}
    </li>
  </ul>
</form>`,
      inputClasses: `<input type="text" v-model="name" v-validity>`,
      parentCustomComponent: `<!-- Parent component. -->
<input type="text" v-model="form.username">
<custom-password v-model="form.password"></custom-password>`,
      childCustomComponent: `<!-- custom-password child component -->
<input type="text" placeholder="Password" :value="value" @input="onInput($event.target.value)" v-validity>
<ul>
  <li v-for="error in $v.$errors">
    {{ error.message }}
  </li>
</ul>`
    }
  },
  computed: {
    something () {
      return ''
    }
  },
  methods: {
    submitForm() {
      this.$v.$validate().then(() => {
        if (this.$v.$valid) {
          console.log('valid!')
        } else {
          console.log('not valid!')
        }
      })
    }
  },
  mounted() {
    this.$v.$setErrors([{
      field: 'lastName',
      message: 'fail'
    }])
  },

  validations: {
    match: {
      firstName: ['required', 'minlength:4'],
      lastName: {
        required: {
          validate (val, options) {
            return !!(val)
          },
          message (field, options) {
            return 'last name is required!!!'
          }
        }
      },
      message: ['required'],
    }
  },

  components: {
    ErrorMessages,
    PrismCode
  }
}
</script>

<style lang="less" scoped>
  @import "~assets/less/prism";

  .error {
    color: red;
  }
  .text-left, pre {
    text-align: left;
  }
  form {
    border: 1px solid #bbb;
    padding: 10px;
  }

  input.touched.invalid {
    border: 1px solid red;
  }
  input.valid {
    border: 1px solid green;
  }
</style>
