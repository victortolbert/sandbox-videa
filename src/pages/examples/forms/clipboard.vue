<template lang="pug">
  .container
    input(type='text', v-model='message')
    button(type='button', v-clipboard:copy='message') Copy!

</template>

<script>
  // import axios from '~plugins/axios'
  // import moment from 'moment'

  // // Simplistic detection, do not use it in production
  // function fallbackMessage(action) {
  //   var actionMsg = ''
  //   var actionKey = (action === 'cut' ? 'X' : 'C')

  //   if(/iPhone|iPad/i.test(navigator.userAgent)) {
  //     actionMsg = 'No support :('
  //   }
  //   else if (/Mac/i.test(navigator.userAgent)) {
  //     actionMsg = 'Press ⌘-' + actionKey + ' to ' + action
  //   }
  //   else {
  //     actionMsg = 'Press Ctrl-' + actionKey + ' to ' + action
  //   }

  //   return actionMsg
  // }

  export default {
    data: () => ({
      datacopy: 'https://github.com/victortolbert/sandbox.git',
      showTips: false,
      message: 'foo',
      arialabel: 'Copied!',
      datacut: 'Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo. Manduma pindureta quium dia nois paga.'
    }),
    methods: {
      copySucess (e) {
        console.log('copy sucess')
        this.arialabel = 'Copied!'
        this.showTips = true
      },
      copyError (e) {
        console.log('copy error')
        this.showTips = true
        this.arialabel = fallbackMessage()
      },
      handlerL () {
        this.showTips = false
      }
    }
  }
</script>

<style lang="scss" scoped>
  // @import "~primer-css/index.scss"
</style>

<style lang="stylus" scoped>
  body
    font-family: 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif
    font-size: 15px
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    color: #34495e
    margin: 0
    border-top: 2px solid #4fc08d
    background-color: #f8f8f8
    -webkit-box-sizing: border-box
    -moz-box-sizing: border-box
    box-sizing: border-box
  a.button
    text-decoration: none
    display: inline-block
    width: 280px
    margin: 0.5em
    font-family: 'Roboto Mono', Monaco, courier, monospace
    font-weight: 700
    color: #fff
    background-color: #4fc08d
    border-bottom: 2px solid #3aa373
    padding: 12px 14px
    border-radius: 4px
    transition: all 0.15s ease
  a.button:hover
    background-color: #5dc596
    -webkit-transform: translate(0, -2px)
    transform: translate(0, -2px)
  #social
    text-align: center
    list-style-type: none
    margin: 0 auto
    padding: 0
    margin: 1.5em auto
  #social li
    display: inline-block
    margin: 0 5px
    vertical-align: middle
  ul
    list-style-type: none
    padding: 0
    margin: 60px 0
  .header
    width: 960px
    margin: 0 auto
    min-height: 80px
    text-align: center
  .wrapper
    margin: 0 auto 90px
    max-width: 540px
    padding: 0 20px
  @media screen and (max-width: 700px)
    html,
      body
      margin: 0
    .header
      width: 100%
  /* Example
     ========================================================================== */
  .example
    position: relative
    margin: 15px 0 0
    padding: 39px 19px 14px
    background-color: #fff
    border-radius: 4px 4px
    border: 1px solid #ddd
    z-index: 2
  .example p
    color: #666
  .example:after
    content: "Example"
    position: absolute
    top: 0
    left: 0
    padding: 2px 8px
    font-size: 12px
    font-weight: bold
    background-color: #f5f5f5
    color: #9da0a4
    border-radius: 4px
  .example + .snippet
    background: #f8f8f8
    border-radius: 4px
    border: 1px solid #ddd
    clear: both
    top: -20px
    padding: 20px 0 0
  .clippy
    margin-top: -3px
    position: relative
    top: 3px
  .btn[disabled] .clippy
    opacity: .3
  /* Code
     ========================================================================== */
  .snippet
    position: relative
    overflow: visible
  .snippet code
    font-size: 12px
    line-height: 18px
  @media screen and (max-width: 768px)
    .snippet .btn
      display: none
  .snippet .btn
    -webkit-transition: opacity 0.3s ease-in-out
    -o-transition: opacity 0.3s ease-in-out
    transition: opacity 0.3s ease-in-out
    opacity: 0
    padding: 2px 6px
    position: absolute
    right: 4px
    top: 4px
  .snippet:hover .btn
    opacity: 1
  .example + .snippet .btn
    top: 22px
    right: 2px
  .form-actions
    margin-top: 15px
</style>
