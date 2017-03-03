<template lang="pug">
  div
    off-canvas(
      @sidebarWasClosed='show = $event'
      v-bind:duration='.5'
      v-bind:width='300'
      v-model='show'
      effect='ease-in-out'
    )
      | Sidebar Content goes here
    div
      button(@click='show = !show') Toggle
      button(@click='show = false') Close
      p {{ show }}

</template>

<script>
  import offCanvas from 'vue-offcanvas-simple/src/SidebarOffCanvas'

  export default {
    data () {
      return {
        show: false
      }
    },

    components: {
      offCanvas
    }
  }
</script>
