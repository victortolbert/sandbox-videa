<template lang="pug">
  .example
    autocomplete-vue(:list="[{name: 'item1'}, {name: 'item2'}, {name: 'item3'}]", placeholder='Autocomplete')
    autocomplete-vue(classprefix='my-custom-class', url='/my-list/all', requesttype='get')
    autocomplete-vue(v-model='input', url='/countries/all', requesttype='get', property='capital', :required='true', :threshold='1')
    autocomplete-vue(url='/important/all', requesttype='post', :ignorecase='false')

</template>

<script>
  import AutocompleteVue from 'autocomplete-vue'
  export default {
    components: { AutocompleteVue }
  }
</script>
