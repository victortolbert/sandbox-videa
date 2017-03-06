<template lang="pug">
  .spot-allocation-row
    .spot-allocation-nav-section.pointer.vui-align-middle
      i.button-icon.left-icon(
        v-on:click = 'scrollLeft'
        v-bind:disabled = 'isLeftButtonEnabled'
      )
    .spot-allocation-container(v-bind:style='{ width: spotsWidth }')
      ul.spot-allocation.spot-allocation-headers(v:bind-style='{ left: left + "px" }')
        li(v-for='spot in spots')
          div
            span(v-bind:title='spot.weekName' v-html='spotWeekName') {{ spot.weekName }}
    .spot-allocation-nav-section.pointer
      i.button-icon.right-icon(
        v-bind:disabled ='!isRightButtonEnabled'
        v-on:click = 'scrollRight'
      )
</template>

<script>
  export default {
    props: {
      config: {
        type: Object,
        default () {
          return {
            numberOfColumnsInSpotsToDisplay: 1,
            spotCellWidth: 1
          }
        }
      }
    },

    data () {
      left: 0,
      spots: [
        { weekName: '06<br>27' },
        { weekName: '07<br>04' },
        { weekName: '07<br>11' },
        { weekName: '07<br>18' },
        { weekName: '07<br>25' },
        { weekName: '08<br>01' },
        { weekName: '08<br>08' },
        { weekName: '08<br>15' },
        { weekName: '08<br>22' },
        { weekName: '08<br>29' },
        { weekName: '09<br>05' },
        { weekName: '09<br>12' },
        { weekName: '09<br>19' }
      ],
      spotsWidth: '455px',
      stepWidth: 0,
      tableCellWidth: 0,
      totalSpotsCount: 0,
      totalWidth: 0
    }
  },

  computed: {
    maxStepSize () {
      return this.config.numberOfColumnsInSpotsToDisplay
    },

    spotCellWidth () {
      return this.config.spotCellWidth
    }
  },

  methods: {
    scrollLeft () {
      if (!this.isLeftButtonEnabled()) {
        return
      }
      if ((this.left + this.stepWidth) > 0) {
        this.left -= this.left
      } else {
        this.left += this.stepWidth
      }
    },

    scrollRight () {
      if (!this.isRightButtonEnabled()) {
        return
      }
      if (this.totalWidth + (this.left - (this.stepWidth - this.spotCellWidth)) < this.stepWidth) {
        this.left -= this.totalWidth + (this.left - this.stepWidth)
      } else {
        this.left -= this.stepWidth
      }
    },

    isLeftButtonEnabled () {
      return this.left < 0
    },

    isRightButtonEnabled () {
      return !(this.stepWidth - this.left >= this.totalWidth)
    }
  }
</script>
