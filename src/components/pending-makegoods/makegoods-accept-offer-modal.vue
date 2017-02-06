<template lang="pug">
  modal(
    v-bind:on-close = 'close'
    v-bind:show = 'show'
    size = 'large'
  )
    .modal-header.vui-m-bottom--large
      h3.vui-text-heading--medium Accept Offer

    .modal-body
      h4.vui-text-heading--large.vui-text-align--center.vui-m-bottom--large Are you sure?

      .vui-text-align--center
        button.vui-button.vui-button--brand.vui-m-right--x-small(
          @click.prevent = 'showOrders'
        ) Yes
        button.vui-button.vui-button--neutral(
          @click.prevent = 'close'
        ) No
        button.vui-button.vui-button--neutral(
          @click = 'emitGlobalClickEvent'
        ) Test Global
</template>

<script>
  export default {
    props: [ 'show' ],

    data () {
      return {
        clickCount: 0,
        comment: '',
        expirationDate: new Date()
      }
    },

    methods: {
      emitGlobalClickEvent () {
        this.clickCount++
        // Send the event on a channel (i-got-clicked) with a payload (the click count.)
        // EventBus.$emit('i-got-clicked', this.clickCount)
      },

      close () {
        this.show = false
        this.comment = ''
      },

      postComment () {
        this.close()
      },

      showOrders () {
        this.$router.push({
          name: 'sellers.orders'
        })
      }
    }
  }
</script>
