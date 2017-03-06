<template lang="pug">
  .tree-view-item
    .tree-view-item-leaf(v-if='isObject(data)')
      .tree-view-item-node(@click.stop='toggleOpen()')
        span.tree-view-item-key.tree-view-item-key-with-chevron(
          v-if = '!isRootObject(data)',
          :class = '{ opened: isOpen() }'
        ) {{ getKey(data) }}
        span.tree-view-item-hint(
          v-show = '!isOpen() && data.children.length === 1'
        ) {{ data.children.length }} property
        span.tree-view-item-hint(
          v-show = '!isOpen() && data.children.length !== 1'
        ) {{ data.children.length }} properties
      tree-view-item(
        v-for = 'child in data.children',
        v-show = 'isOpen()',
        :current-depth = 'currentDepth+1',
        :data = 'child',
        :max-depth = 'maxDepth'
      )
    .tree-view-item-leaf(v-if='isArray(data)')
      .tree-view-item-node(@click.stop='toggleOpen()')
        span.tree-view-item-key.tree-view-item-key-with-chevron(
          v-if = '!isRootObject(data)',
          :class = '{ opened: isOpen() }'
        ) {{ getKey(data) }}
        span.tree-view-item-hint(
          v-show = '!isOpen() && data.children.length === 1'
        ) {{ data.children.length }} item
        span.tree-view-item-hint(
          v-show = '!isOpen() && data.children.length !== 1'
        ) {{ data.children.length }} items
      tree-view-item(
        v-for = 'child in data.children',
        v-show = 'isOpen()',
        :current-depth = 'currentDepth+1',
        :data = 'child',
        :max-depth = 'maxDepth'
      )
    .tree-view-item-leaf(v-if='isValue(data)')
      span.tree-view-item-key {{ getKey(data) }}
      span.tree-view-item-value {{ getValue(data) }}
</template>

<script>
  import axios from '~plugins/axios'
  import moment from 'moment'
  import _ from 'lodash'

  export default {
    name: 'tree-view-item',
    props: ['data', 'max-depth', 'current-depth'],

    data: () => ({
      open: this.currentDepth < this.maxDepth
    }),

    methods: {
      isOpen () {
        return this.isRootObject(this.data) || this.open
      },

      toggleOpen () {
        this.open = !this.open
      },

      isObject (value) {
        return value.type === 'object'
      },

      isArray (value) {
        return value.type === 'array'
      },

      isValue (value) {
        return value.type === 'value'
      },

      getKey (value) {
        if (_.isInteger(value.key)) {
          return value.key + ':'
        } else {
          return '"' + value.key + '":'
        }
      },

      getValue (value){
        if (_.isNumber(value.value)) {
          return value.value
        }

        if (_.isNull(value.value)) {
          return 'null'
        }

        if (_.isString(value.value)) {}

        return '"' + value.value + '"';
      },

      isRootObject (value) {
        return value.isRoot
      }
    }
  }
</script>
