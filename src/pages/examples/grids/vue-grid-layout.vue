<!-- https://github.com/jbaysolutions/vue-grid-layout -->
<template lang="pug">
  grid-layout(:layout='layout', :col-num='12', :row-height='30', :is-draggable='true', :is-resizable='true', :vertical-compact='true', :margin='[10, 10]', :use-css-transforms='true')
    grid-item(v-for='item in layout', :x='item.x', :y='item.y', :w='item.w', :h='item.h', :i='item.i')
      | {{item.i}}

</template>

<script>
  var testLayout = [
    {"x":0,"y":0,"w":2,"h":2,"i":"0"},
    {"x":2,"y":0,"w":2,"h":4,"i":"1"},
    {"x":4,"y":0,"w":2,"h":5,"i":"2"},
    {"x":6,"y":0,"w":2,"h":3,"i":"3"},
    {"x":8,"y":0,"w":2,"h":3,"i":"4"},
    {"x":10,"y":0,"w":2,"h":3,"i":"5"},
    {"x":0,"y":5,"w":2,"h":5,"i":"6"},
    {"x":2,"y":5,"w":2,"h":5,"i":"7"},
    {"x":4,"y":5,"w":2,"h":5,"i":"8"},
    {"x":6,"y":4,"w":2,"h":4,"i":"9"},
    {"x":8,"y":4,"w":2,"h":4,"i":"10"},
    {"x":10,"y":4,"w":2,"h":4,"i":"11"},
    {"x":0,"y":10,"w":2,"h":5,"i":"12"},
    {"x":2,"y":10,"w":2,"h":5,"i":"13"},
    {"x":4,"y":8,"w":2,"h":4,"i":"14"},
    {"x":6,"y":8,"w":2,"h":4,"i":"15"},
    {"x":8,"y":10,"w":2,"h":5,"i":"16"},
    {"x":10,"y":4,"w":2,"h":2,"i":"17"},
    {"x":0,"y":9,"w":2,"h":3,"i":"18"},
    {"x":2,"y":6,"w":2,"h":2,"i":"19"}
  ];

  import VueGridLayout from 'vue-grid-layout'

  var GridLayout = VueGridLayout.GridLayout
  var GridItem = VueGridLayout.GridItem

  export default {
    components: {
        GridLayout,
        GridItem,
    },

    data: () => ({
      layout: testLayout
    })

  }
</script>
