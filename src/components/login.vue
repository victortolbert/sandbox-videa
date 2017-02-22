<template lang="pug">
  form.vui-align-middle.ng-valid-email.ng-dirty.ng-valid-parse.ng-valid.ng-valid-required(role='form', method='POST', action='/login?signin=37356d6f52e7069d88130fd5ca12b963', novalidate='', name='login.loginForm', ng-submit='login.loginForm.$invalid && $event.preventDefault()')
    input(type='hidden', name='idsrv.xsrf', value='-N5s5NMviUW7qTkC5AqLBlrrDvj7h64d0iI6R7WEEjEU4cC3JTv29YyR0wQDwyeagpFWZgF6c4XNt76em6A5W-1Ht9g', autocomplete='off')
    fieldset
      .form-element__group
        .vui-form-element__row.vui-grid.vui-m-bottom--xx-small
          .vui-form-element.vui-align-bottom.vui-m-right--x-small
            label.vui-form-element__label(for='username', style='color: white') Email
            .vui-form-element__control.vui-input-has-icon.vui-input-has-icon--left
              svg.vui-icon.vui-input__icon(aria-hidden='true', style='color: hsla(214, 66%, 34%, 1)')
                use(xmlns:xlink='http://www.w3.org/1999/xlink', xlink:href='/assets/icons.svg#icon-envelope')
              input#username.vui-input.ng-valid-email.ng-not-empty.ng-dirty.ng-valid.ng-valid-required.ng-touched(tabindex='1', type='email', name='username', ng-model='login.model.username', required='', placeholder='johndoe@email.com', style='min-width: 16rem', data-com.agilebits.onepassword.user-edited='yes')
            .vui-form-element__help  
          .vui-form-element.vui-align-bottom.vui-m-right--x-small
            label.vui-form-element__label(for='password', style='color: white') Password
            .vui-form-element__control.vui-input-has-icon.vui-input-has-icon--left
              svg.vui-icon.vui-input__icon(aria-hidden='true', style='color: hsla(214, 66%, 34%, 1)')
                use(xmlns:xlink='http://www.w3.org/1999/xlink', xlink:href='/assets/icons.svg#icon-lock')
              input#password.vui-input.ng-not-empty.ng-dirty.ng-valid-parse.ng-valid.ng-valid-required.ng-touched(tabindex='2', type='password', name='password', ng-model='login.model.password', placeholder='', required='', style='min-width: 16rem', data-com.agilebits.onepassword.user-edited='yes')
            .vui-form-element__help.vui-grid.vui-grid--align-spread
              // ngRepeat: link in login.model.additionalLinks
              span.ng-scope(ng-repeat='link in login.model.additionalLinks')
                a.ng-binding(style='color:#fff;padding:0;border: none', ng-href='account/forgot-password?signin=37356d6f52e7069d88130fd5ca12b963', href='account/forgot-password?signin=37356d6f52e7069d88130fd5ca12b963') Forgot Password
              // end ngRepeat: link in login.model.additionalLinks
              span
                input#remember-me.input-group__checkbox.vui-align-middle.ng-pristine.ng-untouched.ng-valid.ng-empty(type='checkbox', ng-model='login.model.rememberMe', name='rememberMe', value='true')
                label.input-group__label--inline(for='remember-me') Remember Me
          .vui-form-element(style='margin-top: 1.7rem')
            button.vui-button.vui-button--secondary(tabindex='3', ng-click='login.signIn()') Login
</template>
