<template lang="pug">
  .vui-container--large.vui-container--center.vui-text-align--center
    .vui-text-heading--x-large.vui-m-vertical--xx-large
      | {{ error.message }}
    span.vui-text-heading--large.vui-badge.rejected.vui-p-around--x-small.vui-p-left--large.vui-p-right--large
      | {{ error.status }} ERROR
    hr
    .vui-text-align--center.vui-m-bottom--medium
      | If this keeps happening, please
      a(href='contactus.html') contact us
      |  and let us know.
</template>

<script>
  export default {
    props: {
      error: {
        type: Object,
        default () {
          return {
            message: 'The page is not found',
            status: 404
          }
        }
      }
    }
  }
</script>
