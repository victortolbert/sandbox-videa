<template lang="pug">
  .example
    vui-title Async Computed Example

    .vui-box
      // myResolvedValue will become "*Fancy* Resolved Value!" after one second.
      h3 Resolve Property: {{ myResolvedValue }}
    .vui-box
      h3 Resolve w/ Default: {{ myDefaultResolvedValue }}
    .vui-box
      h3 Async Property: {{ myAsyncResolvedValue }}
</template>

<script>
  function fancinessComesLater () {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve('*Fancy* Resolved Value!'), 3000)
    })
  }

  export default {
    name: 'async-computed-example',

    metaInfo: {
      title: 'Example / Async Computed',
    },

    asyncComputed: {
      myResolvedValue () {
        return new Promise((resolve, reject) => {
          setTimeout(() => resolve('*Fancy* Resolved Value!'), 6000)
        })
      },

      async myAsyncResolvedValue() {
        return await fancinessComesLater()
      },

      myDefaultResolvedValue: {
        get () {
          return new Promise((resolve, reject) => {
            setTimeout(() => resolve('*Fancy* Resolved Value!'), 4000)
          })
        },

        default: 'No fanciness'
      }
    },

    beforeCreate () {
      this.$store.state.activeApp = 'examples'
    }
  }
</script>
