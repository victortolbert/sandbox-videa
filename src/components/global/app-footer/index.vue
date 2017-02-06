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
      p.
        3390 Peachtree Road, NE, Suite 400 Atlanta, GA 30326 #[br]
        Copyright © 2014&ndash;{{ new Date().getFullYear() }} Videa. All rights reserved.
</template>
