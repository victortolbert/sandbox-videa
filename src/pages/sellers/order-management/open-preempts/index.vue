<template lang="pug">
  .open-preempts-view
    vui-title Open Pre-Empts
    vui-panel
      open-preempts-filter(
        apply-filter = 'filterApply'
        clear-filter = 'filterClear'
        filter = 'filter.value'
        is-show-filter-errors = 'isShowFilterErrors'
      )
    open-preempts-grid(
      v-bind:items = 'openPreempts'
      v-bind:offers = 'offers'
      is-column-sorted = 'isColumnSorted'
      open-edit-notes-popup = 'openEditNotesPopup'
      sorting-changed = 'sortingChanged'
    )
    open-preempts-edit-text-field-popup(
      editing-property-name = 'customerCareNotes'
      open-popup = 'openEditNotesPopup'
      popup-title = 'Open Preempt Note'
      save-note = 'saveNote'
    )
    .vui-grid.vui-grid--align-spread.vui-m-top--medium
      .vui-col
      .vui-col
        a(
          href = ''
          scroll-to-top = ''
          style = 'cursor: pointer; visibility: visible'
        )
          | Back to Top
          vui-icon(
            name = 'arrow-circle-up'
          )
</template>

<script>
  import axios from '~plugins/axios'
  import moment from 'moment'

  import OpenPreemptsEditTextFieldPopup from '~components/open-preempts/open-preempts-edit-text-field-popup'
  import OpenPreemptsFilter from '~components/open-preempts/open-preempts-filter'
  import OpenPreemptsGrid from '~components/open-preempts/open-preempts-grid'

  export default {
    metaInfo: {
      title: 'Open Preempts'
    },

    props: {
      offerRoute: {
        type: String,
        default: 'sellers-order-management-pending-makegoods-id'
      }
    },

    components: {
      OpenPreemptsEditTextFieldPopup,
      OpenPreemptsFilter,
      OpenPreemptsGrid
    },

    data () {
      return {
        show: false,
        offers: [],
        searchKey: '',
        fromDate: new Date('2016-04-25T12:24:00'),
        toDate: new Date('2016-06-05T12:24:00'),
        dateMakegoodSent: moment().add(-3, 'days').format('MM/DD/YY'),
        dateTimeOfferDue: moment().add(-1, 'days').format('MM/DD/YY'),
        openPreempts: [
          {
            offerId: 12676,
            orderNumber: 131542,
            stationOrderNumber: 876542,
            videaOrderNumber: 131542,
            totalAmountPreempted: 550,
            airDate: moment().subtract(1, 'weeks').weekday(2).format('MM/DD/YY'),
            stationLineNumber: 7,
            altLineNumber: 7,
            stationSpotNumber: 1,
            buyerLineNumber: 4,
            buyerDays: 'Mo-Fr',
            buyerTime: '6-7pm',
            buyerProgramOrdered: 'Network23 News @ 6',
            length: '30 s',
            preemptReason: '[NA/Oversold]',
            currentStateDescription: '[NA/Oversold]',
            flightStartDate: moment().subtract(2, 'weeks').format('MM/DD/YY'),
            flightEndDate: moment().add(3, 'weeks').format('MM/DD/YY'),
            demo: 'P18-49',
            buyerName: 'Sarah Salinas',
            cpe: 'NEW/GEN/23',
            openMG: '[NA/Oversold]',
            agencyName: 'The Media Masters Group',
            advertiserName: 'Metro Wireless',
            campaignName: 'FY17 Metro Wireless GEN',
            productName: 'CORPORATE',
            estimate: '0016',
            revenue: '5230',
            currentGrpsImps: '',
            purchasedGrpsImps: '',
            difference: '',
            currentHouseholdGrpsImps: '',
            totalPurchasedGrpsImps: '88.3',
            demoName: ' P18-49',
            weeksRemaining: 2,
            programSpotUnitRate: 550,
            airTime: '12:00 am',
            customerCareNotes: 'MARK kelley\'s note as a test. I also updated the open preempt note via the EOM screen.',
            orderStartDate: '06/27/2016',
            orderEndDate: '12/25/2016',
          },
          {
            offerId: 12674,
            orderNumber: 131542,
            stationOrderNumber: 876542,
            videaOrderNumber: 131542,
            totalAmountPreempted: 550,
            airDate: moment().subtract(1, 'weeks').weekday(4).format('MM/DD/YY'),
            stationLineNumber: 7,
            altLineNumber: 7,
            stationSpotNumber: 1,
            buyerLineNumber: 4,
            buyerDays: 'Mo-Fr',
            buyerTime: '6-7pm',
            buyerProgramOrdered: 'Network23 News @ 6',
            length: '30 s',
            preemptReason: '[NA/Oversold]',
            currentStateDescription: '[NA/Oversold]',
            flightStartDate: moment().subtract(2, 'weeks').format('MM/DD/YY'),
            flightEndDate: moment().add(3, 'weeks').format('MM/DD/YY'),
            demo: 'P18-49',
            buyerName: 'Sarah Salinas',
            cpe: 'NEW/GEN/23',
            openMG: '[NA/Oversold]',
            agencyName: 'The Media Masters Group',
            advertiserName: 'Metro Wireless',
            campaignName: 'FY17 Metro Wireless GEN',
            productName: 'CORPORATE',
            estimate: '0016',
            revenue: '5230',
            currentGrpsImps: '',
            purchasedGrpsImps: '',
            difference: '',
            currentHouseholdGrpsImps: '',
            totalPurchasedGrpsImps: '88.3',
            demoName: ' P18-49',
            weeksRemaining: 2,
            programSpotUnitRate: 550,
            airTime: '12:00 am',
            customerCareNotes: 'MARK kelley\'s note as a test. I also updated the open preempt note via the EOM screen.',
            orderStartDate: '06/27/2016',
            orderEndDate: '12/25/2016',
          }
        ]
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

