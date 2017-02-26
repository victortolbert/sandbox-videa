<template lang="pug">
  #app
    #offCanvas.off-canvas.position-right(data-off-canvas='')
      ul.sidebar-menu(data-close='offCanvas')
        li
          router-link(to='/', exact='') Home

    .off-canvas-content(data-off-canvas-content='')
      .top-bar
        ul.menu.expanded
          li.logo
            router-link(to='/') Vue-Foundation
          li
            a.button.small.menu-button(data-toggle='offCanvas') Menu
      .content-wrapper
        //- router-view
</template>

<style lang="sass" scoped>
  @import '~assets/foundation/styles/app'
  @import '~assets/foundation/styles/global'

  // Chrome Reset
  a:focus
    outline: none

  .logo, .logo a
    color: $white
    font-weight: normal

  li a.menu-button
    border-radius: 20px
    padding-left: 1.5rem
    padding-right: 1.5rem
    font-weight: 600
    text-transform: uppercase
    display: inline-block
    float: right

  .content-wrapper
    padding: 0.75rem 0

  .sidebar-menu
    @include menu-base()
    @include menu-direction(vertical)
    a
      color: $secondary-color
      font-weight: normal

    a.active
      font-weight: 600
      color: $primary-color


</style>
