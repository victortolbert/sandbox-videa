<template lang="pug">
  .hello
    h4 Child component in form
    div
      input(
        @input='onInput($event.target.value)'
        v-bind:value='value'
        v-validity
        placeholder='Message'
        type='text'
        )
    error-messages(v-bind:model='$v')
</template>

<script>
  import axios from '~plugins/axios'
  import moment from 'moment'
  import ErrorMessages from './error-messages'

  export default {
    name: 'hello',

    data: () => ({
      name: ''
    }),

    props: ['value'],

    validations: {
      name: ['required', 'minlength: 4']
    },

    methods: {
      onInput(value) {
        this.$emit('input', value)
      }
    },

    components: { ErrorMessages }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  @import '~assets/variables'

  .hello
    border 1px solid #ccc

  h1, h2
    font-weight normal

  ul
    list-style-type none
    padding 0

  li
    display inline-block
    margin 0 10px

  a
    color #42b983

</style>
