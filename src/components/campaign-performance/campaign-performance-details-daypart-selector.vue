<template lang="pug">
  .vui-grid.vui-grid--vertical.vui-container--fluid
    #daypart-selector.vui-grid.vui-m-bottom--small.vui-container--fluid
      button.vui-col.vui-button.vui-max-small-buttons--stretch.vui-button--brand(
        @click = 'selectAllDayParts'
        v-bind:class = "{'vui-button--brand': isSelectedAllDayParts, 'vui-button--neutral': !isSelectedAllDayParts}"
        v-if = 'dayParts'
      ) All Dayparts

      button.vui-col.vui-button.vui-max-small-buttons--stretch.vui-button--neutral(
        @click = 'selectDayPart(dayPart)'
        v-bind:class = "{'vui-button--brand': isSelectedDayPart(dayPart) && !isSelectedAllDayParts, 'vui-button--neutral': !isSelectedDayPart(dayPart) || isSelectedAllDayParts}"
        v-bind:disabled = '!dayPart.isActive'
        v-for = 'dayPart in dayParts'
      ) {{ dayPart.dayPartName }}
</template>
