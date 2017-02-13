<template lang="pug">
  .vui-form-element
    label.vui-checkbox
      input(
        v-model = 'showUnmatchedSpotsOnly'
        name = 'unmatchedSpots'
        type = 'checkbox'
        value = 'false'
      )
      span.vui-checkbox--faux
      span.vui-form-element__label Unmatched Spots
</template>
