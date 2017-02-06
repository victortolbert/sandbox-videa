<template lang="pug">
  .campaign-performance-view
    vui-title Campaign Performance
    vui-panel
      campaign-performance-list-filter
    campaign-performance-list-grid-controls
    .vui-scrollable--x.vui-m-bottom--small
      campaign-performance-list-grid(
        campaigns = 'campaigns'
      )
    vui-footnote

</template>

<script>
  import axios from '~plugins/axios'
  import CampaignPerformanceListGridControls from '~components/campaign-performance/campaign-performance-list-grid-controls'
  import CampaignPerformanceListFilter from '~components/campaign-performance/campaign-performance-list-filter'
  import CampaignPerformanceListGrid from '~components/campaign-performance/campaign-performance-list-grid'

  export default {
    metaInfo: {
      title: 'Campaign Performance'
    },
    components: {
      CampaignPerformanceListGridControls,
      CampaignPerformanceListFilter,
      CampaignPerformanceListGrid
    },

    beforeCreate () {
      this.$store.state.activeApp = 'sellers'
    },

    created () {
      this.fetchCampaigns()
    },

    data () {
      return {
        campaigns: [],
        gridColumns: []
      }
    },

    methods: {
      fetchCampaigns () {
        axios.get('/campaigns')
          .then((response) => {
            this.campaigns = response.data
          })
          .catch((error) => {
            console.log(error)
          })
      }
    }
  }
</script>
