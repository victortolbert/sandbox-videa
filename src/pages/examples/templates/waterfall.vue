<template lang="pug">
  //- waterfall(:line-gap='200', :watch='items')
  //-   waterfall-slot(
  //-     v-for = '(item, index) in items'
  //-     v-bind:width = 'item.width'
  //-     v-bind:height = 'item.height'
  //-     v-bind:order = 'index'
  //-     v-bind:key = 'item.id'
  //-   )
</template>

<script>
  // import Waterfall from 'vue-waterfall/lib/waterfall'
  // import WaterfallSlot from 'vue-waterfall/lib/waterfall-slot'

  // export default {
  //   components: {
  //     Waterfall,
  //     WaterfallSlot
  //   },

  //   data () {
  //     return {
  //       align: 'center',
  //       items: ItemFactory.get(100),
  //       isBusy: false
  //     }
  //   },

  //   methods: {
  //     addItems () {
  //       if (!this.isBusy && this.items.length < 500) {
  //         this.isBusy = true
  //         this.items.push.apply(this.items, ItemFactory.get(50))
  //       }
  //     },

  //     shuffle () {
  //       this.items.sort(function () {
  //         return Math.random() - 0.5
  //       })
  //     },

  //     reflowed () {
  //       this.isBusy = false
  //     }
  //   }
  // }

  // document.body.addEventListener('click', function () {
  //   app.shuffle()
  //   // app.$refs.waterfall.$emit('reflow') // manually trigger reflow action
  // }, false)

  // window.addEventListener('scroll', function () {
  //   var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
  //   if (scrollTop + window.innerHeight >= document.body.clientHeight) {
  //     app.addItems()
  //   }
  // })

</script>
