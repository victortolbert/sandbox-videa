<template lang="pug">
  vui-modal(size='large')
    .modal-header.vui-m-bottom--large
      h3.vui-text-heading--medium.vui-grid.vui-grid--align-spread
        span Spots Run Not Ordered
        span.pointer.vui-icon_container.vui-m-right--x-small(
          @click = 'hideDialog'
          title = 'Close'
        )
          vui-icon(name='delete')
    .modal-body
      .vui-float--right.vui-m-bottom--small
        h4
          | Target Demo:
          span M18-49
      .vui-m-bottom--large
        .table-container.spots-run-not-ordered-container.vui-scrollable.vui-size--1-of-1(
          style = 'height: 30rem'
        )
          makegoods-spots-run-not-ordered-grid(
            items = 'items'
          )
      .vui-grid.vui-grid--pull-padded.vui-grid--vertical-align-end
        .vui-col--padded
          h4
            | Total Spots Run Not Ordered:
            span
        .vui-col--padded
          h4
            | Total Value:
            span
        .vui-col--padded
          .vui-grid.vui-grid--align-end
            input.vui-button.vui-button--neutral(
              @click = 'hideDialog'
              type = 'button'
              value = 'Close'
            )
</template>
