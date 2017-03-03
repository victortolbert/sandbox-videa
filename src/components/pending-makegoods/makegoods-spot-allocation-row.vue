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

<style lang="stylus">
  @import '~assets/variables'

  spot-allocation-width = 35px
  spot-allocation-height = 30px
  spotallocation-editable-height = 40px
  hiatus-color = #add8e6
  navigation-section-background-color = #51545D
  spot-item-color = white
  spot-item-border-color = #999
  spot-item-disabled = rgb(235, 235, 228)
  spot-allocation-cell-background-color = #D8E0E3

  .spot-allocation-cell
    background-color spot-allocation-cell-background-color !important
  .spot-allocation-cell > *, .spot-allocation-column > *
    display block
    height 100%
    .spot-allocation-row
      height 100%
      display flex
      flex-direction row
      justify-content flex-start
      align-items center
      & > div
        float left
      & > div:last-child
        right 2px
      .spot-allocation-nav-section
        width 24px
        height 100%
        position relative
        background-color navigation-section-background-color
        display inherit
        flex-direction inherit
        align-items inherit
      .spot-allocation-container
        overflow hidden
      .spot-allocation
        width 100%
        list-style none
        display flex
        padding 0
        margin 0
        position relative
        transition left 0.5s
        &.spot-allocation-headers
          & > li:last-child
            div
              border-right none
        & > li
          width auto
        li > div
          width spot-allocation-width
          text-align center
          border-right 2px solid spot-item-color
        li.hiatus-spot > div, li.hiatus-spot > div.spot-item-disabled
          background-color hiatus-color
          input
            background-color hiatus-color
        li > div.spot-item-disabled
          background-color spot-item-disabled
        li > div.editable-spot-value
          input
            border none
            height 100%
            text-align center
      .spot-allocation-data
        margin-left 24px
        li > div
          height spot-allocation-height
          border 1px solid spot-item-border-color
          margin-right 2px
          width 33px
          background-color spot-item-color
          overflow hidden
          white-space nowrap
          text-overflow ellipsis
          & > span
            line-height spot-allocation-height
            letter-spacing -0.03em
      &.has-quantity .table-row
        &.value
          height 0.625*spotallocation-editable-height
        &.quantity
          height 0.375*spotallocation-editable-height
          line-height 1.2
          text-decoration underline
          border none
          background spot-allocation-cell-background-color

  .spot-allocation-cell.editable-spot-allocation-cell
    .spot-allocation-data
      li > div
        height spotallocation-editable-height
        background-color transparent
        input
          text-align center
      li > div > span.text-underline
        line-height spotallocation-editable-height
        letter-spacing 0em
      li div.table-row span
        line-height 0
</style>

<style lang="stylus">
  /* Spot Allocation Column */
  .spot-allocation-column
    white-space normal !important
  .edit-spot-allocation input, .editable-spot-value input
    text-align center
    height 100%
    width 100%
  div.spot-item-disabled
    background-color rgb(235, 235, 228) !important
  th.spot-allocation-column,
  td.spot-allocation-cell
    padding 1px
  .spot-allocation-cell
    background-color #D8E0E3
  .spot-allocation-row > div
    float left
  .spot-allocation-row .spot-allocation-nav-section
    width 22px
    margin-top 7px
  .spot-allocation-row .spot-allocation-container
    overflow hidden
  .spot-allocation-row .spot-allocation
    display flex
    position relative
    width 100%
    padding 0
    margin 0
    list-style none
    transition left 0.5s
  .spot-allocation-row .spot-allocation > li
    width auto
  .spot-allocation-row .spot-allocation li > div
    width 35px
    text-align center
  .spot-allocation-row .spot-allocation li:not(:only-of-type) > div
    border-right 2px solid white
  .spot-allocation-row .spot-allocation-data
    margin-left 23px
  .spot-allocation-row .spot-allocation-data li > div
    width 33px
    height 30px
    border 1px solid silver
    margin-right 2px
    background-color #FFF
    font-size 0.7rem
  .spot-allocation-row .spot-allocation-data li > div span
    line-height 30px
  .spot-allocation-row .spot-allocation-data li > div span .highlight
    color #c5203e
  .left-icon
    background-image url('/static/shared/img/left-arrow.png')
  .button-icon
    display block
    width 100%
    height 21px
    padding 0
    margin 0
    background-repeat no-repeat
    background-position center
    cursor pointer
  .right-icon
    background-image url('/static/shared/img/right-arrow.png')
  .button-icon[disabled]
    opacity 0.5
</style>
