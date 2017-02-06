<template lang="pug">
  .vui-form-element.vui-m-right--small
    label.vui-form-element__label {{ label }}
    .vui-form-element__control(
      style = 'width: 11rem'
    )
      .vui-select_container
        select.vui-select(
          v-model = 'value'
        )
          option(
            v-for = 'option in options'
          ) {{ option }}
</template>

<script>
  export default {
    props: {
      label: {
        type: String
      },
      value: {
        type: String
      },
      options: {
        type: Array
      }
    }
  }
</script>
