<template lang="pug">
  form.vui-medium-show.ng-pristine.ng-valid(name='logoutform', method='POST', action='/Account/Logout')
    .vui-dropdown-trigger.vui-dropdown-trigger--click.vui-align-middle.station-selector(ng-class="{'vui-is-open': stationsSelectorActive}", any-outer-click='stationsSelectorActive = false')
      span.vui-button.vui-button--inverse.vui-button--small.vui-align--absolute-center.fa-inverse.pointer(aria-haspopup='true', ng-click='stationsSelectorActive = !stationsSelectorActive')
        | KMYT
        svg.vui-icon.vui-icon--x-small.vui-m-left--xxx-small.vui-m-bottom--xxx-small
          use(xmlns:xlink='http://www.w3.org/1999/xlink', xlink:href='/Content/Images/icons.svg#icon-caret-down')
      .vui-dropdown.vui-nubbin--top.vui-has-blur-focus(tabindex='-1', role='menu')
        .vui-dropdown__item
          a(href='/Account/UpdateCurrentStation?selectedSourceSystemId=1&selectedStationId=1&selectedStationCallLetters=KOKI', target='_self') KOKI
        .vui-dropdown__item
          a(href='/Account/UpdateCurrentStation?selectedSourceSystemId=1&selectedStationId=2&selectedStationCallLetters=KMYT', target='_self') KMYT
        .vui-dropdown__item
          a(href='/Account/UpdateCurrentStation?selectedSourceSystemId=1&selectedStationId=3&selectedStationCallLetters=WFOX', target='_self') WFOX
        .vui-dropdown__item
          a(href='/Account/UpdateCurrentStation?selectedSourceSystemId=1&selectedStationId=4&selectedStationCallLetters=WJAX', target='_self') WJAX
        .vui-dropdown__item
          a(href='/Account/UpdateCurrentStation?selectedSourceSystemId=1&selectedStationId=7&selectedStationCallLetters=WJXT', target='_self') WJXT
        .vui-dropdown__item
          a(href='/Account/UpdateCurrentStation?selectedSourceSystemId=1&selectedStationId=9&selectedStationCallLetters=WJXX', target='_self') WJXX
        .vui-dropdown__item
          a(href='/Account/UpdateCurrentStation?selectedSourceSystemId=1&selectedStationId=10&selectedStationCallLetters=WTLV', target='_self') WTLV
    span.vui-m-left--small.vui-m-right--small |
    span.vui-m-right--xxx-small Welcome Back,
    .vui-dropdown-trigger.vui-dropdown-trigger--click(ng-class="{'vui-is-open': roleSelectorActive}", any-outer-click='roleSelectorActive = false')
      span.pointer(aria-haspopup='true', ng-click='roleSelectorActive = !roleSelectorActive')
        | Victor.Tolbert@Videa.tv!
        svg.vui-icon.vui-icon--x-small.vui-m-bottom--xxx-small
          use(xmlns:xlink='http://www.w3.org/1999/xlink', xlink:href='/Content/Images/icons.svg#icon-caret-down')
      .vui-dropdown.vui-nubbin--top.vui-has-blur-focus(role='menu')
        .vui-dropdown__item
          a(href='/Shared/Sellers/Home/LandingHome', target='_self') Sellers
        .vui-dropdown__item
          a(href='/Shared/Reps/Home/LandingHome', target='_self') Reps
        .vui-dropdown__item
          a(href='http://support.videa.int/', target='_self') Support
        .vui-dropdown__item
          a(href='http://customercare.videa.int/', target='_self') Customer Care
        .vui-dropdown__item
          a(href='/Admin/Users/Index', target='_self') Admin
    input.vui-button.vui-button--secondary(type='submit', value='Sign Out')
</template>
