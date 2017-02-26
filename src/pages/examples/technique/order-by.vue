<!-- https://github.com/DWeikis/vue-orderBy-mixin -->
<template lang="pug">
  .example {{ users }}
</template>

<script>
  export default {
    name: 'order-by-example',

    metaInfo: {
      title: 'Example / Order by',
    },

    data () {
      return {
        users: [
          { id: 1, name: 'John' },
          { id: 2, name: 'Jane' }
        ],
      }
    },
    // computed: {
    //   example () {
    //      this.orderBy(this.users, 'name', 'ASC')
    //   }
    // },

    methods: {
      orderBy (obj, column, type) {
        let orderBy = type.toUpperCase()
        if (['ASC','DESC'].indexOf(orderBy) == -1) {
          console.error($type, 'Not valid, please use ASC or DESC')
          return
        }
        this['order' + orderBy](obj, column)
      },

      orderASC (obj, column) {
        obj.sort((a,b) => {return (a[column] > b[column]) ? 1 : ((b[column] > a[column]) ? -1 : 0)})
      },

      orderDESC (obj, column) {
        obj.sort((a,b) => {return (a[column] > b[column]) ? -1 : ((b[column] > a[column]) ? 1 : 0)})
      }
    },

    beforeCreate () {
      this.$store.state.activeApp = 'examples'
    }

  }
</script>
