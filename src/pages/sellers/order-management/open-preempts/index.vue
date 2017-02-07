<template lang="pug">
  .open-preempts-view
    vui-title Open Pre-Empts
    vui-panel
      open-preempts-filter(
        apply-filter = 'listCtrl.filterApply'
        clear-filter = 'listCtrl.filterClear'
        filter = 'listCtrl.filter.value'
        is-show-filter-errors = 'listCtrl.isShowFilterErrors'
      )
    open-preempts-grid(
      is-column-sorted = 'listCtrl.isColumnSorted'
      items = 'listCtrl.items'
      open-edit-notes-popup = 'listCtrl.openEditNotesPopup'
      sorting-changed = 'listCtrl.sortingChanged'
    )
    open-preempts-edit-text-field-popup(
      editing-property-name = 'customerCareNotes'
      open-popup = 'listCtrl.openEditNotesPopup'
      popup-title = 'Open Preempt Note'
      save-note = 'listCtrl.saveNote'
    )
    .vui-grid.vui-grid--align-spread.vui-m-top--medium
      .vui-col
      .vui-col
        a(
          href = ''
          scroll-to-top = ''
          style = 'cursor: pointer; visibility: visible;'
        )
          | Back to Top
          vui-icon(
            name = 'arrow-circle-up'
          )
</template>

<script>
  import OpenPreemptsEditTextFieldPopup from '~components/open-preempts/open-preempts-edit-text-field-popup'
  import OpenPreemptsFilter from '~components/open-preempts/open-preempts-filter'
  import OpenPreemptsGrid from '~components/open-preempts/open-preempts-grid'

  export default {
    components: {
      OpenPreemptsEditTextFieldPopup,
      OpenPreemptsFilter,
      OpenPreemptsGrid
    },

    data () {
      return {
        show: false
      }
    },

    beforeCreate () {
      this.$store.state.activeApp = 'sellers'
    }
  }
</script>
