<template lang="pug">
  div
    child-component
      template(
        scope = 'defaultSlotScope'
      )
        p {{ defaultSlotScope.defaultSlotText }}
        //- Renders <p>I'll get rendered inside the default slot.</p>
      template(
        slot = 'literally-the-best'
        scope = 'bestSlotScope'
      )
        p {{ bestSlotScope.namedSlotText }}
        //- Renders <p>I'll get rendered inside the *best* slot.</p>
</template>

<script>
  import ChildComponent from './child'

  export default {
    components: {
      ChildComponent
    }
  }
</script>
