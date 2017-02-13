<template>
  <div class="avatar">
    <avatar username="VueJS"
      initials="VUE"
      :size="100"
    ></avatar>

    <avatar username="D"
      :size="100"
      :rounded="false"
      class="default-avatar"
      :lighten="20"
    ></avatar>
  </div>

</template>

<script>
  import Avatar from 'vue-avatar/dist/Avatar'

  export default {
    components: {
      Avatar
    }
  }
</script>
