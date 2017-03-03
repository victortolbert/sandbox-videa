<template lang="pug">
  {{ $props }}
</template>
<script>
  export default {
    name: 'my-checkbox',
    model: {
      prop: 'checked',
      event: 'change'
    },
    props: {
      // this allows using the `value` prop for a different purpose
      value: String
    },
    // ...

  }
</script>

<my-checkbox v-model="foo" value="some value"></my-checkbox>
equiv. to

<my-checkbox
  :checked="foo"
  @change="(val) => { foo = val }"
  value="some value">
</my-checkbox>





const Provider = {
  provide () {
    return {
      foo: 'bar'
    }
  }
}

const Consumer = {
  inject: ['foo']
}
