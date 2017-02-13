<template lang="pug">
  li.has-dropdown(
    v-bind:class = 'openedClass'
  )
    a(
      v-on:click.prevent = 'open(id)'
    ) {{ label }}
    ul.dropdown
      slot
</template>

<script>
  import { EventBus } from '~plugins/event-bus'

  export default {
    props: {
      id: {
        type: Number,
        required: true
      },
      label: {
        type: String,
        required: true
      },
      isOpened: {
        type: Boolean,
        required: true
      }
    },
    computed: {
      openedClass () {
        return this.isOpened
          ? 'opened'
          : null
      }
    },
    methods: {
      open () {
        EventBus.fire('open-sub-navigation', this.id)
      }
    }
  }
</script>
