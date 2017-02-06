<!-- https://jsfiddle.net/z11fe07p/231/ -->
<template lang="pug">
  .example.select
    button(
      v-on:click = 'setSearchResults'
    ) Search
    button(
      v-on:click = 'getVideo'
    ) Get Video
    select(
      v-show = 'searchResults.length'
      v-model = 'video'
    )
    option(
      v-for = 'option in searchResults'
      v-bind:value = 'option'
    ) {{ option.title }} by {{ option.owner }}
</template>

<script>
  export default {
    data () {
      return {
        searchResults: [],
        video: {}
      }
    },
    methods: {
      setSearchResults () {
        this.searchResults = [
          {
            title: 'Foobar',
            owner: 'Hendry'
          },
          {
            title: 'BazBaz',
            owner: 'Something'
          }
        ]
      },
      getVideo () {
        alert(JSON.stringify(this.video))
      }
    }
  }
</script>
