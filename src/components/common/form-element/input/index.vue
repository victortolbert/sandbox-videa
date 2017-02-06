<template lang="pug">
  .vui-form-element.vui-m-right--small
    label.vui-form-element__label {{ label }}
    .vui-form-element__control(
      style = 'width: 11rem'
    )
      input.vui-input(
        @input = 'stationIdPattern = $event.target.value'
        v-bind:name = 'name'
        v-bind:placeholder = 'placeholder'
        v-bind:type = '"text"'
        v-bind:value = 'value'
      )
</template>

<script>
  export default {
    props: {
      name: {
        type: String
      },
      type: {
        type: String
      },
      value: {
        type: String
      },
      placeholder: {
        type: String
      }
    }
  }
</script>
