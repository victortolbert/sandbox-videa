<template lang="pug">
  .handlers
    a(v-bind:href = 'telephoneAttribute')
      span.fa.fa-phone
      | 0800 800 800
    span.trigger(
      v-on:click.prevent = 'expand()'
    )
      span.fa.fa-bars
</template>

<script>
  import { EventBus } from '~plugins/event-bus'

  export default {
    props: {
      telephone: {
        type: String,
        required: true
      }
    },

    computed: {
      telephoneAttribute () {
        return 'tel:' + this.telephone.replace(/ /g,'')
      }
    },

    methods: {
      expand () {
        EventBus.fire('expand-navigation')
      }
    }
  }
</script>
