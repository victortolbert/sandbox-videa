<template lang="pug">
  section
    table.vui-table
      thead
        tr
          template(
            v-for = 'field in fields'
          )
            th {{ field.label }}
      tbody
        tr(
          v-bind:key='items_key'
          v-for = 'item in _items'
        )
          td(
            v-for = '(field, key) in fields'
          )
            slot(
              v-bind:name = 'key',
              v-bind:value = 'item[key]'
              v-bind:item = 'item'
            ) {{ item[key] }}
    .justify-content-center.row.my-1(
      v-if = 'pagination'
    )
      b-pagination(
        size = 'md'
        v-bind:total-rows = 'items.length'
        v-bind:per-page = 'perPage'
        v-model = 'current'
      )
</template>

<script>
  import Pagination from './pagination'

  export default {
    components: { bPagination: Pagination },

    data: () => {
      return {
        current: 1
      }
    },

    props: {
      items: {
        type: Array,
        default: () => []
      },
      fields: {
        type: Object,
        default: () => {}
      },
      pagination: {
        type: Boolean,
        default: false
      },
      perPage: {
        type: Number,
        default: 20
      },
      items_key: {
        type: String,
        default: null
      }
    },

    computed: {
      _items() {
        if (!this.items) {
          return []
        }
        return this.items.slice((this.current - 1) * this.perPage, this.current * this.perPage)
      }
    }
  }
</script>
