<template>
  <div
    v-bind:style = "{width:width + 'px'}"
    v-bind:class = "{ left:placement === 'left', right:placement === 'right' }"
    v-show = "show"
    v-bind:transition = "this.placement === 'left' ? 'slideleft' : 'slideright'"
    class="aside"
  >
    <div class="aside-dialog">
      <div class="aside-content">
        <div class="aside-header vui-grid vui-grid--align-spread">
          <h4 class="aside-title vui-text-heading--medium">
            {{ header }}
          </h4>
<!--           <button type="button" class="vui-button vui-button--neutral" @click='close'>
            <span>&times;</span>
          </button> -->
        </div>
        <div class="aside-body">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import EventListener from '~utils/event-listener'
  import getScrollBarWidth from '~utils/get-scroll-bar-width'

  export default {
    props: {
      show: {
        type: Boolean,
        require: true
      },
      placement: {
        type: String,
        default: 'right'
      },
      header: {
        type: String
      },
      width: {
        type: Number,
        default: '320'
      }
    },

    watch: {
      show (val) {
        let backdrop = document.createElement('div')
        const body = document.body
        backdrop.className = 'aside-backdrop'
        // const scrollBarWidth = getScrollBarWidth()
        const scrollBarWidth = 0
        if (val) {
          body.appendChild(backdrop)
          body.classList.add('modal-open')
          if (scrollBarWidth !== 0) {
            body.style.paddingRight = scrollBarWidth + 'px'
          }
          // request property that requires layout to force a layout
          // var x = backdrop.clientHeight
          backdrop.className += ' in'
          this._clickEvent = EventListener.listen(backdrop, 'click', this.close)
        } else {
          if (this._clickEvent) this._clickEvent.remove()
          backdrop = document.querySelector('.aside-backdrop')
          backdrop.className = 'aside-backdrop'
          setTimeout(() => {
            body.classList.remove('modal-open')
            body.style.paddingRight = '0'
            body.removeChild(backdrop)
          }, 300)
        }
      }
    },

    methods: {
      close () {
        this.show = false
      }
    }
  }
</script>

<style lang="stylus">
  @import '~assets/design-tokens'

  .aside-open
    transition transform 0.3s

  .aside-open.has-push-right
    transform translateX(-300px)

  .aside
    position fixed
    top 10rem
    // bottom 10rem
    z-index $z-index-overlay
    overflow auto
    background $white

  .aside.left
    left 0
    right auto

  .aside.right
    left auto
    right 0

  .slideleft-enter
    animation slideleft-in 0.3s

  .slideleft-leave
    animation slideleft-out 0.3s

  @keyframes slideleft-in
    0%
      transform translateX(-100%)
      opacity 0

    100%
      transform translateX(0)
      opacity 1

  @keyframes slideleft-out
    0%
      transform translateX(0)
      opacity 1

    100%
      transform translateX(-100%)
      opacity 0


  .slideright-enter
    animation slideright-in 0.3s

  .slideright-leave
    animation slideright-out 0.3s

  @keyframes slideright-in
    0%
      transform translateX(100%)
      opacity 0

    100%
      transform translateX(0)
      opacity 1


  @keyframes slideright-out
    0%
      transform translateX(0)
      opacity 1

    100%
      transform translateX(100%)
      opacity 0


  .aside:focus
    outline 0

  @media (max-width: 991px)
    .aside
      min-width 15rem


  .aside.left
    right auto
    left 0

  .aside.right
    right 0
    left auto

  .aside .aside-dialog .aside-header
    border-bottom 1px solid $vui-color-brand-7
    min-height $spacing-medium
    padding $spacing-medium $spacing-medium
    background $vui-color-brand-11
    color $white

  .aside .aside-dialog .aside-header .close
    margin-right: -$spacing-x-small
    padding $spacing-xx-small $spacing-x-small
    color $white
    font-size $font-size-x-large
    opacity 0.8

  .aside .aside-dialog .aside-body
    position relative
    padding $spacing-xx-large

  .aside .aside-dialog .aside-footer
    padding $spacing-medium
    text-align right
    // border-top 1px solid $vui-color-brand-7

  .aside .aside-dialog .aside-footer .btn+.btn
    margin-left $spacing-xx-small
    margin-bottom 0

  .aside .aside-dialog .aside-footer .btn-group .btn+.btn
    margin-left -1px

  .aside .aside-dialog .aside-footer .btn-block+.btn-block
    margin-left 0

  .aside-backdrop
    position fixed
    top 0
    right 0
    bottom 0
    left 0
    z-index $z-index-dialog
    opacity 0
    transition opacity 0.3s ease
    background-color $black

  .aside-backdrop.in
    opacity 0.5

</style>
