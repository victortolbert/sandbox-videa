<template lang="jade">
  .example
    price-guide-table

</template>

<script>
  import axios from '~plugins/axios'
  import moment from 'moment'
  import PriceGuideTable from '~components/price-guide-table'

  export default {
    name: 'componentName',

    metaInfo: {
      title: 'componentName',
    },

    props: {},

    components: { PriceGuideTable },

    data: () => ({
    }),

    computed: {},

    methods: {},

    watch: {},

    beforeCreate () {},

    created () {},

    mounted () {}
  }
</script>
