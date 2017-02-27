<template lang="pug">
  .makegoods-view
    vui-title Pending Makegoods
    vui-panel
      .vui-scrollable--x.vui-p-bottom--x-small
        pending-makegoods-filter
    pending-makegoods-grid(
      v-bind:offers = 'offers'
    )

</template>

<script>
  import axios from '~plugins/axios'
  import moment from 'moment'
  import PendingMakegoodsFilter from '~components/pending-makegoods/pending-makegoods-filter'
  import PendingMakegoodsGrid from '~components/pending-makegoods/pending-makegoods-grid'

  export default {
    name: 'pending-makegoods',

    metaInfo: {
      title: 'Pending Makegoods'
    },

    components: {
      PendingMakegoodsFilter,
      PendingMakegoodsGrid
    },

    props: {
      offerRoute: {
        type: String,
        default: 'sellers-order-management-pending-makegoods-id'
      }
    },

    data () {
      return {
        offers: [],
        searchKey: '',
        fromDate: new Date('2016-04-25T12:24:00'),
        toDate: new Date('2016-06-05T12:24:00'),
        dateMakegoodSent: moment().add(-3, 'days').format('MM/DD/YY'),
        dateTimeOfferDue: moment().add(-1, 'days').format('MM/DD/YY')
      }
    },

    methods: {
      fetchOffers () {
        axios.get('/offers')
          .then((response) => {
            this.offers = response.data
          })
          .catch((error) => {
            console.log(error)
          })
      },

      showOffer (id, version = '') {
        let routeInfo = {
          name: this.offerRoute,
          params: {
            id: id
          }
        }

        if (version) {
          routeInfo.query = { version: version }
        }

        this.$router.push(routeInfo)
      }
    },

    beforeCreate () {
      this.$store.state.activeApp = 'sellers'
    },

    created () {
      this.fetchOffers()
    }
  }
</script>

