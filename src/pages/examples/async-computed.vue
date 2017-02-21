<template>
    <!-- myResolvedValue will become "*Fancy* Resolved Value!" after one second. -->
    <h2>
      <br>Resolve Property: {{ myResolvedValue }}
      <br>Resolve w/ Default: {{ myDefaultResolvedValue }}
      <br>Async Property: {{ myAsyncResolvedValue }}
    </h2>
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
      this.$store.state.activeApp = 'sandbox'
    }
  }
</script>
