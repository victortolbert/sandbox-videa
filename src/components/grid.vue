<template>
  <table>
      <thead>
          <tr>
              <th v-for="(title, key) in headers"
                  @click="sortBy(key)"
              >
                  {{ title }}
                  <span v-if="orderBy == key">
                      {{ direction == 'asc' ? '▲' : '▼' }}
                  </span>
              </th>
          </tr>
      </thead>
      <tbody>
          <slot v-for="row in rows" :row="row"></slot>
      </tbody>
  </table>
</template>

<script>
  export default {
    props: ['rows', 'headers'],
    data () {
      return {
        orderBy: Object.keys(this.headers)[0],
        direction: 'asc'
      }
    },

    watch: {
      'orderBy': 'onChange',
      'direction': 'onChange'
    },

    methods: {
      onChange () {
        this.$emit('sorted', {
          orderBy: this.orderBy,
          direction: this.direction
        })
      },

      sortBy (key) {
        if (this.orderBy === key) {
          this.toggleDirection()
        } else {
          this.orderBy = key
          this.direction = 'asc'
        }
      },
      toggleDirection () {
        this.direction = this.direction === 'asc' ? 'desc' : 'asc'
      }
    }
  }
</script>
