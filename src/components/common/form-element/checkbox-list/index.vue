<template lang="pug">
  .checkbox-list
    .vui-form-element
      .vui-form-element__control
        label.vui-checkbox
          input(type='checkbox', v-model='selectAll')
          span.vui-checkbox--faux
          span.vui-form-element__label Check/Uncheck All
    .vui-form-element(v-for='item in items')
      .vui-form-element__control
        label.vui-checkbox
          input(type='checkbox', v-model.number='selected', name='items', :value='item.id')
          span.vui-checkbox--faux
          span.vui-form-element__label {{ item.name }}
</template>

<script>
  export default {
    props: {
      items: {
        type: Array,
        default () {
          return [
            {
              id: 1,
              name: 'Pass :items to this component'
            }
          ]
        }
      }
    },

    data () {
      return {
        selected: []
      }
    },

    computed: {
      selectAll: {
        get () {
          return this.items
            ? this.selected.length === this.items.length
            : false
        },
        set (value) {
          var selected = []

          if (value) {
            this.items.forEach((item) => {
              selected.push(item.id)
            })
          }

          this.selected = selected
        }
      }
    },

    methods: {
      toggleSelect () {
        var select = this.selectAll
        this.items.forEach((item) => {
          item.checked = !select
        })
        this.selectAll = !select
      }
    }
  }
</script>

<style lang="stylus">
  .checkbox-list .vui-form-element
    border-bottom 1px solid #eee
    padding 0.25rem 0 0.25rem 0.5rem

    &:hover
      background-color #eee
</style>
