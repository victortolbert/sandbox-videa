<template lang="pug">
  table.vui-table(v-bind:class = '[ "vui-table", "vui-no-row-hover" ]')
    thead
      tr
        th(
          v-for = 'column in columns'
        ) {{ column.name }}
    tbody
      tr(v-for = 'item in items')
        td {{ item.id }}
        td {{ item.status }}
        td {{ item.priority }}
        td {{ item.reason }}
        td {{ item.subject }}
</template>

<script>
  export default {
    props: ['columns', 'items']
  }
</script>
