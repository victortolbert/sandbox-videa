<template lang="pug">
  tabs(animation='slide', :only-fade='false')
    tab-pane(label='Pictures') Pictures Tab
    tab-pane(label='Music') Music Tab
    tab-pane(label='Videos', selected='') Video Tab
    tab-pane(label='Documents', disabled='') Document Tab
</template>

<script>
  import { Tabs, TabPane } from '~components/common/tabs'

  export default {
    components: { Tabs, TabPane }
  }
</script>
