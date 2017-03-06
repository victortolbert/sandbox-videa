<template lang="pug">
  .example
    vui-title Range Slider
    range-slider(
      v-model = 'sliderValue'
      class = 'slider'
      max = '1000'
      min = '10'
      step = '10'
    )
</template>

<script>
import RangeSlider from 'vue-range-slider'
// you probably need to import built-in style
import 'vue-range-slider/dist/vue-range-slider.css'

export default {
  data () {
    return {
      sliderValue: 50
    }
  },

  components: { RangeSlider }
}
</script>

<style lang="sass" scoped>
  $slider-height: 20px
  $slider-width: 130px
  $rail-height: 4px
  $knob-size: 20px
  $rail-color: #e2e2e2
  $rail-fill-color: #21fb92
  $knob-color: #fff
  $knob-border: 1px solid #f5f5f5
  $knob-shadow: 1px 1px rgba(0, 0, 0, 0.2)

  .slider
    /* overwrite slider styles */
    width: 200px
</style>
