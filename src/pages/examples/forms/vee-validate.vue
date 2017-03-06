<template lang="pug">
  .example
    .column.is-12
      label.label(for='email') Email
      p(:class="{ 'control': true }")
        input(v-validate="'required|email'", :class="{'input': true, 'is-danger': errors.has('email') }", name='email', type='text', placeholder='Email')
        span.help.is-danger(v-show="errors.has('email')") {{ errors.first('email') }}

    //- form
    //-   input.vui-input(type='text', name='email', v-model='emailValue', v-validate='emailValue', data-vv-rules='required|email')
    //-   p(v-if="errors.has('email')") {{ errors.first('email') }}

    //- input(v-validate="{ rules: { required: true, email: true } }" type="text" name="email")
    //- div {{ errors }}
    //- span(v-show="errors.has('email')") {{ errors.first('email') }}
</template>

<script>
export default {
  data: () => ({
    emailValue: ''
  })
}
</script>
