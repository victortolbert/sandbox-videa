<template lang="pug">
  .carousel-3d-slide(
    v-bind:class = '{ "current": isCurrent }'
    v-bind:style = 'slideStyle'
    v-on:click = 'goTo'
  )
    slot
</template>

<script>
  export default {
    name: 'slide',

    props: {
      index: {
        type: Number
      }
    },

    data () {
      return {
        parent: this.$parent,
        styles: {}
      }
    },

    computed: {
      isCurrent () {
        return this.index === this.parent.currentIndex
      },

      slideStyle () {
        let styles = {}
        if (!this.isCurrent) {
          const rIndex = this.getSideIndex(this.parent.rightIndices)
          const lIndex = this.getSideIndex(this.parent.leftIndices)
          if (rIndex >= 0 || lIndex >= 0) {
            styles = rIndex >= 0 ? this.calculatePosition(rIndex, true) : this.calculatePosition(lIndex)
            styles.opacity = 1
            styles.visibility = 'visible'
          }
          if (this.parent.hasHiddenSlides) {
            if (this.matchIndex(this.parent.leftOutIndex)) {
              styles = this.calculatePosition(this.parent.leftIndices.length - 1)
            } else if (this.matchIndex(this.parent.rightOutIndex)) {
              styles = this.calculatePosition(this.parent.rightIndices.length - 1, true)
            }
          }
        }
        console.log(this.parent.slideHeight)
        return Object.assign(styles, {
          'border-width': this.parent.border + 'px',
          'width': this.parent.slideWidth + 'px',
          'height': this.parent.slideHeight + 'px',
          'transition': 'all ' + this.parent.animationSpeed + 'ms'
        })
      }
    },

    methods: {
      getSideIndex (array) {
        let index = -1
        array.forEach((pos, i) => {
          if (this.matchIndex(pos)) {
            index = i
          }
        })
        return index
      },

      matchIndex (index) {
        return (index >= 0) ? this.index === index : (this.parent.total + index) === this.index
      },

      calculatePosition (i, positive) {
        const leftRemain = (this.parent.space === 'auto')
          ? parseInt((i + 1) * (this.parent.width / 1.5), 10)
          : parseInt((i + 1) * (this.parent.space), 10)
        const transform = (positive)
          ? 'translateX(' + (leftRemain) + 'px) translateZ(-' + (this.parent.inverseScaling + ((i + 1) * 100)) + 'px) ' +
          'rotateY(-' + this.parent.perspective + 'deg)'
          : 'translateX(-' + (leftRemain) + 'px) translateZ(-' + (this.parent.inverseScaling + ((i + 1) * 100)) + 'px) ' +
          'rotateY(' + this.parent.perspective + 'deg)'
        const top = this.parent.space === 'auto' ? 0 : parseInt((i + 1) * (this.parent.space))
        return {
          transform: transform,
          top: top
        }
      },

      goTo () {
        if (this.parent.clickable === true) {
          this.parent.goFar(this.index)
        }
      }
    }
  }
</script>

<style lang="stylus">
  @import '~assets/variables'

  .carousel-3d-slide
    background-color #ccc
    background-size cover
    border-color #000
    border-color rgba(0, 0, 0, 0.4)
    border-radius 1px
    border-style solid
    box-sizing border-box
    display block
    margin 0
    opacity 0
    overflow hidden
    position absolute
    top 0
    visibility hidden

  .carousel-3d-slide img
    width 100%

  .carousel-3d-slide.current
    opacity 1 !important
    transform none !important
    visibility visible !important
</style>
