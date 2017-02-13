<template lang="pug">
  table(v-bind:class = '[ "vui-table", "vui-no-row-hover" ]')
    thead
      tr
        th(v-for='column in columns') {{ column }}
    tbody
      tr(v-for="item in items")
        td {{ item.id }}
</template>

<script>
  export default {
    props: {
      columns: {
        type: Array
      },
      items: {
        type: Array
      }
    }
  }
</script>
