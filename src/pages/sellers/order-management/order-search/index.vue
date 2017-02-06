<template lang="pug">
  .active-orders-view
    h1.vui-text-heading--large.vui-m-bottom--medium Order Search
    order-search-filter(
      apply-filter = 'filterApply'
      clear-filter = 'filterClear'
      filter = 'filter.value'
      is-dates-valid = 'isDatesValid'
    )

    order-search-grid(
      v-bind:orders = 'orders'
      is-column-sorted = 'isColumnSorted'
      sorting-changed = 'sortingChanged'
    )
    .table-footer-row
      .vui-pagination(
        current-page = 'currentPage'
        items-per-page = 'itemsPerPage'
        refresh-data = 'refreshData'
        total-items = 'totalItems'
      )
        .vui-show--inline-block.vui-m-right--large
          span 1
        .vui-show--inline-block
          //- ul.pagination(total-items='totalItems', items-per-page='itemsPerPage', @change='changeFunction', max-size='_maxSize', previous-text='', next-text='', boundary-links='false', rotate='false', num-pages='numPages')
          //-   li.pagination-prev(v-if='directionLinks')
          //-     a(href='', @click='selectPage(page - 1)') 
          //-   li.pagination-page(v-for='(page, index) in pages')
          //-     a(href='', @click='selectPage(page.number)') 1
          //-   li.pagination-next(v-if='directionLinks')
          //-     a(href='', @click='selectPage(page + 1)') 
    .vui-grid.vui-grid--align-end
      input.vui-button.vui-button--brand(
        @click = 'complete'
        v-bind:disabled = '!hasChangedCompletionOrders'
        type = 'button'
        value = 'Save'
      )
</template>

<script>
  import axios from '~plugins/axios'

  import OrderSearchFilter from '~components/order-search/order-search-filter'
  import OrderSearchGrid from '~components/order-search/order-search-grid'

  export default {
    beforeCreate () {
      this.$store.state.activeApp = 'sellers'
    },

    components: {
      OrderSearchFilter,
      OrderSearchGrid
    },

    async data ({ env, params }) {
      let { data } = await axios.get('/orders')
      return {
        orders: data,
        currentPage: 1,
        directionLinks: true,
        hasChangedCompletionOrders: false,
        pages: [
          { active: true, number: 1 },
          { active: false, number: 2 }
        ]
      }
    },

    methods: {
      changeFunction () {},
      complete () {}
    }
  }
</script>
