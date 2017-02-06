<template lang="pug">
  ul
    li(
      @click = 'selected = item'
      v-bind:class = '{ selected: selected == item }'
      v-bind:style = '[ baseStyles, overrideStyles ]'
      v-for = 'item in menuItems'
    ) {{ item }}
</template>

<script>
  export default {
    data () {
      return {
        selected: 'Home',
        menuItems: [ 'Home', 'About', 'Contact' ],
        baseStyles: {
          fontWeight: '800',
          color: 'red'
        },
        overrideStyles: {
          color: 'blue'
        }
      }
    }
  }
</script>
