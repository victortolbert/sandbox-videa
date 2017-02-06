<template lang="pug">
  modal(
    v-bind:show = 'show'
    v-bind:on-close = 'close'
    size = 'large'
  )
    .modal-header.vui-m-bottom--large
      h3.vui-text-heading--medium Export Avail
    .modal-body

      h4.vui-text-heading--small.vui-text-align--center.vui-m-bottom--large
        | Select a format in which you would like to export your avail.

      .vui-text-align--center
        button.vui-button.vui-button--neutral.vui-m-right--x-small(
          @click.prevent = 'close'
        ) None
        button.vui-button.vui-button--brand.vui-m--x-small(
          @click.prevent = 'close'
        ) CSV
        button.vui-button.vui-button--brand.vui-m--x-small(
          @click.prevent = 'close'
        ) XML
        button.vui-button.vui-button--brand.vui-m--x-small(
          @click.prevent = 'close'
        ) Both XML and CSV
</template>

<script>
  export default {
    props: ['show'],

    data () {
      return {
        comment: '',
        expirationDate: new Date()
      }
    },

    methods: {
      close () {
        this.show = false
        this.comment = ''
      },

      postComment () {
        this.close()
      }
    }
  }
</script>
