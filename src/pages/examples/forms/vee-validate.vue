<template lang="pug">
  .example
    input(v-validate="{ rules: { required: true, email: true } }" type="text" name="email")
    div {{ errors }}
    span(v-show="errors.has('email')") {{ errors.first('email') }}
</template>
