<template lang="pug">
  .vui-container.vui-grid.vui-grid--align-spread.vui-grid--vertical-align-center
      ul.vui-grid.vui-grow
        li
          router-link(
            v-bind:to = '{ name: "campaign-performance" }'
          ) Campaign Performance
</template>
