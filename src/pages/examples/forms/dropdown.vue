<template lang="pug">
  dropdown(v-bind:data="options", v-bind:cbChanged="changed")
</template>

<script type="text/babel">
  export default {
    data () {
      return {
        options: [{
          label: 'Coffee',
          value: 1
        }, {
          label: 'Energy Drink',
          value: 2
        }, {
          label: 'Long testing night',
          value: 2
        }, {
          label: 'Long party!',
          value: 3
        }]
      }
    },
    methods: {
      //log the selected object
      changed (selected) {
        console.log(selected)
      }
    }
  }
</script>
