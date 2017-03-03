<template lang="pug">
  table.vui-table.vui-no-row-hover
    thead
      tr
        th(rowspan='2', style='width: 50%') Program
        th(colspan='4') Station
        th(colspan='4') Videa
        th(colspan='5') On the Books
      tr
        // Station Section
        th.u-width-medium Rate
        th {{ demographic }}
        th {{ cpDisplay }}
        th.u-width-medium.vui-cell-wrap(v-if='showPreviousRate') Previously Accepted Rate

        // Videa Section
        th Rate
        th.vui-cell-wrap(style='width: 70px') Accept Rate
        th {{ demographic }}
        th {{ cpDisplay }}

        // OTB Section
        th Min
        th Max
        th AUR
        th LY AUR
        th Sell Out %

    tbody(v-for='program in programs')
      // Program Level
      tr(style='background-color: #cee5eb', @click='$parent.lastClickedProgram = program')
        //- // Station Section
        //- td
        //-   span.vui-grid
        //-     a.vui-m-right--xx-small.vui-p-right--medium(@click='program.monthsExpanded = !program.monthsExpanded', style='position: relative')
        //-       svg.vui-icon.vui-icon--x-small(style='position: absolute; top: 2px')
        //-         use(v-if='program.monthsExpanded', xlink:href='/static/shared/icons.svg#icon-caret-down')
        //-         use(v-if='!program.monthsExpanded', xlink:href='/static/shared/icons.svg#icon-caret-right')
        //-     .vui-align-middle
        //-       div {{ program.program }}
        //-       span {{ program.formattedTimeSlot }}

        //- td.vui-text-align--right.u-width-medium {{ calculateAverageRate(program) }}
        //- td.vui-text-align--right(v-if='ratingType.rating')  {{ calculateAverageRating(program)}}
        //- td.vui-text-align--right(v-if='ratingType.rating') {{ calculateAverageCpp(program) }}
        //- td.vui-text-align--right(v-if='ratingType.impressions')
        //-   | {{calculateAverageImpressions(program)}}
        //- td.vui-text-align--right(v-if='ratingType.impressions')
        //-   | {{calculateAverageCpm(program)}}
        //- td.vui-text-align--right.u-width-medium.vui-cell-wrap.shaded(v-if='showPreviousRate') {{calculateAveragePreviouslyAcceptedRate(program)}}

        //- // Videa Section
        //- td.vui-text-align--right {{calculateAverageVideaRate(program)}}
        //- td.vui-text-align--center
        //- td.vui-text-align--right(v-if='ratingType.rating') {{calculateAverageVideaRating(program)}}
        //- td.vui-text-align--right(v-if='ratingType.rating') {{calculateAverageVideaCpp(program)}}
        //- td.vui-text-align--right(v-if='ratingType.impressions')
        //-   | {{calculateAverageVideaImpressions(program)}}
        //- td.vui-text-align--right(v-if='ratingType.impressions') {{calculateAverageVideaCpm(program)}}
        //- // OTB Section
        //- td.vui-text-align--right(v-if='includeZeroSpots') {{program.otbMinRate}}
        //- td.vui-text-align--right(v-if='includeZeroSpots') {{program.otbMaxRate}}
        //- td.vui-text-align--right(v-if='includeZeroSpots') {{program.otbAur}}
        //- td.vui-text-align--right(v-if='includeZeroSpots') {{program.otbLyAur}}
        //- td.vui-text-align--right(v-if='includeZeroSpots') {{program.otbSellOutPercentString}}
        //- td.vui-text-align--right(v-if='!includeZeroSpots') {{program.nonZeroOtbMinRate}}
        //- td.vui-text-align--right(v-if='!includeZeroSpots') {{program.nonZeroOtbMaxRate}}
        //- td.vui-text-align--right(v-if='!includeZeroSpots') {{program.nonZeroOtbAur}}
        //- td.vui-text-align--right(v-if='!includeZeroSpots') {{program.nonZeroOtbLyAur}}
        //- td.vui-text-align--right(v-if='!includeZeroSpots') {{program.nonZeroOtbSellOutPercentString}}
      // Monthly Level
      template(v-for='month in program.details')
        tr(v-if='program.monthsExpanded' style='background-color: #ecf5f8')
          td
            .vui-m-left--xx-large.vui-grid.vui-grid--align-spread
              span.vui-align-middle {{month.month}}
              .vui-dropdown-trigger.vui-dropdown-trigger--click.vui-align-middle.dropdown-left.vui-m-right--x-small(:class="{'vui-is-open': month.showWeeks}", any-outer-click='month.showWeeks = false')
                button.vui-button.vui-button--can-be-focused.vui-button--icon-container(aria-haspopup='true', @click='toggleWeekSelection(month)')
                  svg.vui-icon.vui-icon--x-small.vui-align-middle(style='color: hsla(196, 99%, 32%, 1)')
                    use(xmlns:xlink='http://www.w3.org/1999/xlink', xlink:href='/static/shared/icons.svg#icon-calendar-plus-o')
                  span.vui-assistive-text Add weeks
                .vui-dropdown.vui-nubbin--top.vui-has-blur-focus(ng-show='month.showWeeks', :class="{'weekPopup':month.showWeeks}")
                  .vui-p-around--large(role='menu')
                    fieldset.vui-form-element.vui-m-bottom--small(ng-repeat='item in month.details')
                      .vui-form-element__control
                        label.vui-checkbox
                          input.vui-input(type='checkbox', ng-model='item.checked', ng-change='onWeekClicked(item)')
                          span.vui-checkbox--faux
                          span.vui-form-element__label(ng-bind='item.week')
                    fieldset.vui-form-element.vui-text-align--center
                      button.vui-button.vui-button--neutral(@click='month.showWeeks = false;') Close
          // Station Section
          td.u-width-medium
            input.vui-input.vui-text-align--right.u-width-medium(ng-disabled='isRepUser || allWeeksSelected(month)', type='text', number-format='', decimals='0', ng-model='month.stationRate.value', ng-change='detailRateChanged(month)', maxlength='10', vui-select-on-focus='')
            button.vui-button.vui-button--can-be-focused.vui-button--icon-container(title='Copy To Quarter', aria-haspopup='true', @click='copyStationRate(program.details, month)', ng-show='!isRepUser && (!allWeeksSelected(month)) && $index==0 ')
              svg.vui-icon.vui-icon--x-small.vui-align-middle(style='color: hsla(196, 99%, 32%, 1)')
                use(xmlns:xlink='http://www.w3.org/1999/xlink', xlink:href='/static/shared/icons.svg#icon-copy')
              span.vui-assistive-text Add weeks
          td.vui-text-align--right(v-if='ratingType.rating')
            a(href='', ng-disabled='isRepUser', @click='ratingOnClick(month)', style='text-decoration: underline') {{month.stationRating.value}}
          td.vui-text-align--right(v-if='ratingType.rating') {{calculateCpp(month)}}
          td.vui-text-align--right(v-if='ratingType.impressions')
            a(href='', ng-disabled='isRepUser', @click='ratingOnClick(month)', style='text-decoration: underline') {{month.stationImpressions.value}}
          td.vui-text-align--right(v-if='ratingType.impressions') {{calculateCpm(month)}}
          td.vui-text-align--right.u-width-medium.vui-cell-wrap.shaded(v-if='showPreviousRate') {{month.stationRate.originalValue}}

          // Videa Section
          td.vui-text-align--right {{month.videaRate}}
          td.vui-text-align--center
            vui-checkbox(cbdisabled='isRepUser', @click='acceptVideaRate(month,undefined,isRepUser);setAcceptVideaRateValueForProgram($parent.program);', text='', value='month.acceptedVideaRate.value', tabindex='0')
          td.vui-text-align--right(v-if='ratingType.rating') {{month.videaRating}}
          td.vui-text-align--right(v-if='ratingType.rating') {{month.videaCpp}}
          td.vui-text-align--right(v-if='ratingType.impressions') {{month.videaImpressions}}
          td.vui-text-align--right(v-if='ratingType.impressions') {{month.videaCpm}}

          // OTB Section
          td.vui-text-align--right(v-if='includeZeroSpots') {{month.otbMinRate}}
          td.vui-text-align--right(v-if='includeZeroSpots') {{month.otbMaxRate}}
          td.vui-text-align--right(v-if='includeZeroSpots') {{month.otbAur}}
          td.vui-text-align--right(v-if='includeZeroSpots') {{month.otbLyAur}}
          td.vui-text-align--right(v-if='includeZeroSpots') {{month.otbSellOutPercentString}}
          td.vui-text-align--right(v-if='!includeZeroSpots') {{month.nonZeroOtbMinRate}}
          td.vui-text-align--right(v-if='!includeZeroSpots') {{month.nonZeroOtbMaxRate}}
          td.vui-text-align--right(v-if='!includeZeroSpots') {{month.nonZeroOtbAur}}
          td.vui-text-align--right(v-if='!includeZeroSpots') {{month.nonZeroOtbLyAur}}
          td.vui-text-align--right(v-if='!includeZeroSpots') {{month.nonZeroOtbSellOutPercentString}}

        // Weekly Level
        template(v-for='week in getWeeksToShow(month)')
          tr(v-if='program.monthsExpanded', style='background-color: #ecf5f8')
            td
              .vui-grid.vui-p-left--large.vui-m-left--xx-large
                a.vui-align-middle(href='', @click='week.checked = false')
                  svg.vui-icon.vui-icon--x-small.vui-align-middle.vui-m-right--x-small
                    use(xmlns:xlink='http://www.w3.org/1999/xlink', xlink:href='/static/shared/icons.svg#icon-times-circle')
                span.vui-align-middle {{week.week}}

            // Station Section
            td.u-width-medium
              input.vui-input.vui-text-align--right.u-width-medium(type='text', ng-disabled='isRepUser', number-format='', decimals='0', ng-model='week.stationRate.value', ng-change='detailRateChanged(week)', maxlength='10', vui-select-on-focus='')
              button.vui-button.vui-button--can-be-focused.vui-button--icon-container(title='Copy to Quarter', aria-haspopup='true', @click='copyStationRate(program.details, week)', v-if='!isRepUser && $index==0 && allWeeksSelected(month) && $parent.$parent.$index==0')
                svg.vui-icon.vui-icon--x-small.vui-align-middle(style='color: hsla(196, 99%, 32%, 1)')
                  use(xmlns:xlink='http://www.w3.org/1999/xlink', xlink:href='/static/shared/icons.svg#icon-copy')
                span.vui-assistive-text Add weeks
            td.vui-text-align--right(v-if='ratingType.rating')
              a(href='', ng-disabled='isRepUser', @click='ratingOnClick(week)', style='text-decoration: underline')
                | {{week.stationRating.value}}
            td.vui-text-align--right(v-if='ratingType.rating') {{calculateCpp(week)}}
            td.vui-text-align--right(v-if='ratingType.impressions')
              a(href='', ng-disabled='isRepUser', @click='ratingOnClick(week)', style='text-decoration: underline') {{week.stationImpressions.value}}
            td.vui-text-align--right(v-if='ratingType.impressions') {{calculateCpm(week)}}
            td.vui-text-align--right.u-width-medium.shaded(v-if='showPreviousRate') {{week.stationRate.originalValue}}

            // Videa Section
            td.vui-text-align--right {{week.videaRate}}
            td.vui-text-align--center
              vui-checkbox(cbdisabled='isRepUser', @click='acceptVideaRate(week,undefined,isRepUser);setAcceptVideaRateValueForProgram($parent.$parent.program);', text='', value='week.acceptedVideaRate.value', tabindex='0')
            td.vui-text-align--right(v-if='ratingType.rating') {{week.videaRating}}
            td.vui-text-align--right(v-if='ratingType.rating') {{week.videaCpp}}
            td.vui-text-align--right(v-if='ratingType.impressions') {{week.videaImpressions}}
            td.vui-text-align--right(v-if='ratingType.impressions') {{week.videaCpm}}

            // OTB Section
            td.vui-text-align--right(v-if='includeZeroSpots') {{week.otbMinRate}}
            td.vui-text-align--right(v-if='includeZeroSpots') {{week.otbMaxRate}}
            td.vui-text-align--right(v-if='includeZeroSpots') {{week.otbAur}}
            td.vui-text-align--right(v-if='includeZeroSpots') {{week.otbLyAur}}
            td.vui-text-align--right(v-if='includeZeroSpots') {{week.otbSellOutPercentString}}
            td.vui-text-align--right(v-if='!includeZeroSpots') {{week.nonZeroOtbMinRate}}
            td.vui-text-align--right(v-if='!includeZeroSpots') {{week.nonZeroOtbMaxRate}}
            td.vui-text-align--right(v-if='!includeZeroSpots') {{week.nonZeroOtbAur}}
            td.vui-text-align--right(v-if='!includeZeroSpots') {{week.nonZeroOtbLyAur}}
            td.vui-text-align--right(v-if='!includeZeroSpots') {{week.nonZeroOtbSellOutPercentString}}
</template>

<script>
  import programs from './data.js'

  export default {
    template: '',
    data: () => ({
      programs: programs,
      firstRunRatingTypeWatch: true,
      showPreviousRate: false,
      stationColumns: 4,
      demographic: 'pp',
      cpDisplay: 'CPP',
      ratingType: {
        rating: true,
        impressions: false
      }

    }),

    methods: {
      allWeeksSelected (month) {
        var allWeeksSelected = true

        for (let i = 0; i < month.details.length; i++) {
          if (month.details[i].checked !== true) {
            allWeeksSelected = false
            break
          }
        }

        return allWeeksSelected
      },

      getWeeksToShow (month) {
        return month.details.filter(function (value) {
          return value.checked
        })
      },

      ratingOnClick (detail) {
        $scope.showRatingModal = true
        $scope.programFromRating = detail
      },

      detailRateChanged (detail) {
        detail.acceptedVideaRate.value = false
      },

      programAverageFor (program, reducerField, reducerSubField = 'value') {
        var count = 0
        const total = program.details.reduce(function (monthacc, month) {
          const weektotal = month.details.reduce(function (weekacc, week) {
            count++
            if (week.checked) {
              return weekacc + (typeof (week[reducerField][reducerSubField]) !== 'undefined' ? week[reducerField][reducerSubField] : week[reducerField])
            } else {
              return weekacc + (typeof (month[reducerField][reducerSubField]) !== 'undefined' ? month[reducerField][reducerSubField] : month[reducerField])
            }
          }, 0)
          return monthacc + weektotal
        }, 0)
        return total / count
      },

      calculateCpp (detail) {
        return detail.stationRate.value
          ? detail.stationRate.value.toFixed(0) / detail.stationRating.value.toFixed(1)
          : 0
      },

      calculateCpm (detail) {
        return detail.stationRate.value
          ? ((detail.stationRate.value * 1000) / detail.stationImpressions.value)
          : 0
      },

      calculateImps (detail) {
        return (detail.stationRating.value * 0.01 * detail.universe)
      },

      calculateAverageRate (program) {
        return this.programAverageFor(program, 'stationRate')
      },

      calculateAveragePreviouslyAcceptedRate (program) {
        return this.programAverageFor(program, 'stationRate', 'originalValue')
      },

      calculateAverageRating (program) {
        return this.programAverageFor(program, 'stationRating')
      },

      calculateAverageImpressions (program) {
        return this.programAverageFor(program, 'stationImpressions')
      },

      calculateAverageVideaRate (program) {
        return this.programAverageFor(program, 'videaRate')
      },

      calculateAverageVideaRating (program) {
        return this.programAverageFor(program, 'videaRating')
      },

      calculateAverageVideaImpressions (program) {
        return this.programAverageFor(program, 'videaImpressions')
      },

      calculateAverageVideaCpm (program) {
        return ((this.calculateAverageVideaRate(program) * 1000) / this.calculateAverageVideaImpressions(program))
      },

      calculateAverageCpp (program) {
        return this.calculateAverageRate(program).toFixed(0) / this.calculateAverageRating(program).toFixed(1)
      },

      calculateAverageVideaCpp (program) {
        return this.calculateAverageVideaRate(program).toFixed(0) / this.calculateAverageVideaRating(program).toFixed(1)
      },

      calculateAverageCpm (program) {
        return ((this.calculateAverageRate(program) * 1000) / this.calculateAverageImpressions(program))
      },

      acceptVideaRateProgram (program, isRepUser) {
        // this is different from acceptVideaRate method--need to go through and acceptVideaRate for all children of this line.
        if (isRepUser) return
        var months = []
        if (!program.acceptedVideaRate.value) {
          months = program.details
          months.forEach(function (month) {
            if (!month.acceptedVideaRate.value) {
              this.acceptVideaRate(month, true)
            }
            const weeks = month.details
            weeks.forEach(function (week) {
              if (!week.acceptedVideaRate.value) {
                this.acceptVideaRate(week, true)
              }
            })
          })
        } else {
          months = program.details
          months.forEach(function (month) {
            this.acceptVideaRate(month, false)
            const weeks = month.details
            weeks.forEach(function (week) {
              this.acceptVideaRate(week, false)
            })
          })
        };

        program.acceptedVideaRate.isDirty = !program.acceptedVideaRate.isDirty
      },

      // var updateAcceptVideaRateValueForProgram = (program) => {
      //   let anyAccepted = program.details.some((month) => {
      //     if (month.acceptedVideaRate.value) {
      //       return true
      //     }
      //     let anyAcceptedWeek = month.details.some((week) => {
      //       return week.acceptedVideaRate.value
      //     })
      //     return anyAcceptedWeek
      //   })
      //   program.acceptedVideaRate.value = anyAccepted
      // }

      // self.setAcceptVideaRateValueForProgram = (program) => {
      //       // run after the digest cycle to use the updated acceptedVideaRate per line
      //   setTimeout(() => {
      //     $scope.$apply(function () {
      //       updateAcceptVideaRateValueForProgram(program)
      //     })
      //   })
      // }

      // self.SetAcceptVideaRateValueForAll = () => {
      //   setTimeout(() => {
      //     $scope.$apply(function () {
      //       for (let program of $scope.programs) {
      //         updateAcceptVideaRateValueForProgram(program)
      //       }
      //     })
      //   })
      // }

      //   self.acceptVideaRate = function (line, acceptedVideaRateValue, isRepUser) {
      //     if (isRepUser) return
      //     if (!line.acceptedVideaRate.value) {
      //       line.stationRate.value = line.videaRate
      //     }

      //     if (acceptedVideaRateValue !== null && acceptedVideaRateValue !== undefined) {
      //       line.acceptedVideaRate.value = acceptedVideaRateValue
      //     }
      //     line.checked = true
      //     line.acceptedVideaRate.isDirty = !line.acceptedVideaRate.isDirty
      //   }

      //   self.toggleWeekSelection = function (month) {
      //     if (month.showWeeks) {
      //       month.showWeeks = false
      //     } else {
      //       month.showWeeks = true
      //       setTimeout(function () {
      //         angular.element('.weekPopup').focus()
      //       })
      //     }
      //   }

      //   self.onWeekClicked = function (week) {
      //     if (week.stationRate.originalValue == null) {
      //       week.acceptedVideaRate.value = true
      //       week.acceptedVideaRate.isDirty = false
      //       week.acceptedVideaRate.originalValue = true
      //     }
      //         // keep focus on week selector
      //     setTimeout(function () {
      //       let weekSelector = angular.element('.weekPopup')
      //       weekSelector.blur()
      //       weekSelector.focus()
      //     })
      //   }

      //   self.redirectToSportsSpecials = function () {
      //     document.location.href = '/Shared/Sellers/Preferences#/SportsSpecialsSettings'
      //   }

      //   self.copyStationRate = function (details, obj) {
      //     let newStationRate = null

      //     if (!obj.stationRate.value) {
      //       newStationRate = obj.stationRate.originalValue
      //     } else {
      //       newStationRate = obj.stationRate.value
      //     }

      //     angular.forEach(details,
      //             function (month) {
      //               month.stationRate.value = newStationRate
      //               month.stationRate.isDirty = true
      //               month.stationRate.isOverridden = true
      //               month.acceptedVideaRate.value = false
      //               month.acceptedVideaRate.isDirty = true

      //               angular.forEach(month.details,
      //                     function (week) {
      //                       if (week.checked) {
      //                         week.stationRate.value = newStationRate
      //                         week.stationRate.isDirty = true
      //                         week.stationRate.isOverridden = true
      //                         week.acceptedVideaRate.value = false
      //                         week.acceptedVideaRate.isDirty = true
      //                       }
      //                     })
      //             })
      //   }

      //   var indicatePreviousRatePerLine = function (element) {
      //     if (element.stationRate.originalValue !== null && element.stationRate.value !== element.stationRate.originalValue) {
      //       self.showPreviousRate = true
      //       return
      //     }
      //     if (element.details) {
      //       element.details.forEach(indicatePreviousRatePerLine)
      //     }
      //   }
      //   var indicatePreviousRate = function () {
      //     self.showPreviousRate = false
      //     $scope.programs.forEach(indicatePreviousRatePerLine)
      //     self.stationColumns = self.showPreviousRate ? 4 : 3
      //   }
      //   $scope.$watch('programsOnChange', function (newValue) {
      //     if (newValue) {
      //       indicatePreviousRate()
      //       $scope.programsOnChange = false
      //       self.SetAcceptVideaRateValueForAll()
      //     }
      //   })
      // }
    },
  }



  //   watch: {
  //     'ratingType' (new)
  //   }
  // }
  // var priceGuideProgramsTableController = function ($scope, $filter, priceGuideService) {
  //   if ($scope.programData) {
  //     self.programName = $scope.programData.program
  //   }
  //   $scope.$watch(function () { return $scope.ratingType }, function (newValue, oldValue) {
  //     if (!angular.equals(newValue, oldValue) || self.firstRunRatingTypeWatch) {
  //       if (newValue === 'CPP') {
  //         self.ratingType.rating = true
  //         self.ratingType.impressions = false
  //         self.ratingTypeDisplay = 'Rating'
  //         self.cpDisplay = 'CPP'
  //       }
  //       if (newValue === 'CPM') {
  //         self.ratingType.impressions = true
  //         self.ratingType.rating = false
  //         self.ratingTypeDisplay = 'IMPS'
  //         self.cpDisplay = 'CPM'
  //       }
  //     }
  //   })
  //   self.ratingType = {
  //     rating: true,
  //     impressions: false
  //   }


  // export default [
  //   function () {
  //     return {
  //       restrict: 'E',
  //       templateUrl: templateUrl,
  //       scope: {
  //         programs: '=',
  //         ratingType: '=',
  //         demographic: '=',
  //         showRatingModal: '=',
  //         programFromRating: '=',
  //         isRepUser: '=',
  //         lastModified: '=',
  //         includeZeroSpots: '=',
  //         programsOnChange: '='
  //       },
  //       controller: ['$scope', '$filter', 'priceGuideService', priceGuideProgramsTableController],
  //       controllerAs: 'pgpt'
  //     }
  //   }
  // ]

</script>
