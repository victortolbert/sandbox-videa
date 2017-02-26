<template lang="pug">
  #example
    select(v-model='exampleName')
      option(v-for="example in ['', ...examples]") {{ example.name }}

    button(@click='showModal = true') Show it

    simple-dialog(v-if="exampleName==='Simple'", :showmodal='showModal', :close-action='closeDialog')
    full-dialog(v-if="exampleName==='Full'", :showmodal='showModal', :close-action='closeDialog', :click-action='clickAction')
</template>

<script>
  import SimpleDialog from '~components/no-framework/modal/simple-dialog'
  import FullDialog from '~components/no-framework/modal/full-dialog'

  export default {
    components: { SimpleDialog, FullDialog },

    data () {
      return {
        showModal: false,
        exampleName: '',
        examples: [
          {
            name: 'Simple',
            text: 'A simple example with header and footer text.'
          },
          {
            name: 'Full',
            text: 'A more complex example with a button in the footer.'
          }
        ]
      }
    },

    computed: {
      exampleText () {
        if (!this.exampleName) return ''
        let exampleArray = this.examples.filter(ex => ex.name === this.exampleName)
        return exampleArray[0].text
      }
    },

    methods: {
      closeDialog () {
        this.showModal = false
      },
      clickAction () {
        this.exampleName = ''
        this.showModal = false
      }
    }
  }
</script>
