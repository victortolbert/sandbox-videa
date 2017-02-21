<template lang="pug">
  svg.vui-icon.vui-align-middle(v-bind:class='classes')
    use(v-bind:xlink:href='"/static/shared/icons.svg#icon-" + name')
</template>

<script>
  export default {
    props: ['name', 'size', 'color'],
    computed: {
      classes () {
        return [
          'vui-icon--x-small'
        ]
      }
    }
  }
</script>
