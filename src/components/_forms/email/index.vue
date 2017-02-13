<template>
  <div class="layout-form">
    <div
      class="vui-form-element"
      :class="{'vui-has-error': validation.hasError('email')}"
    >
      <div class="vui-form-element__label">
      <abbr class="vui-required" title="required">*</abbr> Email
      </div>
      <div class="vui-form-element__control">
        <input type="text" class="vui-input" v-model="email"/>
      </div>
      <div class="vui-form-element__help">
        {{ validation.firstError('email') }}
      </div>
    </div>
    <div class="vui-form-element">
      <div class="actions">
        <button
          type="button"
          class="vui-button vui-button--brand"
          @click="submit"
        >Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  var SimpleVueValidation = require('simple-vue-validator')
  var Validator = SimpleVueValidation.Validator

  Vue.use(SimpleVueValidation)

  export default {
    data: function () {
      return {
        email: ''
      };
    },
    validators: {
      email: function (value) {
        return Validator.value(value).required().email();
      }
    },
    methods: {
      submit: function () {
        this.$validate()
          .then(function (success) {
            if (success) {
              alert('Validation succeeded!');
            }
          });
      }
    }
  }
</script>
