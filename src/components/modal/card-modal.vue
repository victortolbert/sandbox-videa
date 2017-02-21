<template lang="pug">
  transition(
    @afterenter = 'afterEnter'
    @afterleave = 'afterLeave'
    @beforeenter = 'beforeEnter'
    @beforeleave = 'beforeLeave'
    v-bind:appear-active-class = 'enterClass'
    v-bind:enter-active-class = 'enterClass'
    v-bind:leave-active-class = 'leaveClass'
    v-bind:name = 'transition'
    appear
    mode = 'in-out'
  )
    div(
      v-bind:class = 'classes'
      v-if = 'show'
    )
      .modal-background(
        @click = 'deactive'
      )
      .modal-card
        header.modal-card-head
          p.modal-card-title {{ title }}
          button.delete(
            @click = 'deactive'
          )
        section.modal-card-body
          slot
        footer.modal-card-foot
          a.button.is-primary(
            @click = 'ok'
          ) {{ okText }}
          a.button(
            @click = 'cancel'
          ) {{ cancelText }}
</template>

<script>
  import BaseModal from './base-modal'

  export default {
    mixins: [BaseModal],

    props: {
      title: {
        type: String
      },
      okText: {
        type: String,
        default: 'Ok'
      },
      cancelText: {
        type: String,
        default: 'Cancel'
      }
    },

    computed: {
      classes () {
        return ['modal', 'animated', 'is-active']
      }
    },

    methods: {
      ok () {
        this.$emit('ok')
      },
      cancel () {
        this.$emit('cancel')
      }
    }
  }
</script>
