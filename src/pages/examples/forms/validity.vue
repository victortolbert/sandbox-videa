<template>
  <div id="app" class="validity-example">
    <div id="playground">
      <h2>Playground</h2>
      <p>Experiment with <code>vue-validity</code> here!</p>
      <form @submit.prevent="submitForm">
        <h3>Example form</h3>
        <input type="text" v-model="match.firstName" placeholder="First name" v-validity>
        <error-messages :model="$v.match.firstName"></error-messages>
        <input type="text" v-model="match.lastName" placeholder="Last name" v-validity>
        <error-messages :model="$v.match.lastName"></error-messages>
        <hello v-model="match.message"></hello>
        <button type="submit">Submit</button>
        <h5>Validation state:</h5>
        <pre class="text-left">$v: {{ $v }}</prism-code>
      </form>
    </div>
  </div>
</template>

<script>
import Hello from './hello'
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
    Hello,
    PrismCode
  }
}
</script>

<style lang="less" scoped>
  @import "~assets/less/prism";

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    font-size: 16px;
    max-width: 900px;
    margin: 30px auto;
    padding: 0 20px;
  }
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
  input {
    border-radius: 4px;
    padding: 5px;
    border: 1px solid #ccc;
    outline: 0;
    font-size: inherit;
  }
  input.touched.invalid {
    border: 1px solid red;
  }
  input.valid {
    border: 1px solid green;
  }
</style>
