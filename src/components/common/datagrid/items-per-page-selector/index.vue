<template lang="pug">
  select#itemsPerPage.vui-select(
    @change = 'onChange(itemsPerPageValue)'
  )
    option(
      label = '10'
      value = 'number:10'
      selected = 'selected'
    ) 10
    option(
      label = '25'
      value = 'number:25'
    ) 25
    option(
      label = '50'
      value = 'number:50'
      ) 50
</template>

<script>
  export default {
    methods: {
      data () {

      },
      onChange () {}
    }
  }
</script>
