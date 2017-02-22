<template lang="pug">
  .example
    .row
      .col-xs-12.col-sm-12.col-md-6.col-lg-6
        p
          pre Normal select data: {{select.normal}}

        form(action='./#select', method='get')
          v-select(
            v-bind:clear-button = 'select.clearButton'
            v-bind:disabled = 'select.disabled'
            v-bind:options = 'select.options'
            v-bind:placeholder = "select.placeholder?'Using placeholder':null"
            v-bind:required='select.required'
            v-bind:search = 'select.search'
            v-model = 'select.normal'
            name = 'animal'
            options-value = 'val'
          )
          button.vui-button.vui-button--neutral(@click.prevent='' type='submit') Submit

      .col-xs-12.col-sm-12.col-md-6.col-lg-6

        p
          pre Multiple select data : {{select.multiple.join(',')}}

        form(action='./#select', method='get')
          v-select(
            v-bind:clear-button = 'select.clearButton'
            v-bind:close-on-select='select.closeOnSelect'
            v-bind:disabled='select.disabled'
            v-bind:limit='select.limit?3:1024'
            v-bind:options = 'select.options'
            v-bind:placeholder = "select.placeholder?'Using placeholder':null"
            v-bind:required = 'select.required'
            v-bind:search = 'select.search'
            v-model = 'select.multiple'
            multiple = ''
            name = 'animals[]'
            options-value = 'val'
          )
          button.vui-button.vui-button--neutral(@click.prevent='' type='submit') Submit

    button-group(type='primary', :buttons='false')
      .row
        .col-xs-12.col-sm-12.col-md-6.col-lg-6
          p
            checkbox(v-model='select.disabled') Disabled
          p
            checkbox(v-model='select.placeholder') Placeholder
          p
            checkbox(v-model='select.search') Search
          p
            checkbox(v-model='select.clearButton') Clear Button

        .col-xs-12.col-sm-12.col-md-6.col-lg-6
          p
            checkbox(v-model='select.required') Required (empty value if noting selected)
          p
            | Multiple:
            checkbox(v-if='select.multiple', v-model='select.limit') Limit (e.g. 3)
            checkbox(v-if='select.multiple', v-model='select.closeOnSelect') Close on Select


    button-group(justified='')

      v-select(multiple='', clear-button='')
        v-option(value='apple') Apple
        v-option(value='banana') Banana
        v-option(value='cherry') Cherry
        v-option(value='cranberry') Cranberry
        v-option(value='grape') Grape
        v-option(value='orange') Orange
        v-option(value='passionfruit') Passionfruit
        v-option(value='pineapple') Pineapple
        v-option(value='strawberry') Strawberry
        v-option(value='a') Apple
        v-option(value='b') Banana
        v-option(value='c') Cherry
        v-option(value='c') Cranberry
        v-option(value='g') Grape
        v-option(value='o') Orange
        v-option(value='p') Passionfruit
        v-option(value='p') Pineapple
        v-option(value='s') Strawberry
</template>

<script>
  import ButtonGroup from '~components/button-group'
  import checkbox from '~components/checkbox'
  import vSelect from '~components/select'
  import vOption from '~components/option'

  export default {
    components: {
      ButtonGroup,
      checkbox,
      vSelect,
      vOption
    },

    data () {
      return {
        select: {
          clearButton: false,
          closeOnSelect: false,
          disabled: false,
          justified: true,
          limit: false,
          multiple: [],
          options: [
            { val: 0, label: 'Cat' },
            { val: 1, label: 'Cow' },
            { val: 2, label: 'Dog' },
            { val: 3, label: 'Elephant' },
            { val: 4, label: 'Fish' },
            { val: 5, label: 'Lion' },
            { val: 6, label: 'Tiger' },
            { val: 7, label: 'Turtle '}
          ],
          placeholder: false,
          required: false,
          search: true
        },
        ajax: {
          options: [],
          value: null
        },
        single: []
      }
    }
  }
</script>
