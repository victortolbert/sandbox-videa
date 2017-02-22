<template lang="pug">
  .videa-dropdown(
    v-bind:disabled = 'isDisabled'
    v-bind:style = '{ "width": styleBaseWidth, "height": styleBaseHeight }',
    style = 'width: 300px'
  )
    .dropdown(
      uib-dropdown = ''
      is-open = 'isOpen'
      v-bind:style = '{ "width" : styleInnerWidth }'
    )
      a.dropdown-toggle(
        uib-dropdown-toggle = ''
        aria-haspopup = 'true'
        aria-expanded = 'false'
      )
        div(
          v-bind:style = '{ "width" : styleDisplayDivWidth,"height" : styleDisplayDivHeight }'
        )
          span(
            style = 'border-left: none'
          ) Unknown
          vui-icon(
            name = 'angle-down'
            v-bind:style = '{ "margin-left" : styleDownIconLeftMargin }'
          )
      ul.uib-dropdown-menu.dropdown-menu(
        role = 'menu'
        v-bind:style = '{ "height" : styleDropDownHeight, "width" : styleDropDownWidth }'
      )
        li(
          @click = 'itemSelected(item)'
          v-for = 'item in items'
        )
          a(
            v-bind:class = '{ "selected": multiSelect === true && selectedItems.indexOf(item) != -1 }'
          )
            vui-icon(
              name = 'triangle-up'
              v-bind:style = '{ "left" : styleTriangleUpLeft }'
            )
            | {{ item.name }}
</template>

<script>
  export default {
    props: {
      isDisabled: {
        type: [Boolean, String],
        default: false
      },
      isOpen: {
        type: [Boolean, String],
        default: false
      },
      multiSelect: {
        type: [Boolean, String],
        default: true
      }
    },
    data () {
      return {
        items: [
          { name: 'Unknown' },
          { name: 'MG for Missed Spot' },
          { name: 'MG for Programing Change' },
          { name: 'MG for Live event schedule changes' },
          { name: 'MK to fix schedule' },
          { name: 'Technical difficulties' },
          { name: 'Wrong or no copy' },
          { name: 'Buyer request' }
        ],
        selectedItems: []
      }
    },
    computed: {
      styleBaseWidth () {},
      styleInnerWidth () {},
      styleDisplayDivWidth () {},
      styleDisplayDivHeight () {},
      styleDownIconLeftMargin () { return '0px' },
      styleDropDownHeight () {},
      styleDropDownWidth () { return '300px' },
      styleBaseHeight () {},
      styleTriangleUpLeft () {}
    },
    methods: {
      itemSelected (item) {}
    }
  }
</script>
