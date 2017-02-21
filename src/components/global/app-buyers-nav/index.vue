<template lang="pug">
  .vui-container.vui-grid.vui-grid--align-spread.vui-grid--vertical-align-center
      ul.vui-grid.vui-grow
        li
          router-link(
            v-bind:to = '{ name: "buyers-avails" }'
            exact
          ) Avails
        li
          router-link(
            v-bind:to = '{ name: "buyers-avails-request" }'
            exact
          ) Request Avails
      ul.actions.vui-align-middle
        li
          router-link.vui-button.vui-button--brand(
            v-bind:to = '{ name: "settings-user" }'
            style = 'color: white !important; white-space: nowrap'
            tag = 'button'
          )
            vui-icon.vui-m-right--x-small(
              name = 'cog'
            )
            span Settings
            span.vui-assistive-text Settings
</template>
