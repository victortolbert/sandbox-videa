<!-- http://taha-sh.com/blog/building-an-awesome-reusable-autocomplete-input-component-in-vue-21-part-two -->
<template lang="pug">
  .autocomplete-input
    p.control.has-icon.has-icon-right
      input.input.vui-input.is-large(
        @blur = 'isOpen = false'
        @input = 'onInput($event.target.value)'
        @keydown.down = 'moveDown'
        @keydown.enter = 'select'
        @keydown.up = 'moveUp'
        @keyup.esc = 'isOpen = false'
        v-model = 'keyword'
        placeholder = 'Search...'
      )
      i.fa.fa-angle-down
    ul.options-list(
      v-show = 'isOpen'
    )
      li(
        @mousedown = 'select'
        @mouseenter = 'highlightedPosition = index'
        v-bind:class = '{ "highlighted": index === highlightedPosition }'
        v-for = '(option, index) in fOptions'
      )
        slot(
          v-bind:description = 'option.description'
          v-bind:thumbnail = 'option.thumbnail'
          v-bind:title = 'option.title'
          name = 'item'
        )
</template>

<script>
  export default {
    props: {
      options: {
        type: Array,
        required: true
      }
    },
    data () {
      return {
        isOpen: false,
        highlightedPosition: 0,
        keyword: ''
      }
    },

    computed: {
      fOptions () {
        const re = new RegExp(this.keyword, 'i')
        return this.options.filter(o => o.title.match(re))
      }
    },

    methods: {
      onInput (value) {
        this.highlightedPosition = 0
        this.isOpen = !!value
      },

      moveDown () {
        if (!this.isOpen) {
          return
        }
        this.highlightedPosition = (this.highlightedPosition + 1) % this.fOptions.length
      },

      moveUp () {
        if (!this.isOpen) {
          return
        }
        this.highlightedPosition = this.highlightedPosition - 1 < 0 ? this.fOptions.length - 1 : this.highlightedPosition - 1
      },

      select () {
        const selectedOption = this.fOptions[this.highlightedPosition]
        this.$emit('select', selectedOption)
        this.isOpen = false
        this.keyword = selectedOption.title
      }
    }
  }
</script>

<style>
  .autocomplete-input {
    position: relative;
    height: 300px;
  }

  ul.options-list {
    display: flex;
    flex-direction: column;
    margin-top: -12px;
    border: 1px solid #dbdbdb;
    border-radius: 0 0 3px 3px;
    position: absolute;
    width: 100%;
    overflow: hidden;
  }

  ul.options-list li {
    width: 100%;
    flex-wrap: wrap;
    background: white;
    margin: 0;
    border-bottom: 1px solid #eee;
    color: #363636;
    padding: 7px;
    cursor: pointer;
  }

  ul.options-list li.highlighted {
    background: #f8f8f8
  }
</style>
