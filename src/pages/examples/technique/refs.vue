<template lang="pug">
  input(
    type='card'
    v-bind:stripe='stripe'
    v-bind:value='value'
    v-bind:options='options'
    @blur='$emit("blur")'
    @focus='$emit("focus")'
    @empty='$emit("empty")'
    @complete='$emit("complete")'
    @brand='$emit("brand", $event)'
    @error='$emit("error", $event)'
    @value='$emit("value", $event)'
  )
</template>

<script>
  import axios from '~plugins/axios'
  import moment from 'moment'

  export default {
    name: 'refs-example',

    metaInfo: { title: 'refs-example' },

    props: { text: String },

    data: () => ({ foo: 'bar' }),

    computed: { },

    watch: {
      status(newVal, oldVal) { }
    },

    methods: {
      blur () { this.$refs.element.blur() },
      focus () { this.$refs.element.focus() },
      update (options) { this.$refs.element.update(options) }
    },

    beforeCreate () { },

    created () { },

    beforeMount () { },

    mounted () { },

    updated () { },

    beforeDestroy () { },

    destroyed () { },

    components: {  }
  }
</script>
