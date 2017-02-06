<template lang="pug">
  fieldset.quarter-selector.vui-form-element.vui-m-right--small
    .vui-grid
      .vui-form-element
        label.vui-form-element__label Quarter
        .vui-form-element__control.vui-grid
          label.vui-radio(for='q1')
            input#q1(type='radio', name='when')
            span.vui-radio--faux.vui-m-right--x-small
            span.vui-form-element__label Q1
          label.vui-radio(for='q2')
            input#q2(type='radio', name='when', checked='true')
            span.vui-radio--faux.vui-m-right--x-small
            span.vui-form-element__label Q2
          label.vui-radio(for='q3')
            input#q3(type='radio', name='when')
            span.vui-radio--faux.vui-m-right--x-small
            span.vui-form-element__label Q3
          label.vui-radio(for='q4')
            input#q4(type='radio', name='when')
            span.vui-radio--faux.vui-m-right--x-small
            span.vui-form-element__label Q4
          label.vui-radio.vui-m-right--large(for='all')
            input#all(type='radio', name='when')
            span.vui-radio--faux.vui-m-right--x-small
            span.vui-form-element__label All
      .vui-form-element
        label.vui-form-element__label Year
        .vui-form-element__control
          .vui-select_container
            select.vui-select(v-model='selectedQuarter')
              option(value='') Select Quarter
              option(v-for='quarter in quarters') {{ quarter }}
</template>

<script>
  export default {
    data () {
      return {
        selectedQuarter: '2017',
        quarters: [
          '2013',
          '2014',
          '2015',
          '2016',
          '2017',
          '2018'
        ]
      }
    }
  }
</script>
