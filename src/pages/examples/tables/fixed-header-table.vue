<template lang="pug">
  div
    table.table.is-narrow.table-sm(
      v-bind:style="{'font-size': tableStyles.fontSize}",
      v-bind:class="{\
        'table-bordered is-bordered': isBordered,\
        'table-striped is-striped': isStriped\
      }",
      style='margin-bottom:0;border-bottom:0;width: calc(100%)'
    )
      thead(v-bind:class='headerClass')
        slot(name='table-header')
    .fixed-header-table-container(
      style='overflow: overlay',
      v-bind:style="{ height: tableHeight || ''}"
    )
      table.table.is-narrow(
        v-bind:class = 'bodyClass'
        v-bind:style = "{'font-size': tableStyles.fontSize}"
        style = 'margin-bottom:0; border-bottom:0'
      )
        slot(name='table-body')
        //
          tbody(v-if='isLoading')
            tr
              td(colspan='100', rowspan='10')
                | Loading...
          slot(v-else='', name='table-body')

</template>
<script>
  export default {
    name: 'fixed-header-table',

    props: {
      isLoading: { type: Boolean, default: false },
      isStriped: { type: Boolean, default: false },
      isBordered: { type: Boolean, default: false },
      tableHeight: { type: String },
      rowClass: { type: String, default: 'fixed-headers' },
      tableStyles: {
        type: Object,
        default () {
          return { 'fontSize': '1rem' }
        }
      }
    },

    created () {
       var timeout = null
       window.addEventListener('resize', (e) => {
        if(!timeout) {
          timeout = window.setTimeout(this.syncWidths, .5e3)
        } else {
          window.clearTimeout(timeout)
          timeout = window.setTimeout(this.syncWidths, .5e3)
        }
      })
    },

    mounted () {
      this.syncWidths()
    },

    updated () {
      this.syncWidths()
    },

    methods: {
      syncWidths () {
        syncWidths(this.headerClassName, this.bodyClassName, this.$el )
      }
    },

    computed: {
      headerClassName () {
        let rc = (this.rowClass || 'fixed-headers').replace(/\s/g,'-')
        return rc + '-table-header'
      },

      bodyClassName () {
        let rc = (this.rowClass || 'fixed-headers').replace(/\s/g,'-')
        return rc + '-table-body'
      },

      headerClass () {
        let c = this.headerClassName
        return { [c]: true }
      },

      bodyClass () {
        let c = this.bodyClassName
        return { [c]: true, 'is-bordered': this.isBordered, 'is-striped': this.isStriped }
      }
    }
  }
  const isIE = !!(typeof window.msRequestAnimationFrame === 'function')
  function syncWidths(headerClassName, bodyClassName, el = document) {
    if(!(el && el.querySelector)) return console.log('nope')
    let match = el.querySelector('.'+headerClassName)
    //console.log('trying to sync - match:', match)
    let matchWith = el.querySelector('.' + bodyClassName+ ' > tbody')
    //console.log('trying to sync - match with:', matchWith)
    if(!(match && matchWith)) return false
    let tds = matchWith.rows[0] && matchWith.rows[0].children
    let ths = match.rows[0] && match.rows[0].children
    if(tds && ths) {
      let max = tds.length
      for(let i = 0; i < max; i++) {
        let computed = getComputedStyle(tds[i])
        if(!isIE) {
          ths[i].style.width = computed.width
        } else {
            let width = +computed.width.replace('px', '');
            let paddingLeft = +(computed.paddingLeft.replace('px', '')||0);
            let paddingRight = +(computed.paddingRight.replace('px', '')||0);
            let borderLeftWidth = +(computed.borderLeftWidth.replace('px', '')||0);
            let borderRightWidth = +(computed.borderRightWidth.replace('px', '')||0);
            ths[i].style.width = width + paddingRight + paddingLeft + borderLeftWidth + borderRightWidth + 'px'
        }
      }
      //console.log('sync complete:', headerClassName, bodyClassName)
    }
/**
    var windowresizefiring = false
    var timeout = null
    window.addEventListener('resize', (e) => {
      if(!timeout) {
        timeout = window.setTimeout(syncWidths, .5e3)
      } else {
        window.clearTimeout(timeout)
        timeout = window.setTimeout(syncWidths, .5e3)
      }
    })
**/
  }
</script>
