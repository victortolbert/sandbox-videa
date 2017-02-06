<template lang="pug">
  .vui-dropdown-trigger.vui-dropdown-trigger--click(
    @click = 'toggle'
    v-bind:aria-expanded = 'show'
    v-bind:class = '{ "vui-is-open": show }'
    v-bind:disabled = 'disabled'
  )
    //- button.vui-button.vui-button--icon-container(aria-haspopup='true')
    span(
      style = 'text-decoration: underline; color: white'
    ) {{ text }}
    .vui-dropdown.vui-dropdown--wide(
      v-bind:class = '{ "vui-nubbin--top": nubbinTop, "vui-nubbin--top-left": nubbinLeft, "vui-nubbin--top-right": nubbinRight }'
      v-bind:style = 'styleObject'
    )
      .vui-dropdown__list(
        role = 'menu'
      )

        // Form
        form.vui-form--inline.vui-p-around--large

          // Premium Percent Fieldset
          fieldset.vui-form-element.vui-m-bottom--large.vui-m-right--small
            label.vui-form-element__label(
              for = 'premium-percent'
            ) Premium %
            .vui-form-element__control
              input#premium-percent.vui-input.vui-m-right--small.vui-text-align--right(
                @click.prevent = ''
                style = 'width: 80px'
                type = 'text'
              )

          // Apply | Close Button Fieldset Group
          fieldset.vui-form-element
            button.vui-button.vui-button--brand.vui-m-right--small(
              @click.prevent = ''
            ) Apply To All
            button.vui-button.vui-button--neutral(
              @click.prevent = ''
            ) Close
</template>

<script>
  export default {
    props: {
      text: {
        type: String,
        default: ''
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },

    data () {
      return {
        show: false,
        nubbinLeft: false,
        nubbinRight: false,
        nubbinTop: true,
        styleObject: {
          backgroundColor: 'rgb(244, 246, 249)',
          width: '28rem',
          maxWidth: '28rem'
        }
      }
    },

    methods: {
      toggle (event) {
        this.show = !this.show
        if (this.show) {
          event.stopPropagation()
        } else {
        }
      },

      clicked (route) {
        this.show = false
        this.$route.router.push({
          name: route
        })
      }
    },

    events: {
      'hide::dropdown' () {
        this.show = false
      }
    }
  }
</script>
