<template lang="pug">
  .site-help.slideright-transition.open-drawer(:class="open ? 'open-drawer' : 'close-drawer'")
    .wrapper.open-drawer(:class="open ? 'open-drawer' : 'close-drawer'")
      .site-help__toggle(@click='toggle') Need Help?
      .site-help__content
        .contact-us(v-show='showContactUs')
          h1.vui-text-heading--large.vui-m-bottom--medium Contact Us
          .vui-grid.vui-grid--pull-padded-large
            .vui-grid.vui-grid--vertical.vui-col--padded-large.vui-col--rule-right(style='width: 33.33%')
              h3.vui-text-heading--medium.vui-m-bottom--medium.vui-grid
                span.vui-align-middle Call Us
                span.vui-align-middle.glyphicon.glyphicon-earphone.icon
              p We are available from 8:00am-11:00pm EST/EDT Mon - Fri.
              p Customer Service: 1(844)48VIDEA
            .vui-grid.vui-grid--vertical.vui-col--padded-large.vui-col--rule-right(style='width: 33.33%')
              h3.vui-text-heading--medium.vui-m-bottom--medium
                span.vui-align-middle Live Chat
                span.vui-align-middle.glyphicon.glyphicon-comment.icon
              p
                | Need fast help? From 8:00am-11:00pm EST/EDT Mon - Fri we are online and ready to help.
              .vui-col--bump-top
                input#chatOnline.vui-button.vui-button--brand.chatOnline(type='submit', name='chatOnline', value='Start Chat', @click='', style='display: none')
                input#chatOffline.vui-button.vui-button--brand.chatOffline(type='button', name='chatOffline', value='Chat Offline', disabled='', style='')
            .vui-grid.vui-grid--vertical.vui-grid--align-end.vui-col--padded-large(style='width: 33.33%')
              h3.vui-text-heading--medium.vui-m-bottom--medium
                span.vui-align-middle Contact Us
                span.vui-align-middle.glyphicon.glyphicon-envelope.icon
              p Technical Support: support@videa.tv
              p.vui-m-bottom--medium
                | Or, use our email form and we will get back to you within our support hours of 8:00am-11:00pm EST/EDT - Mon-Fri
              .vui-col--bump-top
                input.vui-button.vui-button--brand(type='button', value='Contact Us', @click='')
        div.vui-help-email
          .content(v-show='showEmailUs')
            //- img.load-spinner.ng-hide(src='/Content/Images/spinner.gif', alt='Loading...', v-show='loading')
            form(name='emailForm')
              h1.vui-text-heading--large.vui-m-bottom--medium Email Us
              fieldset.vui-form-element.is-required
                input#email.vui-input(type='email', required='', data-ng-model='formData.email', ng-model-options="{ updateOn: 'blur' }", data-ng-maxlength='80', name='email', size='20', placeholder='email')
                .vui-form-element__help
              fieldset.vui-form-element.is-required
                textarea.vui-textarea(name='description', rows='10', cols='50', placeholder='Your message goes here!', data-ng-model='formData.description', required='')
                .vui-form-element__help
              fieldset.vui-form-element
                input.vui-button.vui-button--brand(type='submit', value='Send Email' @click='', disabled='disabled')

          .content-sub-half(v-show='showEmailSent')
            .vui-help
              h1.vui-text-heading--large.vui-m-bottom--medium Email Us
              h2.vui-text-heading--medium.vui-m-bottom--medium Email sent!
              p We will respond to your email within the next 24 hours.
</template>

<script>
  export default {
    data () {
      return {
        open: false,
        showContactUs: true,
        showEmailSent: false,
        showEmailUs: false,
      }
    },
    methods: {
      toggle () {
        this.open = !this.open
      }
    }
  }
</script>

<style lang="stylus">
  .site-help
    width: 750px
    position: fixed
    top: 24rem
    right: 0
    background: #fff
    border: 4px solid #6a2565
    border-right: none
    z-index: 8000
  .site-help__toggle
    position: absolute
    display: inline-block
    margin-top: 7.89999rem
    margin-left: -3rem
    -webkit-transform: rotate(-90deg)
    transform: rotate(-90deg)
    -webkit-transform-origin: 0 0
    transform-origin: 0 0
    background-color: #6a2565
    color: #fff
    padding: .75rem 1.5rem
    cursor: pointer
  .site-help__content
    padding: 1.5rem
  .site-help__content .icon
    color: #5f9ea0
    margin-left: 10px
  .site-help.open-drawer
    -webkit-transform: translateX(0)
    transform: translateX(0)
    -webkit-animation: slide-in .3s
    animation: slide-in 0.3s
  .site-help.close-drawer
    -webkit-transform: translateX(100%)
    transform: translateX(100%)
  .site-help .load-spinner
    position: absolute
    top: 45%
    z-index: 9999
    left: 50%
  .site-help .chatOffline
    cursor: not-allowed
    // filter: alpha(opacity = 65)
    box-shadow: none
    opacity: 0.65

  @keyframes slide-in
    0%
      -webkit-transform: translateX(100%)
      transform: translateX(100%)
      opacity: 0
    to
      -webkit-transform: translateX(0)
      transform: translateX(0)
      opacity: 1

  @keyframes slide-out
    0%
      -webkit-transform: translateX(0)
      transform: translateX(0)
      opacity: 1
    to
      -webkit-transform: translateX(100%)
      transform: translateX(100%)
      opacity: 0
</style>
