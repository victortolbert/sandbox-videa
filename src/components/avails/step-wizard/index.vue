<template lang="pug">
  ol.steps
    li.steps__item.steps__item--done.steps__item--first(
      v-bind:class = '{ "steps__item--active" : activeTab !== "market-competitive" }'
    )
      a.steps__link(
        @click.prevent = 'setActiveTab("market-competitive")'
        v-bind:class = '{ "done": activeTab == "market-competitive" }'
        style = 'cursor: pointer'
      ) Market Competitive
    li.steps__item.steps__item--done(
      v-bind:class = '{ "steps__item--active" : activeTab !== "buyer-ratings" }'
    )
      a.steps__link(
        @click.prevent = 'setActiveTab("buyer-ratings")'
        v-bind:class = '{ "done": activeTab == "buyer-ratings" }'
        style = 'cursor: pointer'
      ) Buyer Rating
    li.steps__item.steps__item--last(
      v-bind:class = '{ "steps__item--active" : activeTab !== "rates-and-ratings" }'
    )
      a.steps__link(
        @click.prevent = 'setActiveTab("rates-and-ratings")'
        v-bind:class = '{ "done": activeTab == "rates-and-ratings" }'
        style = 'cursor: pointer'
      ) Rates and Ratings
</template>

<script>
  export default {
    data () {
      return {
        activeTab: 'market-competitive'
      }
    },

    methods: {
      setActiveTab (tab) {
        this.activeTab = tab
      }
    }
  }
</script>

