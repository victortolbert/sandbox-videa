<template lang="pug">
.example
  button(:class='b()') DIV tag will receive 'btn' class name
  button(:class='b("text")') DIV tag will receive 'btn__text'
  button(:class='b({size: "large"})')  DIV tag will receive 'btn btn--size-large' class name
  button(:class="b(false, 'block-mixin')")  DIV tag will receive 'btn block-mixin' class name
  button(:class="b('text', 'element-mixin')")  DIV tag will receive 'btn__text element-mixin' class name
  //- form(:class='b()')
  //-   btn(:class="b('button')")  Btn root tag will receive 'form__button btn' class name

  //- button(:class='b({ size, look })', :type='type')
  //-   span(:class="b('text', {look})")
  //-     i(v-if='icon', :class="b('icon', { icon })")  👍
  //-     slot

</template>

<script>
  import Btn from './btn'

  export default {
    name: 'btn',
  }
</script>
