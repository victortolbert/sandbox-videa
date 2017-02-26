<template lang="pug">
  .vui-container
      ul
        li
          router-link(
            v-bind:to = '{ name: "tickets" }'
            exact
          ) Open Tickets
</template>
