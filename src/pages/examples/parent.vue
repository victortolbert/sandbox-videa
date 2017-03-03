<template>
  <child-component-1>
    <child-component-2>
      <child-component-3></child-component-3>
    </child-component-2>
  </child-component-1>
</template>

<script>
  import {ChildComponent1, ChildComponent2, ChildComponent3} from './components'

  const ThingIWantToShare = {
    importantString: 'boop'
  }

  export default {
    provide: {
      ThingIWantToShare
    }
  }
</script>
