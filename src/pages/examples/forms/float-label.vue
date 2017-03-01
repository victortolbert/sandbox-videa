<template lang="pug">
  .float-label
    vui-title Floating Label Examples
    .vui-box.vui-theme--default.vui-m-bottom--large
      .vui-p-around--medium
        .vui-grid
          .vui-size--1-of-4.vui-form-element.vui-m-right--medium
            float-label
              input.vui-input(type='email', placeholder='Advertiser')
          .vui-size--1-of-4.vui-form-element.vui-m-right--medium
            float-label
              input.vui-input(type='text', placeholder='Agency')
          .vui-size--1-of-4.vui-form-element.vui-m-right--medium
            float-label
              input.vui-input(type='text', placeholder='Product')
          .vui-size--1-of-4.vui-form-element.vui-m-right--medium
            float-label
              input.vui-input(type='text', placeholder='Advertiser')

    vui-subtitle Customizable

    .vui-box.custom
      .vui-p-around--medium
        .vui-grid
          .vui-form-element.vui-m-right--medium
            float-label
              input.vui-input(type='text', placeholder='Advertiser')
          .vui-form-element.vui-m-right--medium
            float-label
              input.vui-input(type='text', placeholder='Agency')
          .vui-form-element.vui-m-right--medium
            float-label
              input.vui-input(type='text', placeholder='Product')
          .vui-form-element.vui-m-right--medium
            float-label
              input.vui-input(type='text', placeholder='Advertiser')
</template>

<style lang="stylus">
  @import '~assets/variables'
  .custom
    .vfl-label
      text-transform uppercase

    .vfl-label-on-input
      top -1em

    .vfl-label-on-focus
      color #ff851b

    .vfl-label + input
      padding-left 0
      font-size 100%
      border 0
      border-bottom 2px solid #aaa
      transition border 0.2s

    .vfl-label-on-focus + input
      border-bottom 2px solid #ff851b
</style>
