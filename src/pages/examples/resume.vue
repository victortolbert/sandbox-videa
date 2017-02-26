<template lang="pug">
  vui-container
    h-resume properties, inside an element with class h-resume:
    p-name - brief name of the resume
    p-summary - overview of qualifications and objectives
    p-contact - current contact info in an h-card
    p-education - an education h-event event, years, embedded h-card of the school, location.
    Main article: h-event
    Main article: h-card
    p-experience - a job or other professional experience h-event event, years, embedded h-card of the organization, location, job-title.
    Main article: h-event
    Main article: h-card
    p-skill - a skill or ability, optionally including level and/or duration of experience
    p-affiliation - an affiliation with an h-card organization
</template>

<script>
  import axios from '~plugins/axios'
  import moment from 'moment'

  export default {
    beforeCreate () {},
    mounted () {},
    data () {
      return {}
    },
    props: {},
    computed: {},
    methods: {},
    components: {}
  }
</script>

<style lang="stylus">
  @import '~assets/variables'

</style>
