<script>
  import { HTTP } from './http-common'

  export default {
    data: () => ({
      posts: [],
      errors: []
    }),

    beforeCreate () {
      this.$store.state.activeApp = 'examples'
    },

    created () {
      HTTP.get(`posts`)
      .then(response => {
        this.posts = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
    }
  }
</script>
