<!-- node_modules/cq-prolyfill/cq-prolyfill.min.js -->
<template lang="pug">
  .home
    //- input#slider(
    //-   max = '100'
    //-   min = '0'
    //-   type = 'range'
    //-   value = '50'
    //- )

    //- button#inbox(
    //-   class = 'vui-button vui-button--brand'
    //-   data-new-items = '8'
    //-   type = 'button'
    //- ) Inbox

    //- button#foo(
    //-   v-bind:data-clipboard-text = 'result'
    //-   v-clipboard
    //-   class = 'vui-button vui-button--secondary'
    //- ) Bar


    //- .wrapper
    //-   .container(
    //-     v-dragula = 'colOne'
    //-     drake = 'first'
    //-   )
    //-     div(
    //-       v-bind:click = 'onClick'
    //-       v-for = 'text in colOne'
    //-     ) {{ text }} [click me]

    //-   .container(
    //-     v-dragula = 'colTwo'
    //-     drake = 'first'
    //-   )
    //-     div(
    //-       v-for = 'text in colTwo'
    //-     ) {{ text }}
</template>

<script>
  export default {
    name: 'Home',

    metaInfo: {
      title: 'Home',
    },

    data () {
      return {
        result: 'clipped text'
      }
    },

    beforeCreate () {
      this.$store.state.activeApp = 'login'
    },

    mounted () {
      // document.querySelector('.element').addEventListener('click', function() {
      //   // Do something that changes the size of container elements
      //   // ...
      //   window.cqApi.reevaluate(false, function() {
      //     // Do something after all elements were updated
      //   })
      // })
    }
  }
</script>

<style>
  .element:container(width >= 100px) {
    /* Styles for .element if its container is at least 100px wide */
  }
  .element:container(height > 100px < 200px) {
    /* Styles for .element if its container is between 100px and 200px high */
  }
  .element:container(text-align = right) {
    /* Styles for .element if its container has a right text-align */
  }
</style>
