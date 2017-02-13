<template lang="pug">
  vui-navigation(inline-template)
    nav.vui-site-navigation.navigation(:class='expandedClass', style='background-color: #1d4f90;')
      vui-navigation-handler(:telephone="'0800 800 800'")
      .vui-container.vui-grid.vui-grid--align-spread.vui-grid--vertical-align-center
      ul
        vui-dropdown-wrapper(:id='1', :label="'Order Management'", :is-opened='isOpened(1)')
          li
            a(href='#') Pending Orders
          li
            a(href='#') Pending Makegoods
          li
            a(href='#') Open Pre-Empts
          li
            a(href='#') Order Search
        vui-dropdown-wrapper(:id='2', :label="'Reporting'", :is-opened='isOpened(2)')
          li
            a(href='#') Account Performance
          li
            a(href='#') Program Revenue
          li
            a(href='#') Order Reporting
        vui-dropdown-wrapper(:id='3', :label="'Examples'", :is-opened='isOpened(3)')
          li
            a(href='#') Product number one
          li
            a(href='#') Product number two
        li
          a(href='#') Price Guide
        li
          a(href='#') Avails
        li
          a(href='#') Campaign Performance
</template>

<script>
  export default {
    data () {
      return {
        examples: require('~models/examples')
      }
    }

  }
</script>
