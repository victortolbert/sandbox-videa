<template>
  <div class="waypoint-test">
    <v-waypoint @waypoint-in="inHandler"
                @waypoint-out="outHandler"></v-waypoint>
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
      inHandler () {
        this.text = 'going in'
      },
      outHandler () {
        this.text = 'going out'
      }
    }
  }
</script>
