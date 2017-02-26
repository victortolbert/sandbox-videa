<template lang="pug">
  #tabledemo.example
    h3 Vue Datatable example
    | Filter by anything:
    input(v-model='search')
    hr
    data-table(v-bind:users='filteredUsers')
</template>

<script>
  export default {
    data () {
      return {
        users: [ ],
        search: ''
      }
    },

    computed: {
      filteredUsers () {
        let users = this.users
        return this.$options.filters.filterBy(users, this.search)
      }
    },

    ready () {
      let vm = this
      $.ajax({
        url: 'https://jsonplaceholder.typicode.com/users',
        success(res) {
          vm.users = res
        }
      })
    }
  }
</script>
