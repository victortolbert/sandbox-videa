<template lang="jade">
  .designing-experiences
    grid
      vui-title Designing #[span Experiences]  ⇧  ⌥ ⌫ ⌦ ⌘

    grid
      vui-subtitle Engage your users with cognitive experiences
      p.
        The Design Guide provides guidelines and assets for designing and building cognitive experiences.
        Rendered consistently, these elements provide a coherent user experience across all Videa products,
        reinforcing our values and unique character.

    grid
      grid-item(size='1/3')
        h2 Principles
        p.
          These design principles provide the foundation for designing excellent cognitive experiences for users.
        button Principles

      grid-item(size='1/3')
        h2 Guidelines
        p.
          These style, interaction, and branding guides offer detailed recommendations for elements like color, typography, and motion.
        button Guidelines

      grid-item(size='1/3')
        h2 UI Paterns
        p.
          The UI pattern library contains the resources for building user interfaces, including basic HTML elements
          and more complex components
        button UI Patterns
    slot

</template>

<style lang="stylus">
  @import '~assets/variables'

  .designing-experiences

</style>

<script>
  import axios from '~plugins/axios'
  import moment from 'moment'

  export default {
    name: 'designing-experiences',

    metaInfo: {
      title: 'designing-experiences',
    },

    props: {},

    components: {},

    data: () => ({
      id: this.$route.params.id
    }),

    computed: {},

    methods: {},

    watch: {},

    beforeCreate () {},

    created () {},

    mounted () {}
  }
</script>
