<template lang="pug">
  .btn-group.pagination(role='group', aria-label='Pagination')
    button(
      v-bind:class = "['btn','btn-secondary',btnSize]"
      v-bind:disabled = 'currentPage == 1 '
      v-on:click.prevent = '(currentPage == 1) ? _return : currentPage--'
      type = 'button'
    )
      span(aria-hidden = 'true') «
    button(
      v-bind:class = "['btn','btn-secondary',btnSize,currentPage == 1 ?  'active' : '']"
      v-on:click.prevent = 'currentPage = 1'
      v-show = 'showPrev'
      type = 'button'
    ) 1
    span(
      v-bind:class = "['btn','btn-secondary',btnSize]"
      v-show = 'showPrev'
    ) ...
    button(
      v-bind:class = "['btn', btnSize, btnVariant(index),index + diff == currentPage ? 'active' : '', index + diff != currentPage ? 'hidden-xs-down' : '']"
      v-for = '(item,index) in pageLinks'
      v-on:click.prevent = 'currentPage = index + diff'
      type = 'button'
    ) {{ index + diff }}
    span(
      v-bind:class = "['btn','btn-secondary',btnSize]"
      v-show = 'showNext'
    ) ...
    button(
      v-bind:class = "['btn','btn-secondary',btnSize,numberOfPages == currentPage ? 'active' : '']"
      v-on:click.prevent = 'currentPage = numberOfPages'
      v-show = 'showNext'
      type = 'button'
    ) {{ numberOfPages }}
    button(
      v-bind:class = "['btn','btn-secondary',btnSize]"
      v-bind:disabled = 'currentPage == numberOfPages'
      v-on:click.prevent = '(currentPage == numberOfPages) ? _return : currentPage++'
      type = 'button'
    )
      span(aria-hidden='true') »
</template>

<script>
  export default {
    props: {
      limit: {
        type: Number,
        default: 7
      },
      perPage: {
        type: Number,
        default: 20
      },
      totalRows: {
        type: Number,
        default: 20
      },
      size: {
        type: String,
        default: 'secondary'
      },
      variant: {
        type: String,
        default: ''
      }
    },

    data () {
      return {
        diff: 1,
        showPrev: false,
        showNext: false,
        currentPage: 1
      }
    },

    computed: {
      numberOfPages () {
        const result = Math.ceil(this.totalRows / this.perPage)
        return (result < 1) ? 1 : result
      },
      btnSize () {
        return !this.size || this.size === `default` ? `` : `btn-${this.size}`
      },
      pageLinks () {
        let result = this.limit
        if (this.currentPage > this.numberOfPages) {
          this.currentPage = 1
        }
        this.diff = 1
        this.showPrev = false
        this.showNext = false
        // if less pages than limit just show this pages
        if (this.numberOfPages <= this.limit) {
          return this.numberOfPages
        }
        // if at the beggining of the list or at the end show full number of pages within limit - 2
        // -2 is reserves space for two buttons: "..." and "first/last button"
        if (this.currentPage <= this.limit - 2) {
          this.diff = 1
          this.showNext = true
          result = this.limit - 2
        }
        // at the end of the range
        if (this.currentPage > this.numberOfPages - this.limit + 2) {
          this.diff = this.numberOfPages - this.limit + 3
          this.showPrev = true
          result = this.limit - 2
        }
        // if somehere in the middle show just limit - 4 links in the middle and one button on the left with "..." and on button on the right preceeded with "..."
        if (this.currentPage >= this.limit - 2 && this.currentPage <= this.numberOfPages - this.limit + 2) {
          this.diff = this.currentPage - 1
          this.showPrev = true
          this.showNext = true
          result = this.limit - 4
        }
        return result
      }
    },

    methods: {
      btnVariant(index) {
        return (index + this.diff === this.currentPage) ? `btn-${this.variant}` : `btn-secondary`
      },
      _return() {
      }
    },

    watch: {
      currentPage(newPage) {
        this.$emit('input', newPage)
      }
    }
  }
</script>
