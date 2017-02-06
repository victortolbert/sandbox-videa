<template lang="pug">
  vue-instant#styles(
    @input = 'changed'
    v-bind:suggestion-attribute = 'suggestionAttribute'
    v-bind:suggestions = 'suggestions'
    v-model = 'value'
  )
</template>

<script>
  import axios from '~plugins/axios'

  export default {
    name: 'app',
    data () {
      return {
        value: '',
        suggestionAttribute: 'original_title',
        suggestions: []
      }
    },
    methods: {
      changed: function () {
        var that = this
        this.suggestions = []
        axios.get('https://api.themoviedb.org/3/search/movie?api_key=342d3061b70d2747a1e159ae9a7e9a36&query=' + this.value)
          .then(function (response) {
            response.data.results.forEach(function (a) {
              that.suggestions.push(a)
            })
          })
      }
    }
  }
</script>
