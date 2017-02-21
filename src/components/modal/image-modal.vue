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
      .modal-background(@click="deactive")
      .modal-content
        slot
      button.modal-close(@click="deactive" v-if="closable")
  </transition>
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
