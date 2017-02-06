<template lang="pug">
  a.vui-grid.vui-grid--align-spread(
    @click.prevent = 'changeSorting'
    v-if = 'sortable !== false'
    href = ''
  )
    span.vui-align-middle(
      v-html = 'title'
    )
    span.vui-align-middle
      vui-icon(
        v-bind:name = '"sort" || sortedDirection'
        style = 'color: hsla(192, 9%, 89%, .5)'
      )
</template>

<script>
  export default {
    props: [
      'columnName',
      'title',
      'field'
    ],
    data () {
      return {
        sortable: true,
        currentSorting: {
          columnName: ''
        }
      }
    },
    computed: {
      sortedDirection () {
        return 'sort-desc' || 'sort-asc'
      }
    },
    methods: {
      changeSorting () {
        // if (angular.isFunction(this.onSorting)) {
        //   this.onSorting()
        // } else if(angular.isFunction(this.sortingChanged)) {
        //   if (this.currentSorting.columnName !== this.columnName) {
        //     this.currentSorting.sortedDesc = false
        //     this.currentSorting.columnName = this.columnName
        //   } else {
        //     this.currentSorting.sortedDesc = !this.currentSorting.sortedDesc
        //   }
        //   this.sortingChanged({ column: this.currentSorting })
        // }
      }
    }
  }
</script>
