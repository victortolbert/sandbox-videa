<template lang="pug">
  v-select(
    v-bind:options = '[ "foo", "bar" ]'
    v-model = 'selected'
    multiple
  )
</template>

<script>
  import vSelect from 'vue-select'

  export default {
    name: 'vue-select-example',

    metaInfo: {
      title: 'Example / Vue Select',
    },

    components: { vSelect },

    data () {
      return {
        selected: null
      }
    },

    beforeCreate () {
      this.$store.state.activeApp = 'sandbox'
    }
  }
</script>
