<template lang="pug">
  .vui-grid.vui-grid--align-spread.vui-m-bottom--xx-small
    .exporter.vui-hint-parent.hint-parent-demo.vui-align-middle.vui-container--right
      | Export to Excel
      button.vui-button.vui-button--icon-border-filled.vui-m-left--x-small
        vui-icon(
          name = 'download'
          style = 'width: 1.5rem;height: 1.5rem; color: #0177a2'
        )
      span.vui-assistive-text Export to Excel
</template>
