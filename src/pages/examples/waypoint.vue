<template>
  <div class="waypoint-test">
    <v-waypoint @waypoint="waypointHandler"></v-waypoint>
    <div class="waypoint-text">
      {{ text }}
    </div>
  </div>
</template>

<script>
  export default {
    data: () => {
      return {
        text: 'not-trigger-yet'
      }
    },
    methods: {
      waypointHandler (direction, going) {
        this.text = 'the Waypoint has been triggered with: direction: { x: ' + direction.x + ', y: ' + direction.y + ' } and going: ' + going
      }
    }
  }
</script>
