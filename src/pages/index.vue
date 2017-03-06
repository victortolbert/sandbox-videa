<!-- node_modules/cq-prolyfill/cq-prolyfill.min.js -->
<!-- http://codepen.io/VictorTolbert/pen/rjYJGO?editors=1100 -->
<template lang="pug">
  .index
    //- div(v-bind:class="[activeClass, errorClass]")
    //- div(v-bind:class="[{ active: isActive }, errorClass]")
    //- svgicon(icon='vue' width='200' height='200' color='#42b983 #35495e')

    //- button(v-tooltip.top-center="msg") Hover me

    //- grid.vui-m-bottom--medium.vui-m-top--medium
    //-   grid-item(size='1/6')
    //-     .vui-box.vui-box--xx-small.vui-theme--default 🔥 ⇧  ⌥ ⌫ ⌦ ⌘
    //-   grid-item(size='1/6')
    //-     .vui-box.vui-box--xx-small.vui-theme--default ⇧  ⌥ ⌫ ⌦ ⌘
    //-   grid-item(size='1/6')
    //-     .vui-box.vui-box--xx-small.vui-theme--default ⇧  ⌥ ⌫ ⌦ ⌘
    //-   grid-item(size='1/6')
    //-     .vui-box.vui-box--xx-small.vui-theme--default ⇧  ⌥ ⌫ ⌦ ⌘
    //-   grid-item(size='1/6')
    //-     .vui-box.vui-box--xx-small.vui-theme--default ⇧  ⌥ ⌫ ⌦ ⌘
    //-   grid-item(size='1/6')
    //-     .vui-box.vui-box--xx-small.vui-theme--default ⇧  ⌥ ⌫ ⌦ ⌘

    //- .vui-box.vui-theme--default
    //-   .vui-x-small-show Show on 320px and up
    //-   .vui-x-small-show-only Show only between 320px and 479px
    //-   .vui-max-x-small-hide Hide on 319px and down
    //-   .vui-small-show Show on 480px and up
    //-   .vui-small-show-only Show only between 480px and 767px
    //-   .vui-max-small-hide Hide on 479px and down
    //-   .vui-medium-show Show on 768px and up
    //-   .vui-medium-show-only Show only between 768px and 1023px
    //-   .vui-max-medium-hide Hide on 1023px and down
    //-   .vui-large-show Show on 1024px and up
    //-   .vui-text-color--default Default -- The quick brown fox jumps over the lazy dog.
    //-   .vui-text-color--weak Weak -- The quick brown fox jumps over the lazy dog.
    //-   .vui-text-color--error Error -- The quick brown fox jumps over the lazy dog.
    //-   .vui-text-color--inverse(style='background: #570e1b') Inverse -- The quick brown fox jumps over the lazy dog.
    //-   .vui-text-color--inverse-weak Inverse Weak -- The quick brown fox jumps over the lazy dog.


    //- //- http://codepen.io/VictorTolbert/pen/rjYJGO?editors=1100
    //- .abs-center.container
    //-   .palette(v-for='i in 7', :class='`palette${i}`')
    //-     .color-square(v-for='j in 5', :class='`color${j}`')

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
    name: 'index',

    metaInfo: {
      title: 'Home',
    },

    data () {
      return {
        result: 'clipped text',
        firstName: 'Foo',
        lastName: 'Bar',
        activeClass: 'active',
        errorClass: 'text-danger'
      }
    },

    computed: {
      fullName: {
        // getter
        get () {
          return this.firstName + ' ' + this.lastName
        },
        // setter
        set (newValue) {
          var names = newValue.split(' ')
          this.firstName = names[0]
          this.lastName = names[names.length - 1]
        }
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

      // vm.$on() now supports registering the same callback for multiple events using

      // vm.$on([eventA, eventB], callback)

      // v-on new mouse event modifiers: .left, .right, .middle. Example: <button @click.right="onRightClick">
      //

      // Vue.delete now also supports Arrays: Vue.delete(arr, index)
    }
  }
</script>

<style lang="stylus">
  .tooltip
    display: none
    opacity: 0
    transition: opacity .15s
    pointer-events: none
    padding: 4px
    z-index: 10000
    .tooltip-content
      background: black
      color: white
      border-radius: 16px
      padding: 5px 10px 4px
    &.tooltip-open-transitionend
      display: block
    &.tooltip-after-open
      opacity: 1
</style>

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

<style lang="stylus" scoped>
  @import '~assets/variables';

  $color = color-cardinal; // Seed Color - Appears in the left-most palette in the center

  // --- GENERAL SETUP STUFF ---
  * { box-sizing: border-box; transition: 0.3s ease; }
  body { background-color: #222A36; transition: 0s; font-family: "Montserrat"; color: white; }
  .abs-center { position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); }

  // --- ELEMENT STYLING ---
  .container { display: flex; width: 350px; overflow: hidden; }
  .palette { flex: 1 1 0; height: 250px; }
  .palette:hover { flex-grow: 4; }
  .color-square { position: relative; height: 20%; width: 100%; }
  .color-square::before { position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); opacity: 0; transition: 0.3s ease; }
  .color-square:hover::before { opacity: 1; }

  // --- THE MAGIC ---
  for x in (1..7)
      for y in (1..5)
          if light(lighten(spin($color,((x - 1)*44deg)),((y - 3)*28%))) { .palette{x} .color{y}::before {color: black;} } // Makes ::before text black if the background is light
          .palette{x} .color{y} { background-color: lighten(spin($color,((x - 1)*44deg)),((y - 3)*28%)); }
          .palette{x} .color{y}::before { content: ''+lighten(spin($color,((x - 1)*44deg)),((y - 3)*28%)); }

</style>
