<template lang="pug">
  .vui-pagination
    span {{ numPages }} pages
    div
      ul.pagination(total-items='totalItems', items-per-page='itemsPerPage', @change='refreshData({ page: currentPage })')
        li.pagination-prev(v-if='directionLinks', :class='{ disabled: noPrevious() }')
          //- a(href='', @click.prevent='selectPage(page - 1, $event)')
          icon(name='angle-right')
        li.pagination-page(v-for='page in pages', :class='{ active: page.active }')
          a(href='', @click.prevent='selectPage(page.number, $event)') {{ page.number }}
        li.pagination-next(v-if='directionLinks', :class='{ disabled: noNext() }')
          //- a(href='', @click.prevent='selectPage(page + 1, $event)')
          icon(name='angle-right')
</template>

<script>
  export default {
    data () {
      return {
        currentPage: 1,
        directionLinks: true,
        numPages: 8,
        pages: [
          {
            active: true,
            number: 1
          }
        ]
      }
    },
    methods: {
      noPrevious () {

      },
      noNext () {

      },
      selectPage (page, event) {

      }
    }
  }
</script>
