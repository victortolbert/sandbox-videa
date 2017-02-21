<template lang="pug">
  transition(
    @afterEnter = "afterEnter"
    @afterLeave = "afterLeave"
    @beforeEnter = "beforeEnter"
    @beforeLeave = "beforeLeave"
    v-bind:appear-active-class = "enterClass"
    v-bind:enter-active-class = "enterClass"
    v-bind:leave-active-class = "leaveClass"
    v-bind:name = "transition"
    appear
    mode = "in-out"
  )
    div(
      v-bind:class = 'classes'
      v-if = 'show'
    )
      .modal-background(@click = 'deactive')
      .modal-container
        .modal-content
          slot
      button.modal-close(
        @click = 'deactive'
        v-if = 'closable'
      )
</template>

<script>
  import BaseModal from './base-modal'

  export default {
    mixins: [BaseModal],

    props: {
      closable: {
        type: Boolean,
        default: true
      }
    },

    computed: {
      classes () {
        return ['modal', 'animated', 'is-active']
      }
    }
  }
</script>
