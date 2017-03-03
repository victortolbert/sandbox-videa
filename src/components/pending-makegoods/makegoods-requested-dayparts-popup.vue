<template lang="pug">
  vui-modal(size='large')
    .modal-header.vui-m-bottom--large
      h3.vui-text-heading--medium.vui-grid.vui-grid--align-spread
        span Dayparts Requested By Buyer
        a.vui-text-align--right(@click.prevent = '$emit("close")')
          vui-icon(name='close')
      .modal-body
        //- .fixed-header-grid(
        //-   style = 'display: flex; flex-direction: column; position: relative; height: 100%'
        //- )
        //-   div(
        //-     style = 'overflow: hidden; flex: 0 0 auto; width: 0px'
        //-   )
        //-     table.vui-table.vui-table--fixed-layout(
        //-       style = 'position: relative'
        //-     )
        //-       thead
        //-         tr
        //-           th
        //-             vui-sorting-column(
        //-               column-name = 'daypartColumn'
        //-               current-sorting = 'sorting'
        //-               sorting-changed = 'sortingChanged(column)'
        //-               title = ''
        //-             )
        //-   .vui-scrollable(
        //-     style = 'flex: 0 1 auto'
        //-   )
        //-     table.vui-table.vui-table--fixed-layout
        //-       tbody
        //- fieldset.vui-form-element
        //-   input.vui-button.vui-button--neutral(
        //-     @click = 'hideDialog'
        //-     type = 'button'
        //-     value = 'Cancel'
        //-   )
</template>
