<script>
  import VueHowler from 'vue-howler'

  export default {
    mixins: [VueHowler]
  }
</script>

<template>
  <div>
    <span>Total duration: {{ duration }} seconds</span>
    <span>Progress: {{ (progress * 100) }}%</span>
    <button @click="togglePlayback">{{ playing ? 'Pause' : 'Play' }}</button>
    <button @click="stop">Stop</button>
    <button @click="togglePlayback">{{ playing ? 'Pause' : 'Play' }}</button>

    <button @click="stop">Stop</button>
    <button @click="toggleMute">{{ muted ? 'Unmute' : 'Mute' }}</button>
    <button @click="setSeek(seek - 5)">Seek -5</button>
    <button @click="setSeek(seek + 5)">Seek +5</button>
    <button @click="setRate(rate - 0.25)">Rate -25%</button>
    <button @click="setRate(rate + 0.25)">Rate +25%</button>
    <button @click="setVolume(volume - 0.1)">Volume -10%</button>
    <button @click="setVolume(volume + 0.1)">Volume +10%</button>

    <br>
    Duration: {{ duration }}
    Seek: {{ seek }}
  </div>
</template>
