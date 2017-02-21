<template lang="pug">
div(
  v-bind:class="textarea?['row']:computedClass")
  slot(name="icon")
  input(
    v-el:input
    v-if="!textarea"
    v-bind:class="inputClass"
    v-bind:style="inputStyle"
    v-bind:type="type"
    v-bind:disabled="disabled"
    v-bind:readonly="readonly"
    v-bind:autofocus="autofocus"
    v-bind:placeholder="placeholder"
    v-model="value"
    @focus="onInputFocus"
    @blur="onInputBlur"
    @keyup.enter="onConfirmTrigger"
    )
  label(
    v-if="(label || type=='search') && !textarea"
    style="pointer-events: none"
    v-bind:class="{active: isActive}"
    v-bind:data-error="dataError"
    v-bind:data-success="dataSuccess"
  ) {{label}}
    slot(name="label")
  slot(name="iconafter")
  span.character-counter(
    v-if="length > 0 && !textarea"
    style="float:right;font-size:12px;height:0px"
    ) {{lengthString}}
  text-area(
    v-ref:input
    v-if="textarea"
    v-bind:class="computedClass"
    v-bind:taclass="inputClass"
    v-bind:style="inputStyle"
    v-bind:type="type"
    v-bind:readonly="readonly"
    v-bind:disabled="disabled"
    v-bind:autofocus="autofocus"
    v-bind:value="value"
    no-extra-line
    @input="onInput"
    @focus="onInputFocus"
    @blur="onInputBlur"
    @keyup.enter="onConfirmTrigger"
    )
    span(
      slot="placeholder"
      v-if="placeholder"
      ) {{placeholder}}
    label(
      slot="label"
      v-if="label"
      style="pointer-events: none"
      v-bind:class="{active: isActive}"
      v-bind:data-error="dataError"
      v-bind:data-success="dataSuccess"
      ) {{label}}
    span.character-counter(
      slot="label"
      v-if="length > 0"
      style="float:right;font-size:12px;height:0px"
      ) {{lengthString}}
</template>

<script>
  export default {
    components: {
      "text-area": require("vue-textarea")
    },

    mixins: [require("vue-mixins/class")],

    props: {
      "class": {
        "default": function() {
          return [];
        }
      },
      "placeholder": {
        type: String,
        "default": ""
      },
      "readonly": {
        type: Boolean
      },
      "autofocus": {
        type: Boolean
      },
      "textarea": {
        type: Boolean
      },
      "type": {
        type: String
      },
      "disabled": {
        type: Boolean
      },
      "validate": {
        type: Function,
        "default": function() {
          return null;
        }
      },
      "dataError": {
        type: String,
        "default": ""
      },
      "dataSuccess": {
        type: String,
        "default": ""
      },
      "label": {
        type: String,
        "default": ""
      },
      "value": {
        type: String,
        "default": ""
      },
      "length": {
        type: Number,
        "default": 0,
        coerce: Number
      }
    },

    data () {
      return {
        isFocused: false,
        isActive: false,
        isValid: null
      };
    },

    computed: {
      mergeClass () {
        return {
          'input-field': true,
          col: true
        }
      },

      inputClass () {
        return {
          validate: this.dataError || this.dataSuccess,
          invalid: (this.isValid != null) && !this.isValid,
          valid: (this.isValid != null) && this.isValid,
          'materialize-textarea': this.textarea
        }
      },

      lengthString () {
        if (this.isFocused) {
          return this.value.length + ' / ' + this.length
        }
        return ''
      }
    },

    methods: {
      onInput (val) {
        return this.value = val
      },

      setValid () {
        this.isValid = true
        return this.$emit('valid', this.value)
      },

      setInvalid () {
        this.isValid = false
        return this.$emit('invalid', this.value)
      },

      setActive () {
        return this.isActive = true
      },

      setInactive () {
        return this.isActive = false
      },

      setFocused () {
        var child, i, len, ref, results
        this.isFocused = true
        ref = this.$el.children
        results = []
        for (i = 0, len = ref.length; i < len; i++) {
          child = ref[i]
          if (child.nodeName === 'I') {
            if (child.classList) {
              results.push(child.classList.add('active'))
            } else {
              results.push(child.className += ' active')
            }
          } else {
            results.push(void 0)
          }
        }
        return results
      },

      setUnfocused () {
        var child, i, len, ref, results
        this.isFocused = false
        ref = this.$el.children
        results = []
        for (i = 0, len = ref.length; i < len; i++) {
          child = ref[i]
          if (child.nodeName === 'I') {
            results.push(child.className = child.className.replace(' active', ''))
          } else {
            results.push(void 0)
          }
        }
        return results
      },

      checkValidity () {
        var result
        if (this.value) {
          result = this.validate(this.value)
          if (result != null) {
            if (result.then != null) {
              return result.then(this.setValid)['catch'](this.setInvalid)
            } else {
              if (result) {
                return this.setValid()
              } else {
                return this.setInvalid()
              }
            }
          } else if (this.length && this.value.length > this.length) {
            return this.isValid = false
          } else {
            return this.isValid = null
          }
        } else {
          if (!(this.isFocused || this.placeholder)) {
            this.setInactive()
          }
          return this.isValid = null
        }
      },

      focus () {
        var ref, ref1
        if ((ref = this.$els.input) != null) {
          ref.focus()
        }
        return (ref1 = this.$refs.input) != null ? ref1.focus() : void 0
      },

      blur () {
        var ref, ref1;
        if ((ref = this.$els.input) != null) {
          ref.blur()
        }
        return (ref1 = this.$refs.input) != null ? ref1.blur() : void 0
      },

      onInputFocus () {
        this.setActive()
        if (!this.readonly) {
          this.setFocused()
        }
        return this.$emit('focus')
      },

      onInputBlur () {
        this.setUnfocused()
        if (!(this.value || this.placeholder)) {
          this.setInactive()
        }
        return this.$emit('blur')
      },

      onChangeTrigger () {
        this.$emit('change', arguments)
        return this.checkValidity()
      },

      onConfirmTrigger () {
        if (!this.isInvalid) {
          return this.$emit('confirm')
        }
      }
    },

    watch: {
      'value': 'onChangeTrigger'
    },

    ready () {
      if (this.value) {
        this.checkValidity()
      }
      if (this.autofocus || this.value || this.placeholder) {
        this.setActive()
        if (!(this.readonly || this.placeholder)) {
          return this.setFocused()
        }
      }
    }
  }
</script>
