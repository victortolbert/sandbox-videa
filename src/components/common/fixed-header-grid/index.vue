<style lang="stylus">
  @import '~assets/variables'

  .fixed-header-grid
    display flex
    flex-direction column
    position relative
    height 100%
    overflow hidden

    .fixed-header-grid-header,
    .fixed-footer-grid-footer
      z-index 1

    .fixed-header-grid-header
      overflow hidden
      flex 0 0 auto
      top 0

    .fixed-footer-grid-footer
      bottom 0

    .fixed-header-grid-body,
    .fixed-footer-grid-footer
      overflow auto
      flex 0 1 auto

    .fixed-header-footer-grid-body
      overflow-y auto
      overflow-x hidden
</style>
