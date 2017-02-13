<template lang="pug">
  .home
    input.vui-input(v-model = 'username')
    div(v-if = '!username') Please input your GitHub username
    fetch(
      v-else = '',
      v-bind:url = '`https://api.github.com/users/${username}`'
    )
      template(
        scope = '{ status, data, error }'
      )
        div(
          v-if = "status === 'pending'"
        ) Loading avatar for {{ username }}
        div(
          v-else-if = "status === 'success'"
        )
          img(
            v-bind:src = 'data.avatar_url'
          )
          fetch(
            v-bind:url = 'data.organizations_url'
          )
            template(
              scope = '{ status, data, error }'
            )
              div(
                v-if = "status === 'pending'"
              ) Loading organizations...
              div(
                v-else-if = "status === 'success'"
              )
                h2 Organizations
                p(
                  v-if = '!data.length'
                ) User doesn't belong to any organizations.
                fetch(
                  v-bind:url = 'org.url'
                  v-for = 'org in data'
                )
                  template(
                    scope = '{ status, data, error }'
                  )
                    div(
                      v-if = "status === 'pending'"
                    )
                      | Loading details for {{ org.login }}...
                    div(
                      v-else-if = "status === 'success'"
                    )
                      | {{ org.login }} ({{ data.name || 'full name not set' }})
                    div(
                      v-else-if = "status === 'error'"
                    ) {{ error }}
              div(
                v-else-if = "status === 'error'"
              ) {{ error }}
        div(
          v-else-if = "status === 'error'"
        ) {{ error }}
</template>

<script>
  import Fetch from '~components/fetch'

  export default {
    name: 'scoped-slots-example',

    metaInfo: {
      title: 'Example / Scoped Slots',
    },

    components: {
      Fetch
    },

    data () {
      return {
        username: ''
      }
    }
  }
</script>
