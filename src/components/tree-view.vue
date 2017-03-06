<template lang="pug">
  .tree-view-wrapper
    tree-view-item.tree-view-item-root(
      :currentdepth = '0',
      :data = 'parsedData',
      :max-depth = 'maxDepth'
    )
</template>

<script>
  import axios from '~plugins/axios'
  import moment from 'moment'
  import _ from 'lodash'
  import TreeViewItem from './tree-view-item'

  export default {
    name: 'tree-view',
    props: ['data', 'max-depth'],
    components: { TreeViewItem },
    methods: {
      // Transformer for the non-Collection types,
      // like String, Integer of Float
      transformValue (valueToTransform, keyForValue) {
        return {
          key: keyForValue,
          type: 'value',
          value: valueToTransform
        }
      },

      // Since we use lodash, the _.map method will work on
      // both Objects and Arrays, returning either the Key as
      // a string or the Index as an integer
      generateChildrenFromCollection (collection){
        return _.map(collection, (value, keyOrIndex) => {
          if (this.isObject(value)) {
            return this.transformObject(value, keyOrIndex)
          }
          if (this.isArray(value)) {
            return this.transformArray(value, keyOrIndex)
          }
          if (this.isValue(value)) {
            return this.transformValue(value, keyOrIndex)
          }
        })
      },

      // Transformer for the Array type
      transformArray (arrayToTransform, keyForArray) {
        return {
          key: keyForArray,
          type: 'array',
          children: this.generateChildrenFromCollection(arrayToTransform)
        }
      },

      // Transformer for the Object type
      transformObject (objectToTransform, keyForObject, isRootObject = false) {
        return {
          key: keyForObject,
          type: 'object',
          isRoot: isRootObject,
          children: this.generateChildrenFromCollection(objectToTransform)
        }
      },

      // Helper Methods for value type detection
      isObject (value) {
        return _.isPlainObject(value)
      },

      isArray (value) {
        return _.isArray(value)
      },

      isValue (value) {
        return !this.isObject(value) && !this.isArray(value)
      }
    },

    computed: {
      parsedData () {
        // Take the JSON data and transform
        // it into the Tree View DSL
        return this.transformObject(this.data, 'root', true)
      }
    }
  }
</script>

<style lang="stylus">
  /* The Tree View should only fill out available space, scroll when
     necessary.
  */
  .tree-view-item
    font-family monospace
    font-size 14px
    margin-left 18px
  .tree-view-wrapper
    overflow auto
  /* Find the first nested node and override the indentation */
  .tree-view-item-root > .tree-view-item-leaf > .tree-view-item
    margin-left 0
  /* Root node should not be indented */
  .tree-view-item-root
    margin-left 0
  .tree-view-item-node
    cursor pointer
    position relative
    white-space nowrap
  .tree-view-item-leaf
    white-space nowrap
  .tree-view-item-key
    font-weight bold
  .tree-view-item-key-with-chevron
    padding-left 14px
  .tree-view-item-key-with-chevron.opened::before
    top 4px
    transform rotate(90deg)
    -webkit-transform rotate(90deg)
  .tree-view-item-key-with-chevron::before
    color #444
    content '\25b6'
    font-size 10px
    left 1px
    position absolute
    top 3px
    transition -webkit-transform .1s ease
    transition transform .1s ease
    transition transform .1s ease, -webkit-transform .1s ease
    -webkit-transition -webkit-transform .1s ease
  .tree-view-item-hint
    color #cccccc


</style>
