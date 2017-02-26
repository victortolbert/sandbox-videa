<template lang="pug">
.examples
  .example
    label.typo__label Single select
    multiselect(
      v-bind:close-on-select = 'false'
      v-bind:options = 'simpleOptions'
      v-bind:searchable = 'false'
      v-bind:show-labels = 'false'
      v-model = 'simpleValue'
      placeholder = 'Pick a value'
    )
    pre.language-json
      code.
        {{ simpleValue  }}

  .example
    label.typo__label Single select / dropdown
    multiselect(
      v-bind:options = 'options'
      v-model = 'value'
      deselect-label = 'Can\'t remove this value'
      label = 'name'
      placeholder = 'Select one / Pick some'
      track-by = 'name'
    )
    pre.language-json
      code.
        {{ value  }}

  //- .example
  //-   label.typo__label Custom option template
  //-   multiselect(
  //-     v-bind:custom-label = 'customLabel'
  //-     v-bind:option-height = '104'
  //-     v-bind:options = 'customTemplateOptions'
  //-     v-bind:show-labels = 'false'
  //-     v-model = 'value'
  //-     placeholder = 'Fav No Man’s Sky path'
  //-     label = 'title'
  //-     track-by = 'title'
  //-   )
  //-     template(slot='option', scope='props')
  //-       img.option__image(v-bind:src='props.option.img', alt='No Man’s Sky')
  //-       .option__desc
  //-         span.option__title {{ props.option.title }}
  //-         span.option__small {{ props.option.desc }}
  //-   pre.language-json
  //-     code.
  //-       {{ customTemplateValue  }}
</template>

<script>
  import Multiselect from 'vue-multiselect'

  export default {
    name: 'mulitiselect-example',

    metaInfo: {
      title: 'Example / Multiselect',
    },

    components: { Multiselect },

    data () {
      return {
        simpleValue: null,
        simpleOptions: [
          'list',
          'of',
          'options'
        ],
        value: { name: 'Vue.js', language: 'JavaScript' },
        options: [
          { name: 'Vue.js', language: 'JavaScript' },
          { name: 'Rails', language: 'Ruby' },
          { name: 'Sinatra', language: 'Ruby' },
          { name: 'Laravel', language: 'PHP' },
          { name: 'Phoenix', language: 'Elixir' }
        ],
        customTemplateValue: {
          title: 'CMG University',
          desc: 'Discovering new species!',
          img: '/static/shared/img/icon-cmg-university.png'
        },
        customTemplateOptions: [
          { title: '401k', desc: 'More space battles!', img: '/static/shared/img/icon-401k.png' },
          { title: 'Balance', desc: 'PROFIT!', img: '/static/shared/img/icon-balance.png' },
          { title: 'Medical', desc: 'Discovering new species!', img: '/static/shared/img/icon-medical.png' },
          { title: 'Discounts', desc: 'We need to go deeper!', img: '/static/shared/img/icon-discounts.png' }
        ]
      }
    },

    methods: {
      customLabel ({ title, desc }) {
        return `${title} – ${desc}`
      }
    },

    beforeCreate () {
      this.$store.state.activeApp = 'examples'
    }
  }
</script>
