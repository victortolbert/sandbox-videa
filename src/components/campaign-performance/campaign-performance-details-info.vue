<template lang="pug">
  .vui-box.vui-grid.vui-m-bottom--large.vui-wrap.vui-theme--default(
    v-show = 'campaign'
  )
    .vui-container--fluid.vui-grid.vui-grid--align-spread.vui-p-around--small
      .vui-align-middle
        h3.vui-text-heading--medium.vui-m-bottom--small Campaign Detail
      .vui-align-middle
        div(v-if='hasSpotsLastUpdated')
          span Spots Last Updated:
          //- span {{ daypartSummary.spotsLastUpdated }}
    .vui-grid--align-spread.vui-grid
      .vui-col--padded.vui-form-element
        label.vui-form-element__label(
          for = ''
        ) Station Order #
        .vui-form-element__control
          span.vui-form-element__static {{ campaign.stationOrderNumber }}
      .vui-col--padded.vui-form-element
        label.vui-form-element__label(
          for = ''
        ) Videa Order #
        .vui-form-element__control
          span.vui-form-element__static {{ campaign.videaOrderNumber }}
      .vui-col--padded.vui-form-element
        label.vui-form-element__label(
          for = ''
        ) Agency
        .vui-form-element__control
          span.vui-form-element__static {{ campaign.agency }}
      .vui-col--padded.vui-form-element
        label.vui-form-element__label(
          for = ''
        ) Flight Start
        .vui-form-element__control
          span.vui-form-element__static {{ campaign.flightStartDate }}
      .vui-col--padded.vui-form-element
        label.vui-form-element__label(
          for = ''
        ) Flight End
        .vui-form-element__control
          span.vui-form-element__static  {{ campaign.flightEndDate }}
      .vui-col--padded.vui-form-element
        label.vui-form-element__label(
          for = ''
        ) Revenue
        .vui-form-element__control
          span.vui-form-element__static {{ campaign.revenue }}
      .vui-col--padded.vui-form-element
        label.vui-form-element__label(
          for = ''
        ) Total Purchased
        .vui-form-element__control
          span.vui-form-element__static {{ campaign.totalPurchased }}
      .vui-col--padded.vui-form-element
        label.vui-form-element__label(
          for = ''
        ) Demo
        .vui-form-element__control
          span.vui-form-element__static {{ campaign.demoName }}
      .vui-col--padded.vui-form-element
        label.vui-form-element__label(
          for = ''
        ) Weeks Remaining
        .vui-form-element__control
          span.vui-form-element__static {{ campaign.weeksRemaining }}
</template>

<script>
  export default {
    props: {
      campaign: {
        type: Object
      }
    },

    data () {
      return {
      }
    }
  }
</script>
