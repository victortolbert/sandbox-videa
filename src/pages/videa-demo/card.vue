<template lang="pug">
  vui-container
    p-name - The full/formatted name of the person or organisation
    p-honorific-prefix - e.g. Mrs., Mr. or Dr.
    p-given-name - given (often first) name
    p-additional-name - other/middle name
    p-family-name - family (often last) name
    p-sort-string - string to sort by
    p-honorific-suffix - e.g. Ph.D, Esq.
    p-nickname - nickname/alias/handle
    u-email - email address
    u-logo - a logo representing the person or organisation
    u-photo
    u-url - home page
    u-uid - universally unique identifier, typically canonical URL
    p-category - category/tag
    p-adr - postal address, optionally embed an h-adr
    p-post-office-box
    p-extended-address - apartment/suite/room name/number if any
    p-street-address - street number + name
    p-locality - city/town/village
    p-region - state/county/province
    p-postal-code - postal code, e.g. US ZIP
    p-country-name - country name
    p-label
    p-geo or u-geo, optionally embed an h-geo
    p-latitude - decimal latitude
    p-longitude - decimal longitude
    p-altitude - decimal altitude
    p-tel - telephone number
    p-note - additional notes
    dt-bday - birth date
    u-key - cryptographic public key e.g. SSH or GPG
    p-org - affiliated organization, optionally embed an h-card
    p-job-title - job title, previously 'title' in hCard, disambiguated.
    p-role - description of role
    u-impp per RFC4770, new in vCard4 (RFC 6350)
    p-sex - biological sex, new in vCard4 (RFC 6350)
    p-gender-identity - gender identity, new in vCard4 (RFC 6350)
    dt-anniversary
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
