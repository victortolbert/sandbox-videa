<template lang="pug">
  slider(
    height='100vh'
    animation='fade'
    v-bind:interval='3000'
    v-bind:speed = '300'
    v-bind:auto = 'true'
    indicators = 'right'
    v-bind:control-btn = 'false'
  )
    slider-item(:style="{ backgroundColor: '#3f51b5' }")
      browser-window(url="http://example.com").
        browser window body

    slider-item(:style="{ backgroundColor: '#eee' }")
      editor-window(title="my window").
        editor window body

    slider-item(:style="{ backgroundColor: '#f44336' }")
      vui-device Content

</template>

<script>
  import { Slider, SliderItem } from 'vue-easy-slider'
  import { EditorWindow, BrowserWindow } from 'vue-windows'

  export default {
    components: { Slider, SliderItem, EditorWindow, BrowserWindow  },

    beforeCreate () {
      this.$store.state.activeApp = 'examples'
    }
  }
</script>
