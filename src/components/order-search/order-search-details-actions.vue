<template lang="pug">
  .vui-grid.vui-grid--align-spread.vui-m-bottom--large
    h2.vui-text-heading--medium Details

    fieldset
      a.close-button.vui-m-right--x-small
        input.vui-button.vui-button--neutral(
          v-on:click = 'closeTab'
          type = 'button',
          value = 'Close'
        )

      a.vui-button.vui-button--secondary(
        v-if = '!isCancelledOrder'
        v-on:click = 'openMakegoodDetails(orderId)'
      ) Makegoods

      input.vui-button.vui-button--secondary(
        v-if = '!isCancelledOrder'
        v-on:click = 'openSpotsRunNotOrderedPopup'
        type = 'button'
        value = 'Spots Run Not Ordered'
      )

      input.vui-button.vui-button--secondary(
        v-if = '!isCancelledOrder'
        v-on:click = 'showEbizHistory'
        type = 'button'
        value = 'eBiz History'
      )
</template>

<script>
  import axios from '~plugins/axios'
  import moment from 'moment'

  export default {
    props: {
      orderId: {
        type: [String, Number]
      }
    },

    data () {
      return {
        isCancelledOrder: false,
        startDate: new Date(moment().add(14, 'days').toISOString()),
        endDate: new Date(moment().add(5, 'days').toISOString()),
        offer: {},
        order: {},
        isImpressionsBuyType: true,
        shouldShowInfo: true,
        isMakegoodDefined: true
      }
    },
    methods: {
      closeTab () {},

      openMakegoodDetails (id) {
        alert(id)
      },

      openSpotsRunNotOrderedPopup () {},
      showEbizHistory () {},

      fetchOffer(id) {
        axios.get(`/offers/${id}`)
          .then((response) => {
            this.offer = response.data
          })
          .catch((error) => {
            console.log(error)
          })
      },

      fetchOrder (id) {
        axios.get(`/orders/${id}`)
          .then((response) => {
            this.order = response.data
          })
          .catch((error) => {
            console.log(error)
          })
      },


      infoClicked () {
        this.shouldShowInfo = !this.shouldShowInfo
      }
    },

    created () {
      // this.fetchOffer(this.$route.params.id)
    },

    mounted () {
      this.fetchOrder(this.$route.params.id)
    }
  }
</script>
