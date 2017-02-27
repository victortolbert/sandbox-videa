<template lang="pug">
  vui-modal(size='large')
    .modal-header.vui-m-bottom--large
      h3.vui-text-heading--medium  Edit Sales Rep
    .modal-body
      p.vui-m-bottom--small Check the box next to the Sales rep you would like to add. Uncheck the box to remove a Sales Rep.

      form
        fieldset.vui-form-element.vui-m-bottom--large
          input.vui-input(
            placeholder = 'Search'
          )

        .vui-scrollable--x
          table.vui-table.vui-m-bottom--medium
            thead
              tr
                th
                th Sales Rep
                th Office
            tbody
              tr(
                v-for = '(index, rep) in reps'
              )
                td.u-width-xx-small.vui-text-align--center
                  .vui-form-element
                    .vui-form-element__control
                      .vui-checkbox
                        input(
                          type = 'checkbox'
                          v-bind:checked = 'rep.checked'
                        )
                        span.vui-checkbox--faux
                td {{ rep.name }}
                td {{ rep.office}}

        .vui-grid.vui-grid--align-end
          fieldset.vui-form-element
            button.vui-button.vui-button--neutral.vui-m-right--xx-small(
              @click.prevent = 'close'
            ) Cancel
            button.vui-button.vui-button--brand Save
</template>

<script>
  export default {
    data () {
      return {
        comment: '',
        reps: [
          {
            name: 'Adamy, John',
            office: 'New York, NY',
            checked: false
          },
          {
            name: 'Admire, Tony',
            office: 'Austin, TX',
            checked: false
          },
          {
            name: 'Akens, Phil',
            office: 'New York, NY',
            checked: false
          },
          {
            name: 'Aden, Michael',
            office: 'Chicago, IL',
            checked: false
          },
          {
            name: 'Adel, Joe',
            office: 'Atlanta, GA',
            checked: false
          }
        ]
      }
    }
  }
</script>
