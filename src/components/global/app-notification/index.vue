<template lang="pug">
  .vui-notify_container(v-show = '$store.state.hasError', style='position: absolute; top:100%')
    .vui-notify.vui-notify--alert.vui-theme--error(role='alert')
      span.alert__message
        vui-icon(name='exclamation-triangle')
        | Please enter your username and password.
</template>
