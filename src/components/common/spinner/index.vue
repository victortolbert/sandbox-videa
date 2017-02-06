<template lang="pug">
  .v-spinner
    .v-bounce.v-bounce1(
      v-bind:style = 'spinnerBasicStyle'
    )
      .v-bounce.v-bounce2(
        v-bind:style = 'spinnerStyle'
      )
      .v-bounce.v-bounce3(
        v-bind:style = 'spinnerStyle'
      )
</template>

<script>
  export default {
    name: 'BounceLoader',
    props: {
      color: {
        type: String,
        default: '#5dc596'
      },
      size: {
        type: String,
        default: '60px'
      },
      margin: {
        type: String,
        default: '2px'
      },
      radius: {
        type: String,
        default: '100%'
      }
    },

    data () {
      return {
        spinnerStyle: {
          backgroundColor: this.color,
          height: this.size,
          width: this.size,
          borderRadius: this.radius,
          opacity: 0.6,
          position: 'absolute',
          top: 0,
          left: 0
        }
      }
    },

    computed: {
      spinnerBasicStyle () {
        return {
          height: this.size,
          width: this.size,
          position: 'relative'
        }
      }
    }
  }
</script>
