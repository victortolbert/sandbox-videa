<template lang="pug">
  .detail-period-breaker
    button.vui-button.vui-button--icon-container(
      aria-haspopup = 'true'
      @click = 'showModal'
      tabindex = '-1'
    )
      icon(name = 'calendar')
      span.vui-assistive-text Add Period
    .modal-mask(
      v-show = 'show'
      show = 'isModalVisible'
    )
      .ng-modal-overlay(@click = 'showModal')
      .ng-modal-dialog(v-bind:style = 'dialogStyle')
        .ng-modal-dialog-content
          .modal-container.modal-container--large(style = 'margin: 30vh auto')
            .modal-header.vui-m-bottom--large
              h3.vui-text-heading--medium.vui-grid.vui-grid--align-spread
                div Break Period
                span.pointer.vui-icon_container(
                  @click = 'isModalVisible = false'
                  title = 'Close'
                )
                  vui-icon(name='delete')
                  span.vui-assistive-text Close popup
            .modal-body
              fieldset.vui-form-element.vui-m-bottom--small
                label.vui-form-element__label Start Date
                .vui-form-element__control
                  vui-datepicker(
                    v-model = 'startDate'
                    name = 'startDate'
                    placeholder = "'MM/dd/yyyy'"
                  )
              fieldset.vui-form-element.vui-m-bottom--small
                label.vui-form-element__label End Date
                .vui-form-element__control
                  vui-datepicker(
                    v-model = 'startDate'
                    name = 'startDate'
                    placeholder = "'MM/dd/yyyy'"
                  )
              fieldset.vui-form-element.vui-m-top--medium.vui-text-align--right
                input.vui-button.vui-button--neutral(
                  @click = 'isModalVisible = false'
                  type = 'button'
                  value = 'Close'
                )
                input.vui-button.vui-button--brand(
                  @click = 'breakPeriod(startDate, endDate); isModalVisible = false',
                  type = 'button'
                  value = 'Save'
                )
</template>
