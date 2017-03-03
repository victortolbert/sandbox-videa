<template lang="pug">
  .modal-header.vui-m-bottom--large
    h3.vui-text-heading--medium.vui-grid.vui-grid--align-spread
      span: slot Modal Header
      a.vui-text-align--right(@click.prevent = '$emit("close")' style='color: white')
        vui-icon(name='close', style='width: 2rem; height: 2rem')
</template>
