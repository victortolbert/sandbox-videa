<template lang="pug">
  form.vui-form--inline(name='marketCppForm')

    fieldset.vui-form-element
      label.vui-form-element__label Market CPP

    fieldset.vui-form-element.u-width-large
      .vui-form-element__control
        input.vui-input(
          name='marketCppField'
          maxlength='15'
          v-bind:disabled = '$store.state.user.name !== "Rep User"'
          v-model='marketCpp'
          required=''
      )
</template>

<script>
  export default {

  }
</script>
