<template lang="pug">
  .order-details-info.vui-m-bottom--medium
    span.vui-text-link--reset(href='javascript:void(0)', style='cursor: pointer;')
      .vui-box.vui-box--small.vui-theme--default
        .vui-scrollable--x.vui-p-bottom--x-small
          .vui-grid.vui-grid--vertical-align-center
            svg.vui-icon.vui-align-middle.vui-icon--small.vui-m-right--x-small.vui-icon--x-small(style='color: rgb(1, 119, 162);')
              use(xmlns:xlink='http://www.w3.org/1999/xlink', xlink:href='/static/shared/icons.svg#icon-caret-right')
            .vui-col.vui-m-right--medium
              label.vui-form-element__label Status
              br
              span.vui-badge.new accepted
            .vui-col.vui-m-right--medium
              label.vui-form-element__label Advertiser
              br
              span Metro Wireless
            .vui-col.vui-m-right--medium
              label.vui-form-element__label Station
              br
              span WVVV
            .vui-col.vui-m-right--medium
              label.vui-form-element__label C/P/E
              br
              span MEW-GEN-23
            .vui-col.vui-m-right--medium
              label.vui-form-element__label Start Date
              br
              span 2/13/2017
            .vui-col.vui-m-right--medium
              label.vui-form-element__label End Date
              br
              span 3/26/2017
            .vui-col.vui-m-right--medium
              label.vui-form-element__label Agency Order #
              br
              span 4119683
            .vui-col.vui-m-right--medium
              label.vui-form-element__label Videa Order #
              br
              span 131542
            .vui-col.vui-m-right--medium
              label.vui-form-element__label Version
              br
              span  1
            .vui-col.vui-m-right--medium
              label.vui-form-element__label Station Order #
              br
              span 876542
    .vui-box(style='margin-top: -1px; background: rgb(240, 248, 252); display: none;')
      .vui-scrollable--x.vui-p-bottom--x-small
        .vui-grid.vui-p-around--large
          .vui-grid.vui-col(style='width: 75%;')
            .vui-col(style='width: 25%;')
              fieldset.vui-form-element.vui-m-bottom--small.vui-m-right--large
                label.vui-form-element__label Product
                .vui-form-element__control
                  span.vui-form-element__static GEN
              fieldset.vui-form-element.vui-m-bottom--small.vui-m-right--large
                label.vui-form-element__label Campaign Name
                .vui-form-element__control
                  span.vui-form-element__static Q1`16 DI
              fieldset.vui-form-element.vui-m-bottom--small.vui-m-right--large
                label.vui-form-element__label Deal type
                .vui-form-element__control
                  span.vui-form-element__static
            .vui-col(style='width: 25%;')
              fieldset.vui-form-element.vui-m-bottom--small.vui-m-right--large
                label.vui-form-element__label Agency Name
                .vui-form-element__control
                  span.vui-form-element__static The Media Masters Group
              fieldset.vui-form-element.vui-m-bottom--small.vui-m-right--large
                label.vui-form-element__label Buyer Name
                .vui-form-element__control
                  span.vui-form-element__static Sarah Salinas
              fieldset.vui-form-element.vui-m-bottom--small.vui-m-right--large
                label.vui-form-element__label Schedule type
                .vui-form-element__control
                  span.vui-form-element__static
            .vui-col(style='width: 25%;')
              fieldset.vui-form-element.vui-m-bottom--small.vui-m-right--large
                label.vui-form-element__label Demo
                .vui-form-element__control
                  span.vui-form-element__static A18-49
              fieldset.vui-form-element.vui-m-bottom--small.vui-m-right--large
                label.vui-form-element__label Estimate
                .vui-form-element__control
                  span.vui-form-element__static  23
              fieldset.vui-form-element.vui-m-bottom--small.vui-m-right--large
                label.vui-form-element__label Rep Name
                .vui-form-element__control
                  span.vui-form-element__static Jessica Bond
            .vui-col(style='width: 25%;')
              //
              fieldset.vui-form-element.vui-m-bottom--small.vui-m-right--large
                label.vui-form-element__label Total Spots
                .vui-form-element__control
                  span.vui-form-element__static 53
              fieldset.vui-form-element.vui-m-bottom--small.vui-m-right--large
                label.vui-form-element__label Total $$$
                .vui-form-element__control
                  span.vui-form-element__static $41,000
          .vui-col(style='width: 25%;')
            .vui-col.vui-p-horizontal--medium
              //
              fieldset.vui-form-element.vui-m-bottom--small
                label.vui-form-element__label.black-text.disabled Buyer Order Comment
                .vui-form-element__control
                  .resizable(r-directions="['bottom', 'right']", r-height='initialHeight', resizable='', initial-height='60', title='', style='height: 140px;')
                    textarea.vui-textarea(readonly='readonly', name='', title='20 minutes separation.')
                    .rg-bottom
                      span
                    .rg-right
                      span
              fieldset.vui-form-element.vui-m-bottom--small
                label.vui-form-element__label.black-text.disabled Customer Care Comment To Station
                .vui-form-element__control
                  .resizable(r-directions="['bottom', 'right']", r-height='initialHeight', resizable='', initial-height='60', title='', style='height: 140px;')
                    textarea.vui-textarea(readonly='readonly', name='')
                    .rg-bottom
                      span
                    .rg-right
                      span

</template>
