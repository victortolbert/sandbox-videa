<template lang="pug">
  vui-help.ng-isolate-scope(phone="'555'", email="'Victor.Tolbert@Videa.tv'", full-name="'Victor Tolbert'", spinner="'/Content/Images/spinner.gif'", agent-account="'57261000000CoF5'", agent-org="'00D61000000ed8X'", chat-path="'https://d.la1-c1-phx.salesforceliveagent.com/chat'", agent-id="'57361000000Cmcy'")
    .site-help.slideright-transition.close-drawer(data-ng-class="vm.open ? 'open-drawer' : 'close-drawer'")
      .wrapper.close-drawer(data-ng-class="vm.open ? 'open-drawer' : 'close-drawer'")
        .site-help__toggle(data-ng-click='vm.toggle()') Need Help?
        .site-help__content
          .contact-us(data-ng-show='vm.showContactUs()')
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
                .error
                  .ng-binding.ng-hide(data-ng-show='vm.errorMsg')
                .vui-col--bump-top
                  input#chatOnline.vui-button.vui-button--brand.chatOnline(type='submit', name='chatOnline', value='Start Chat', data-ng-click='vm.startChat()', style='display: none')
                  input#chatOffline.vui-button.vui-button--brand.chatOffline(type='button', name='chatOffline', value='Chat Offline', disabled='', style='')
              .vui-grid.vui-grid--vertical.vui-grid--align-end.vui-col--padded-large(style='width: 33.33%')
                h3.vui-text-heading--medium.vui-m-bottom--medium
                  span.vui-align-middle Contact Us
                  span.vui-align-middle.glyphicon.glyphicon-envelope.icon
                p Technical Support: support@videa.tv
                p.vui-m-bottom--medium
                  | Or, use our email form and we will get back to you within our support hours of 8:00am-11:00pm EST/EDT - Mon-Fri
                .vui-col--bump-top
                  input.vui-button.vui-button--brand(type='button', value='Contact Us', data-ng-click='vm.contactUs()')
          vui-help-email.ng-isolate-scope(email='vm.email', phone='vm.phone', full-name='vm.fullName', current-page='vm.currentPage', spinner='vm.spinner')
            div
              .content-sub.ng-hide(data-ng-show='vm.showEmailUs()')
                img.load-spinner.ng-hide(src='/Content/Images/spinner.gif', alt='Loading...', data-ng-show='vm.loading')
                form.ng-pristine.ng-valid-email.ng-valid-maxlength.ng-invalid.ng-invalid-required(name='vm.emailForm')
                  h1.vui-text-heading--large.vui-m-bottom--medium Email Us
                  .error
                    .ng-binding.ng-hide(data-ng-show='vm.errorMsg')
                  fieldset.vui-form-element.is-required(ng-class="vm.emailForm.email.$dirty && vm.emailForm.email.$invalid ? 'vui-has-error' : ''")
                    input#email.vui-input.ng-pristine.ng-untouched.ng-valid.ng-not-empty.ng-valid-email.ng-valid-required.ng-valid-maxlength(type='email', required='', data-ng-model='vm.formData.email', ng-model-options="{ updateOn: 'blur' }", data-ng-maxlength='80', name='email', size='20', placeholder='email')
                    .vui-form-element__help
                      .ng-hide(data-ng-show='vm.emailForm.email.$dirty && vm.emailForm.email.$error.required')  Email is required.
                      .ng-hide(data-ng-show='vm.emailForm.email.$dirty && vm.emailForm.email.$error.email') Email is invalid
                      .ng-hide(data-ng-show='vm.emailForm.email.$error.maxlength')  Email is too long.
                  fieldset.vui-form-element.is-required(ng-class="vm.emailForm.description.$dirty && vm.emailForm.description.$invalid ? 'vui-has-error' : ''")
                    textarea.vui-textarea.ng-pristine.ng-untouched.ng-empty.ng-invalid.ng-invalid-required(name='description', rows='10', cols='50', placeholder='Your message goes here!', data-ng-model='vm.formData.description', required='')
                    .vui-form-element__help
                      .ng-hide(data-ng-show='vm.emailForm.description.$dirty && vm.emailForm.description.$error.required')  Message is required.
                  fieldset.vui-form-element
                    input.vui-button.vui-button--brand(type='submit', value='Send Email', data-ng-disabled='vm.emailForm.$invalid', data-ng-click='vm.sendEmail()', disabled='disabled')
              .content-sub-half.ng-hide(data-ng-show='vm.showEmailSent()')
                vui-help-email-submitted.ng-isolate-scope
                  .vui-help
                    h1.vui-text-heading--large.vui-m-bottom--medium Email Us
                    h2.vui-text-heading--medium.vui-m-bottom--medium Email sent!
                    p We will respond to your email within the next 24 hours.

</template>
