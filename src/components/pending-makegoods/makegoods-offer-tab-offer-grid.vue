<template lang="pug">
  .vui-scrollable--x
    table.vui-table.vui-no-row-hover.vui-table--fixed-layout
      thead
        tr
          th(style='width: 80px') Select
          th(style='width: 52px') View #[br] Offer
          th(style='width: 107px')
            vui-sorting-column(title='Date<br>Offer Sent')
          th(style='width: 92px')
            vui-sorting-column(title='Offer<br>Number')
          th(style='width: 89px')
            vui-sorting-column(title='Offer<br>Version')
          th(style='width: 120px')
            vui-sorting-column(title='Offer<br>Type')
          th(style='width: 100px')
            vui-sorting-column(title='Offer<br>Status')
          th(style='width: 100px')
            vui-sorting-column(title='Accepted<br>by Agency')
          th(style='width: 80px') Agency #[br] Notes
          th(style='width: 100px')
            vui-sorting-column(title='Accepted<br>by Station')
          th(style='width: 80px') Station #[br] Notes
          th(style='width: 80px') Transfer #[br] Status
          th(style='width: 400px')  Makegood #[br] comments
          th(style='width: 30%') Customer Care #[br] Internal Notes
      tbody
        tr(v-for='offer in order.offers')
          td.vui-text-align--center
            .vui-form-element
              .vui-form-element__control
                label.vui-checkbox
                  input.vui-input(type='checkbox', value='true')
                  span.vui-checkbox--faux
          td: a(
            v-bind:href = '`/sellers/order-management/pending-makegoods/${offer.orderId}/${offer.offerType}`'
            target = '_blank'
          )
            vui-icon.vui-icon--small(name='medicine-bottle')
          td {{ offer.dateMakegoodSent }}
          td {{ offer.id }}
          td {{ offer.version }}
          td.vui-truncate {{ offer.offerType }}
          td: vui-badge {{ offer.offerStatus }}
          td: vui-badge {{ offer.acceptedByAgency }}
          td
          td: vui-badge {{ offer.acceptedByStation }}
          td {{ offer.stationNotes }}
          td {{ offer.transferStatus }}
          td {{ offer.makegoodComments }}
          td {{ offer.customerCareInternalNotes }}
    //- grid
    //-   grid-item(size = '3/4')
    //-     .vui-box.vui-theme--shade
    //-   grid-item(size = '1/4')
    //-     .vui-box.vui-theme--shade
    //-       pre {{ order.offers }}
</template>

<script>
  export default {
    props: [ 'orderId', 'order' ]
  }
</script>
