<template lang="pug">
  vui-modal(
    v-bind:on-close = 'close'
    v-bind:show = 'show'
    size = 'large'
  )
    .modal-header.vui-m-bottom--large
      h3.vui-text-heading--medium Accept Order

    .modal-body
      h4.vui-text-heading--large.vui-text-align--center.vui-m-bottom--large Are you sure?
      .vui-text-align--center
        button.vui-button.vui-button--brand.vui-m-right--x-small(
          @click.prevent = 'showOrders'
        ) Yes
        button.vui-button.vui-button--neutral(
          @click.prevent = 'close'
        ) No
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
      },

      showOrders () {
        this.$router.push({
          name: 'sellers-pending-orders'
        })
      }
    }
  }
</script>
