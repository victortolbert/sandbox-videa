<template lang="pug">
  .spot-allocation-row
    .spot-allocation-nav-section.pointer
      i.button-icon.left-icon(@click='scrollLeft', :disabled='!isLeftButtonEnabled')
    .spot-allocation-container(:style='{ "width": spotsWidthPixels }')
      ul.spot-allocation.spot-allocation-headers(:style="{'left': left + 'px'}")
        li(v-for='spot in spots')
          div
            span(v-bind:title='spot.week', v-html='spot.week')
    .spot-allocation-nav-section.pointer
      i.button-icon.right-icon(@click='scrollRight', :disabled='!isRightButtonEnabled')
</template>

<script>
  import moment from 'moment'

  export default {
    data () {
      return {
        dayFormat: 'dd',
        dayFormat: 'dd',
        left: -1,
        maximumSpotValue: 99,
        maxStepSize: 13,
        monthFormat: 'MMM',
        numberOfColumnsInSpotsToDisplay: 13,
        spotCellWidth: 35,
        spotsWidth: 0,
        spotsWidth: '455',
        stepWidth: 0,
        tableCellWidth: 0,
        titleDateFormat: 'MM/dd/yyyy',
        titleDateFormat: 'MM/dd/yyyy',
        totalButtonsWidth: 48,
        totalButtonsWidth: 48,
        totalSpotsCount: 0,
        totalWidth: 0,
        spots: [
          {
            week: moment().subtract(14, 'days').weekday(1).format('MMM<br>DD')
          },
          {
            week: moment().subtract(7, 'days').weekday(1).format('MMM<br>DD')
          },
          {
            week: moment().weekday(1).format('MMM<br>DD')
          },
          {
            week: moment().add(7, 'days').weekday(1).format('MMM<br>DD')
          },
          {
            week: moment().add(14, 'days').weekday(1).format('MMM<br>DD')
          },
          {
            week: moment().subtract(21, 'days').weekday(1).format('MMM<br>DD')
          },
          {
            week: moment().subtract(28, 'days').weekday(1).format('MMM<br>DD')
          },
          {
            week: moment().subtract(35, 'days').weekday(1).format('MMM<br>DD')
          },
          {
            week: moment().subtract(42, 'days').weekday(1).format('MMM<br>DD')
          },
          {
            week: moment().subtract(47, 'days').weekday(1).format('MMM<br>DD')
          },
          {
            week: moment().subtract(54, 'days').weekday(1).format('MMM<br>DD')
          },
          {
            week: moment().subtract(61, 'days').weekday(1).format('MMM<br>DD')
          },
          {
            week: moment().subtract(68, 'days').weekday(1).format('MMM<br>DD')
          }
        ]
      }
    },
    computed: {
      spotsWidthPixels () {
        return this.spotsWidth + 'px'
      }
    },
    methods: {
      scrollLeft () {
        if (!this.isLeftButtonEnabled()) {
          return
        }
        if ((this.left + this.stepWidth) > 0) {
          this.left -= this.left;
        } else {
          this.left += this.stepWidth;
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
  }
</script>
