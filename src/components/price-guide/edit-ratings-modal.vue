<template lang="pug">
  vui-modal(size = 'large')
    .modal-header.vui-m-bottom--large
      h3.vui-text-heading--medium.vui-grid.vui-grid--align-spread
        span Edit Ratings
        a.vui-text-align--right(@click.prevent = '$emit("close")')
          vui-icon(name='close')
    .modal-body
      .vui-grid.vui-grid--align-spread.vui-p-around--small(style='background-color: white')
        .vui-media
          .vui-media__body
            p.vui-align-middle
              span.vui-m-right--xx-small Station Rate
              span.vui-text-heading--medium  ${{ context.station.rate }}

      .vui-scrollable--x.vui-m-bottom--large(style='height: 20rem; overflow-x: hidden; overflow-y: scroll')

        table.vui-table.vui-no-row-hover
          thead
            tr
              th Demo
              th.u-width-medium Station Rating
              th.u-width-small
                | CPP
                sup 1
              th.u-width-small
                | Premium CPP
                sup 1
              th.u-width-medium Videa Rating
              th.u-width-small
                | CPP
                sup 1

          tbody
            tr(
              v-bind:class = '(index % 2 === 0) ? "vui-highlight" : ""'
              v-for = '(demo, index) in context.station.demos',
            )
              td {{ demo.name }}
              td
                input.vui-input.vui-text-align--right(
                  v-bind:value = 'demo.rating | formatRating'
                  v-model = 'demo.rating'
                )
              td.vui-text-align--right
                cpp(
                  v-bind:rate = 'context.station.rate'
                  v-bind:rating = 'demo.rating'
                )
              td.vui-text-align--right
                cpp(
                  v-bind:rate = 'context.station.premium.rate'
                  v-bind:rating = 'demo.rating'
                )
              td.vui-text-align--right {{ demo.rating | formatRating }}
              td.vui-text-align--right
                cpp(
                  v-bind:rate = 'context.station.rate'
                  v-bind:rating = 'demo.rating'
                )

      .vui-grid.vui-grid--align-end
        button.vui-button.vui-button--neutral.vui-m-right--x-small(@click.prevent='$emit("close")') Cancel
        button.vui-button.vui-button--brand(@click.prevent='saveEditedRatings(context)') Save
</template>

<script>
  import { EventBus } from '~plugins/event-bus'

  export default {
    props: {
      show: Boolean,
      heading: String,
      data: Object,
      context: Object,
    },

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
    },

    // mounted () {
    //   EventBus.listen('display-edit-ratings-modal', (context) => {
    //     this.show = true
    //     this.context = context
    //   })
    // }
  }
</script>
