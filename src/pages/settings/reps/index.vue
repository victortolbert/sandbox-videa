<template lang="pug">
  .page.settings.reps.vui-p-around--x-large.vui-tabs--scoped__content(
    v-show = 'activeTab == "#reps-settings"'
    aria-labelledby = 'tab-scoped-1__item'
    role = 'tabpanel'
  )
    .vui-container--x-large
      h2.vui-text-heading--medium.vui-m-bottom--medium  Current Sales Reps

      .vui-scrollable--x.vui-m-bottom--medium
        table.vui-table
          thead
            tr
              th Sales Rep
              th Phone
              th Email
              th.vui-text-align--center Price Guide Access
              th Makegood Access
          tbody
            tr(
              v-for = 'rep in reps'
            )
              td {{ rep.name }}
              td {{ rep.phone }}
              td: a(href='mailto:you@example.com') {{ rep.email }}
              td.vui-text-align--center
                label.vui-checkbox
                  input#checkbox-01(
                    name = 'options'
                    type = 'checkbox'
                  )
                  span.vui-checkbox--faux
              td
                .vui-form-element
                  label.switch
                    input(
                      type = 'checkbox'
                    )
                    div.slider.round
                    span.option1 Read only
                    span.option2 Create
      button.vui-button.vui-button--brand Submit

      edit-sales-reps-modal(
        v-show = 'showEditSalesRepsModal'
        @close = 'showEditSalesRepsModal = false'
      )
</template>

<script>
  import EditSalesRepsModal from '~components/edit-sales-reps-modal'

  export default {
    beforeCreate () {
      this.$store.state.activeApp = 'sellers'
    },

    components: { EditSalesRepsModal },

    data () {
      return {
        newpassword: '',
        activeTab: '#reps-settings',
        showEditSalesRepsModal: false,
        reps: [
          {
            name: 'John Adamy',
            phone: '770-145-3867',
            email: 'john.adamy@coxreps.com'
          },
          {
            name: 'Tony Admire',
            phone: '770-145-3937',
            email: 'tony.admire@coxreps.com'
          },
          {
            name: 'Phil Akens',
            phone: '770-145-7364',
            email: 'phil.akens@coxreps.com'
          }
        ],
        settings: {
        }
      }
    },

    validators: {
      confirm (val) {
        return this.newpassword === val
      }
    },

    methods: {
      onKeyup () {
        alert('on keyup')
      },

      onSubmit (e) {
        // validate manually
        this.$validate(true)

        if (this.$validation.invalid) {
          e.preventDefault()
        }
      }
    }
  }
</script>
