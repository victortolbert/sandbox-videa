<template lang="pug">
  .campaign-performance-view
    vui-title Campaign Performance
    vui-panel
      campaign-performance-list-filter(
        apply-filter = 'applyFilter(filter)'
        filter = 'queryParams'
      )
    campaign-performance-list-grid-controls
    div(
      v-show = 'dataLoaded'
    )
      .vui-scrollable--x.vui-m-bottom--small
        campaign-performance-list-grid(
          current-sorting = 'currentSorting'
          grid-columns = 'gridColumns'
          campaigns = 'campaigns'
          sorting-changed = 'sortingChanged'
        )
      vui-footnote
    .vui-align-middle.vui-m-top--x-large.vui-float--right
      vui-back-to-top
    .vui-m-top--x-large(
      v-show = 'totalCount > queryParams.pageSize'
    )
      vui-pager(
        current-page = 'queryParams.page'
        items-per-page = 'queryParams.pageSize'
        max-size = '10'
        refresh-data = 'changePage(page)'
        total-items = 'totalCount'
      )
</template>

<script>
  import axios from '~plugins/axios'

  import CampaignPerformanceListGridControls from '~components/campaign-performance/campaign-performance-list-grid-controls'
  import CampaignPerformanceListFilter from '~components/campaign-performance/campaign-performance-list-filter'
  import CampaignPerformanceListGrid from '~components/campaign-performance/campaign-performance-list-grid'

  export default {
    beforeCreate () {
      this.$store.state.activeApp = 'sellers'
    },

    created () {
      this.fetchCampaigns()
    },

    components: {
      CampaignPerformanceListGridControls,
      CampaignPerformanceListFilter,
      CampaignPerformanceListGrid
    },

    data () {
      return {
        dataLoaded: true,
        totalCount: 20,
        queryParams: {
          pageSize: 10,
          page: null
        },
        value: [
          { name: 'Vue.js', language: 'JavaScript' }
        ],
        options: [
          { name: 'Vue.js', language: 'JavaScript' },
          { name: 'Adonis', language: 'JavaScript' },
          { name: 'Rails', language: 'Ruby' },
          { name: 'Sinatra', language: 'Ruby' },
          { name: 'Laravel', language: 'PHP' },
          { name: 'Phoenix', language: 'Elixir' }
        ],
        gridColumns: [
        ],
        campaigns: []
      }
    },
    methods: {
      fetchCampaigns () {
        axios.get('/campaigns')
          .then((response) => {
            this.campaigns = response.data
          }, (response) => {
            // error callback
          })
      },
    }

  }
</script>
