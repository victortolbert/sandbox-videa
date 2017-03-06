<template lang="pug">
  footer.vui-site-footer(
    role = 'contentinfo'
  )
    .vui-container
      nav.vui-navigation--footer.vui-grid.vui-grid--align-center
        ul.vui-list--horizontal.vui-has-dividers--right
          li.vui-list__item
            router-link(
              v-bind:to = '{ name: "privacy" }'
            ) Privacy Policy
          li.vui-list__item
            router-link(
              v-bind:to = '{ name: "terms" }'
            ) Terms &amp; Conditions
          //- li.vui-list__item
          //-   a(
          //-     @click.prevent = 'toggleDebug'
          //-   ) Toggle Debug Tools
          //- li.vui-list__item
          //-   a(
          //-     @click.prevent = 'fontSize++'
          //-   ) Increase Font Size
          //- li.vui-list__item
          //-   a(
          //-     @click.prevent = 'fontSize--'
          //-   ) Decrease Font Size

      //- p(v-bind:style="{ fontSize: fontSize + 'px' }").
      p(v-bind:style="[baseStyles, overrideStyles]").
        3390 Peachtree Road, NE, Suite 400 Atlanta, GA 30326 #[br]
        Copyright © 2014&ndash;{{ new Date().getFullYear() }} Videa. All rights reserved.
</template>

<script>
  export default {
    data: () => ({
      fontSize: 16,
      baseStyles: {
        fontWeight: 800,
        color: 'red'
      },
      overrideStyles: {
        fontWeight: 400,
        color:'white'
      }
    }),

    methods: {
      toggleDebug () {
        document.documentElement.classList.toggle('debug')
      },
    }
  }
</script>
