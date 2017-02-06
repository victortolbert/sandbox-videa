<template lang="pug">
  .vui-grid.vui-p-around--small(
    style = 'background-color: white'
  )
    vui-media(
      label = 'Station Audience Share'
    ) {{ $store.state.settings.stationAudienceShare | decimalToPercent }}
</template>
