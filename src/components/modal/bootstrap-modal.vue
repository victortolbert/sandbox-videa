<template lang="pug">
  .bootstrap-modal
    header.vui-grid.vui-grid--align-spread
      slot(name='title')
      button(@click = '$emit("close")') close
    main
      slot(name='body')
    footer
      slot(name='footer')
</template>
