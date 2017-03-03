.fixed-header-grid
  .fixed-header-grid-header(style='width: 1527px;')
    table.vui-table.vui-no-row-hover.vui-table--fixed-layout.mg-offer-spots(style='position: relative;')
      thead
        tr
          th(style='width:80px')
            vui-sorting-column.ng-isolate-scope(title='Line #', column-name='LineNumber', sorting-changed='ctrl.columnSortingChanged(column)', current-sorting='ctrl.sorting')
              // ngIf: sortable !== false
              a.vui-grid.vui-grid--align-spread.ng-scope(href='', ng-click='ctrl.changeSorting()', ng-if='sortable !== false')
                span.vui-align-middle.vui-size--4-of-5.vui-show.ng-binding(ng-bind-html='safeTitle') Line #
                span(ng-transclude='')
                span.vui-align-middle.vui-size--1-of-5.vui-text-align--right.vui-show
                  svg.vui-icon.vui-icon--x-small.vui-align-middle.vui-sort(viewbox='0 0 16 28', ng-class="{'vui-sort': currentSorting.columnName !== columnName}")
                    path(fill='currentColor', xmlns:xlink='http://www.w3.org/1999/xlink', xlink:href='', ng-attr-d="{{currentSorting.columnName === columnName ? currentSorting.sortedDesc ? 'M16 17q0 .406-.297.703l-7 7Q8.406 25 8 25t-.703-.297l-7-7Q0 17.406 0 17t.297-.703T1 16h14q.406 0 .703.297T16 17z' : 'M16 11q0 .406-.297.703T15 12H1q-.406 0-.703-.297T0 11t.297-.703l7-7Q7.594 3 8 3t.703.297l7 7Q16 10.594 16 11z' : 'M16 17q0 .406-.297.703l-7 7Q8.406 25 8 25t-.703-.297l-7-7Q0 17.406 0 17t.297-.703T1 16h14q.406 0 .703.297T16 17zm0-6q0 .406-.297.703T15 12H1q-.406 0-.703-.297T0 11t.297-.703l7-7Q7.594 3 8 3t.703.297l7 7Q16 10.594 16 11z'}}", d='M16 17q0 .406-.297.703l-7 7Q8.406 25 8 25t-.703-.297l-7-7Q0 17.406 0 17t.297-.703T1 16h14q.406 0 .703.297T16 17zm0-6q0 .406-.297.703T15 12H1q-.406 0-.703-.297T0 11t.297-.703l7-7Q7.594 3 8 3t.703.297l7 7Q16 10.594 16 11z')
              // end ngIf: sortable !== false
              // ngIf: sortable === false
          th(style='width:110px')
            vui-sorting-column.ng-isolate-scope(title='Order Days', column-name='Days', sorting-changed='ctrl.columnSortingChanged(column)', current-sorting='ctrl.sorting')
              // ngIf: sortable !== false
              a.vui-grid.vui-grid--align-spread.ng-scope(href='', ng-click='ctrl.changeSorting()', ng-if='sortable !== false')
                span.vui-align-middle.vui-size--4-of-5.vui-show.ng-binding(ng-bind-html='safeTitle') Order Days
                span(ng-transclude='')
                span.vui-align-middle.vui-size--1-of-5.vui-text-align--right.vui-show
                  svg.vui-icon.vui-icon--x-small.vui-align-middle.vui-sort(viewbox='0 0 16 28', ng-class="{'vui-sort': currentSorting.columnName !== columnName}")
                    path(fill='currentColor', xmlns:xlink='http://www.w3.org/1999/xlink', xlink:href='', ng-attr-d="{{currentSorting.columnName === columnName ? currentSorting.sortedDesc ? 'M16 17q0 .406-.297.703l-7 7Q8.406 25 8 25t-.703-.297l-7-7Q0 17.406 0 17t.297-.703T1 16h14q.406 0 .703.297T16 17z' : 'M16 11q0 .406-.297.703T15 12H1q-.406 0-.703-.297T0 11t.297-.703l7-7Q7.594 3 8 3t.703.297l7 7Q16 10.594 16 11z' : 'M16 17q0 .406-.297.703l-7 7Q8.406 25 8 25t-.703-.297l-7-7Q0 17.406 0 17t.297-.703T1 16h14q.406 0 .703.297T16 17zm0-6q0 .406-.297.703T15 12H1q-.406 0-.703-.297T0 11t.297-.703l7-7Q7.594 3 8 3t.703.297l7 7Q16 10.594 16 11z'}}", d='M16 17q0 .406-.297.703l-7 7Q8.406 25 8 25t-.703-.297l-7-7Q0 17.406 0 17t.297-.703T1 16h14q.406 0 .703.297T16 17zm0-6q0 .406-.297.703T15 12H1q-.406 0-.703-.297T0 11t.297-.703l7-7Q7.594 3 8 3t.703.297l7 7Q16 10.594 16 11z')
              // end ngIf: sortable !== false
              // ngIf: sortable === false
          th(style='width:95px')
            vui-sorting-column.ng-isolate-scope(title='Start Time', column-name='StartTime', sorting-changed='ctrl.columnSortingChanged(column)', current-sorting='ctrl.sorting')
              // ngIf: sortable !== false
              a.vui-grid.vui-grid--align-spread.ng-scope(href='', ng-click='ctrl.changeSorting()', ng-if='sortable !== false')
                span.vui-align-middle.vui-size--4-of-5.vui-show.ng-binding(ng-bind-html='safeTitle') Start Time
                span(ng-transclude='')
                span.vui-align-middle.vui-size--1-of-5.vui-text-align--right.vui-show
                  svg.vui-icon.vui-icon--x-small.vui-align-middle.vui-sort(viewbox='0 0 16 28', ng-class="{'vui-sort': currentSorting.columnName !== columnName}")
                    path(fill='currentColor', xmlns:xlink='http://www.w3.org/1999/xlink', xlink:href='', ng-attr-d="{{currentSorting.columnName === columnName ? currentSorting.sortedDesc ? 'M16 17q0 .406-.297.703l-7 7Q8.406 25 8 25t-.703-.297l-7-7Q0 17.406 0 17t.297-.703T1 16h14q.406 0 .703.297T16 17z' : 'M16 11q0 .406-.297.703T15 12H1q-.406 0-.703-.297T0 11t.297-.703l7-7Q7.594 3 8 3t.703.297l7 7Q16 10.594 16 11z' : 'M16 17q0 .406-.297.703l-7 7Q8.406 25 8 25t-.703-.297l-7-7Q0 17.406 0 17t.297-.703T1 16h14q.406 0 .703.297T16 17zm0-6q0 .406-.297.703T15 12H1q-.406 0-.703-.297T0 11t.297-.703l7-7Q7.594 3 8 3t.703.297l7 7Q16 10.594 16 11z'}}", d='M16 17q0 .406-.297.703l-7 7Q8.406 25 8 25t-.703-.297l-7-7Q0 17.406 0 17t.297-.703T1 16h14q.406 0 .703.297T16 17zm0-6q0 .406-.297.703T15 12H1q-.406 0-.703-.297T0 11t.297-.703l7-7Q7.594 3 8 3t.703.297l7 7Q16 10.594 16 11z')
              // end ngIf: sortable !== false
              // ngIf: sortable === false
          th(style='width:95px')
            vui-sorting-column.ng-isolate-scope(title='End Time', column-name='EndTime', sorting-changed='ctrl.columnSortingChanged(column)', current-sorting='ctrl.sorting')
              // ngIf: sortable !== false
              a.vui-grid.vui-grid--align-spread.ng-scope(href='', ng-click='ctrl.changeSorting()', ng-if='sortable !== false')
                span.vui-align-middle.vui-size--4-of-5.vui-show.ng-binding(ng-bind-html='safeTitle') End Time
                span(ng-transclude='')
                span.vui-align-middle.vui-size--1-of-5.vui-text-align--right.vui-show
                  svg.vui-icon.vui-icon--x-small.vui-align-middle.vui-sort(viewbox='0 0 16 28', ng-class="{'vui-sort': currentSorting.columnName !== columnName}")
                    path(fill='currentColor', xmlns:xlink='http://www.w3.org/1999/xlink', xlink:href='', ng-attr-d="{{currentSorting.columnName === columnName ? currentSorting.sortedDesc ? 'M16 17q0 .406-.297.703l-7 7Q8.406 25 8 25t-.703-.297l-7-7Q0 17.406 0 17t.297-.703T1 16h14q.406 0 .703.297T16 17z' : 'M16 11q0 .406-.297.703T15 12H1q-.406 0-.703-.297T0 11t.297-.703l7-7Q7.594 3 8 3t.703.297l7 7Q16 10.594 16 11z' : 'M16 17q0 .406-.297.703l-7 7Q8.406 25 8 25t-.703-.297l-7-7Q0 17.406 0 17t.297-.703T1 16h14q.406 0 .703.297T16 17zm0-6q0 .406-.297.703T15 12H1q-.406 0-.703-.297T0 11t.297-.703l7-7Q7.594 3 8 3t.703.297l7 7Q16 10.594 16 11z'}}", d='M16 17q0 .406-.297.703l-7 7Q8.406 25 8 25t-.703-.297l-7-7Q0 17.406 0 17t.297-.703T1 16h14q.406 0 .703.297T16 17zm0-6q0 .406-.297.703T15 12H1q-.406 0-.703-.297T0 11t.297-.703l7-7Q7.594 3 8 3t.703.297l7 7Q16 10.594 16 11z')
              // end ngIf: sortable !== false
              // ngIf: sortable === false
          th(style='width:310px')
            vui-sorting-column.ng-isolate-scope(title='Program', column-name='ProgramName', sorting-changed='ctrl.columnSortingChanged(column)', current-sorting='ctrl.sorting')
              // ngIf: sortable !== false
              a.vui-grid.vui-grid--align-spread.ng-scope(href='', ng-click='ctrl.changeSorting()', ng-if='sortable !== false')
                span.vui-align-middle.vui-size--4-of-5.vui-show.ng-binding(ng-bind-html='safeTitle') Program
                span(ng-transclude='')
                span.vui-align-middle.vui-size--1-of-5.vui-text-align--right.vui-show
                  svg.vui-icon.vui-icon--x-small.vui-align-middle.vui-sort(viewbox='0 0 16 28', ng-class="{'vui-sort': currentSorting.columnName !== columnName}")
                    path(fill='currentColor', xmlns:xlink='http://www.w3.org/1999/xlink', xlink:href='', ng-attr-d="{{currentSorting.columnName === columnName ? currentSorting.sortedDesc ? 'M16 17q0 .406-.297.703l-7 7Q8.406 25 8 25t-.703-.297l-7-7Q0 17.406 0 17t.297-.703T1 16h14q.406 0 .703.297T16 17z' : 'M16 11q0 .406-.297.703T15 12H1q-.406 0-.703-.297T0 11t.297-.703l7-7Q7.594 3 8 3t.703.297l7 7Q16 10.594 16 11z' : 'M16 17q0 .406-.297.703l-7 7Q8.406 25 8 25t-.703-.297l-7-7Q0 17.406 0 17t.297-.703T1 16h14q.406 0 .703.297T16 17zm0-6q0 .406-.297.703T15 12H1q-.406 0-.703-.297T0 11t.297-.703l7-7Q7.594 3 8 3t.703.297l7 7Q16 10.594 16 11z'}}", d='M16 17q0 .406-.297.703l-7 7Q8.406 25 8 25t-.703-.297l-7-7Q0 17.406 0 17t.297-.703T1 16h14q.406 0 .703.297T16 17zm0-6q0 .406-.297.703T15 12H1q-.406 0-.703-.297T0 11t.297-.703l7-7Q7.594 3 8 3t.703.297l7 7Q16 10.594 16 11z')
              // end ngIf: sortable !== false
              // ngIf: sortable === false
          th(style='width:60px')
            vui-sorting-column.ng-isolate-scope(title='Len', column-name='SpotLength', sorting-changed='ctrl.columnSortingChanged(column)', current-sorting='ctrl.sorting')
              // ngIf: sortable !== false
              a.vui-grid.vui-grid--align-spread.ng-scope(href='', ng-click='ctrl.changeSorting()', ng-if='sortable !== false')
                span.vui-align-middle.vui-size--4-of-5.vui-show.ng-binding(ng-bind-html='safeTitle') Len
                span(ng-transclude='')
                span.vui-align-middle.vui-size--1-of-5.vui-text-align--right.vui-show
                  svg.vui-icon.vui-icon--x-small.vui-align-middle.vui-sort(viewbox='0 0 16 28', ng-class="{'vui-sort': currentSorting.columnName !== columnName}")
                    path(fill='currentColor', xmlns:xlink='http://www.w3.org/1999/xlink', xlink:href='', ng-attr-d="{{currentSorting.columnName === columnName ? currentSorting.sortedDesc ? 'M16 17q0 .406-.297.703l-7 7Q8.406 25 8 25t-.703-.297l-7-7Q0 17.406 0 17t.297-.703T1 16h14q.406 0 .703.297T16 17z' : 'M16 11q0 .406-.297.703T15 12H1q-.406 0-.703-.297T0 11t.297-.703l7-7Q7.594 3 8 3t.703.297l7 7Q16 10.594 16 11z' : 'M16 17q0 .406-.297.703l-7 7Q8.406 25 8 25t-.703-.297l-7-7Q0 17.406 0 17t.297-.703T1 16h14q.406 0 .703.297T16 17zm0-6q0 .406-.297.703T15 12H1q-.406 0-.703-.297T0 11t.297-.703l7-7Q7.594 3 8 3t.703.297l7 7Q16 10.594 16 11z'}}", d='M16 17q0 .406-.297.703l-7 7Q8.406 25 8 25t-.703-.297l-7-7Q0 17.406 0 17t.297-.703T1 16h14q.406 0 .703.297T16 17zm0-6q0 .406-.297.703T15 12H1q-.406 0-.703-.297T0 11t.297-.703l7-7Q7.594 3 8 3t.703.297l7 7Q16 10.594 16 11z')
              // end ngIf: sortable !== false
              // ngIf: sortable === false
          th.vui-cell-wrap(style='width:85px')
            vui-sorting-column.ng-isolate-scope(title='Ordered Spots', column-name='TotalSpots', sorting-changed='ctrl.columnSortingChanged(column)', current-sorting='ctrl.sorting')
              // ngIf: sortable !== false
              a.vui-grid.vui-grid--align-spread.ng-scope(href='', ng-click='ctrl.changeSorting()', ng-if='sortable !== false')
                span.vui-align-middle.vui-size--4-of-5.vui-show.ng-binding(ng-bind-html='safeTitle') Ordered Spots
                span(ng-transclude='')
                span.vui-align-middle.vui-size--1-of-5.vui-text-align--right.vui-show
                  svg.vui-icon.vui-icon--x-small.vui-align-middle.vui-sort(viewbox='0 0 16 28', ng-class="{'vui-sort': currentSorting.columnName !== columnName}")
                    path(fill='currentColor', xmlns:xlink='http://www.w3.org/1999/xlink', xlink:href='', ng-attr-d="{{currentSorting.columnName === columnName ? currentSorting.sortedDesc ? 'M16 17q0 .406-.297.703l-7 7Q8.406 25 8 25t-.703-.297l-7-7Q0 17.406 0 17t.297-.703T1 16h14q.406 0 .703.297T16 17z' : 'M16 11q0 .406-.297.703T15 12H1q-.406 0-.703-.297T0 11t.297-.703l7-7Q7.594 3 8 3t.703.297l7 7Q16 10.594 16 11z' : 'M16 17q0 .406-.297.703l-7 7Q8.406 25 8 25t-.703-.297l-7-7Q0 17.406 0 17t.297-.703T1 16h14q.406 0 .703.297T16 17zm0-6q0 .406-.297.703T15 12H1q-.406 0-.703-.297T0 11t.297-.703l7-7Q7.594 3 8 3t.703.297l7 7Q16 10.594 16 11z'}}", d='M16 17q0 .406-.297.703l-7 7Q8.406 25 8 25t-.703-.297l-7-7Q0 17.406 0 17t.297-.703T1 16h14q.406 0 .703.297T16 17zm0-6q0 .406-.297.703T15 12H1q-.406 0-.703-.297T0 11t.297-.703l7-7Q7.594 3 8 3t.703.297l7 7Q16 10.594 16 11z')
              // end ngIf: sortable !== false
              // ngIf: sortable === false
          th.spot-allocation-column(ng-style="{'width': ctrl.spotAllocationNavigator.tableCellWidth}", style='width: 503px;')
            vom-spot-allocation-header.ng-pristine.ng-untouched.ng-valid.ng-isolate-scope.ng-not-empty(ng-model='items[0].spotAllocations', navigator='ctrl.spotAllocationNavigator')
              .spot-allocation-row
                .spot-allocation-nav-section.pointer
                  i.button-icon.left-icon(ng-click='vm.navigator.scrollLeft()', ng-disabled='!vm.navigator.isLeftButtonEnabled()', disabled='disabled')
                .spot-allocation-container(ng-style="{'width': vm.navigator.spotsWidth}", style='width: 455px;')
                  ul.spot-allocation.spot-allocation-headers(ng-style="{'left': vm.navigator.left + 'px'}", style='left: 0px;')
                    // ngRepeat: spot in vm.spots
                    li.ng-scope(ng-repeat='spot in vm.spots')
                      div
                        span.ng-binding(ng-bind='::spot.weekName', title='03/27/2017') Mar 27
                    // end ngRepeat: spot in vm.spots
                    li.ng-scope(ng-repeat='spot in vm.spots')
                      div
                        span.ng-binding(ng-bind='::spot.weekName', title='04/03/2017') Apr 03
                    // end ngRepeat: spot in vm.spots
                    li.ng-scope(ng-repeat='spot in vm.spots')
                      div
                        span.ng-binding(ng-bind='::spot.weekName', title='04/10/2017') Apr 10
                    // end ngRepeat: spot in vm.spots
                    li.ng-scope(ng-repeat='spot in vm.spots')
                      div
                        span.ng-binding(ng-bind='::spot.weekName', title='04/17/2017') Apr 17
                    // end ngRepeat: spot in vm.spots
                    li.ng-scope(ng-repeat='spot in vm.spots')
                      div
                        span.ng-binding(ng-bind='::spot.weekName', title='04/24/2017') Apr 24
                    // end ngRepeat: spot in vm.spots
                    li.ng-scope(ng-repeat='spot in vm.spots')
                      div
                        span.ng-binding(ng-bind='::spot.weekName', title='05/01/2017') May 01
                    // end ngRepeat: spot in vm.spots
                    li.ng-scope(ng-repeat='spot in vm.spots')
                      div
                        span.ng-binding(ng-bind='::spot.weekName', title='05/08/2017') May 08
                    // end ngRepeat: spot in vm.spots
                    li.ng-scope(ng-repeat='spot in vm.spots')
                      div
                        span.ng-binding(ng-bind='::spot.weekName', title='05/15/2017') May 15
                    // end ngRepeat: spot in vm.spots
                    li.ng-scope(ng-repeat='spot in vm.spots')
                      div
                        span.ng-binding(ng-bind='::spot.weekName', title='05/22/2017') May 22
                    // end ngRepeat: spot in vm.spots
                    li.ng-scope(ng-repeat='spot in vm.spots')
                      div
                        span.ng-binding(ng-bind='::spot.weekName', title='05/29/2017') May 29
                    // end ngRepeat: spot in vm.spots
                    li.ng-scope(ng-repeat='spot in vm.spots')
                      div
                        span.ng-binding(ng-bind='::spot.weekName', title='06/05/2017') Jun 05
                    // end ngRepeat: spot in vm.spots
                    li.ng-scope(ng-repeat='spot in vm.spots')
                      div
                        span.ng-binding(ng-bind='::spot.weekName', title='06/12/2017') Jun 12
                    // end ngRepeat: spot in vm.spots
                    li.ng-scope(ng-repeat='spot in vm.spots')
                      div
                        span.ng-binding(ng-bind='::spot.weekName', title='06/19/2017') Jun 19
                    // end ngRepeat: spot in vm.spots
                .spot-allocation-nav-section.pointer
                  i.button-icon.right-icon(ng-click='vm.navigator.scrollRight()', ng-disabled='!vm.navigator.isRightButtonEnabled()', disabled='disabled')
          th(style='width:100px')
            vui-sorting-column.ng-isolate-scope(title='Spot Rate', column-name='SpotRate', sorting-changed='ctrl.columnSortingChanged(column)', current-sorting='ctrl.sorting')
              // ngIf: sortable !== false
              a.vui-grid.vui-grid--align-spread.ng-scope(href='', ng-click='ctrl.changeSorting()', ng-if='sortable !== false')
                span.vui-align-middle.vui-size--4-of-5.vui-show.ng-binding(ng-bind-html='safeTitle') Spot Rate
                span(ng-transclude='')
                span.vui-align-middle.vui-size--1-of-5.vui-text-align--right.vui-show
                  svg.vui-icon.vui-icon--x-small.vui-align-middle.vui-sort(viewbox='0 0 16 28', ng-class="{'vui-sort': currentSorting.columnName !== columnName}")
                    path(fill='currentColor', xmlns:xlink='http://www.w3.org/1999/xlink', xlink:href='', ng-attr-d="{{currentSorting.columnName === columnName ? currentSorting.sortedDesc ? 'M16 17q0 .406-.297.703l-7 7Q8.406 25 8 25t-.703-.297l-7-7Q0 17.406 0 17t.297-.703T1 16h14q.406 0 .703.297T16 17z' : 'M16 11q0 .406-.297.703T15 12H1q-.406 0-.703-.297T0 11t.297-.703l7-7Q7.594 3 8 3t.703.297l7 7Q16 10.594 16 11z' : 'M16 17q0 .406-.297.703l-7 7Q8.406 25 8 25t-.703-.297l-7-7Q0 17.406 0 17t.297-.703T1 16h14q.406 0 .703.297T16 17zm0-6q0 .406-.297.703T15 12H1q-.406 0-.703-.297T0 11t.297-.703l7-7Q7.594 3 8 3t.703.297l7 7Q16 10.594 16 11z'}}", d='M16 17q0 .406-.297.703l-7 7Q8.406 25 8 25t-.703-.297l-7-7Q0 17.406 0 17t.297-.703T1 16h14q.406 0 .703.297T16 17zm0-6q0 .406-.297.703T15 12H1q-.406 0-.703-.297T0 11t.297-.703l7-7Q7.594 3 8 3t.703.297l7 7Q16 10.594 16 11z')
              // end ngIf: sortable !== false
              // ngIf: sortable === false
          // ngIf: !ctrl.isImpressionsBuyType()
          // ngIf: ctrl.isImpressionsBuyType()
          th.vui-cell-wrap.ng-scope(style='width:100px', ng-if='ctrl.isImpressionsBuyType()')
            vui-sorting-column.ng-isolate-scope(title='Station IMP', column-name='VideaImpressions', sorting-changed='ctrl.columnSortingChanged(column)', current-sorting='ctrl.sorting')
              // ngIf: sortable !== false
              a.vui-grid.vui-grid--align-spread.ng-scope(href='', ng-click='ctrl.changeSorting()', ng-if='sortable !== false')
                span.vui-align-middle.vui-size--4-of-5.vui-show.ng-binding(ng-bind-html='safeTitle') Station IMP
                span(ng-transclude='')
                span.vui-align-middle.vui-size--1-of-5.vui-text-align--right.vui-show
                  svg.vui-icon.vui-icon--x-small.vui-align-middle.vui-sort(viewbox='0 0 16 28', ng-class="{'vui-sort': currentSorting.columnName !== columnName}")
                    path(fill='currentColor', xmlns:xlink='http://www.w3.org/1999/xlink', xlink:href='', ng-attr-d="{{currentSorting.columnName === columnName ? currentSorting.sortedDesc ? 'M16 17q0 .406-.297.703l-7 7Q8.406 25 8 25t-.703-.297l-7-7Q0 17.406 0 17t.297-.703T1 16h14q.406 0 .703.297T16 17z' : 'M16 11q0 .406-.297.703T15 12H1q-.406 0-.703-.297T0 11t.297-.703l7-7Q7.594 3 8 3t.703.297l7 7Q16 10.594 16 11z' : 'M16 17q0 .406-.297.703l-7 7Q8.406 25 8 25t-.703-.297l-7-7Q0 17.406 0 17t.297-.703T1 16h14q.406 0 .703.297T16 17zm0-6q0 .406-.297.703T15 12H1q-.406 0-.703-.297T0 11t.297-.703l7-7Q7.594 3 8 3t.703.297l7 7Q16 10.594 16 11z'}}", d='M16 17q0 .406-.297.703l-7 7Q8.406 25 8 25t-.703-.297l-7-7Q0 17.406 0 17t.297-.703T1 16h14q.406 0 .703.297T16 17zm0-6q0 .406-.297.703T15 12H1q-.406 0-.703-.297T0 11t.297-.703l7-7Q7.594 3 8 3t.703.297l7 7Q16 10.594 16 11z')
              // end ngIf: sortable !== false
              // ngIf: sortable === false
          // end ngIf: ctrl.isImpressionsBuyType()
          th(style='width:100px')
            vui-sorting-column.ng-isolate-scope(title='Station CPM', column-name='Cppm', sorting-changed='ctrl.columnSortingChanged(column)', current-sorting='ctrl.sorting')
              // ngIf: sortable !== false
              a.vui-grid.vui-grid--align-spread.ng-scope(href='', ng-click='ctrl.changeSorting()', ng-if='sortable !== false')
                span.vui-align-middle.vui-size--4-of-5.vui-show.ng-binding(ng-bind-html='safeTitle') Station CPM
                span(ng-transclude='')
                span.vui-align-middle.vui-size--1-of-5.vui-text-align--right.vui-show
                  svg.vui-icon.vui-icon--x-small.vui-align-middle.vui-sort(viewbox='0 0 16 28', ng-class="{'vui-sort': currentSorting.columnName !== columnName}")
                    path(fill='currentColor', xmlns:xlink='http://www.w3.org/1999/xlink', xlink:href='', ng-attr-d="{{currentSorting.columnName === columnName ? currentSorting.sortedDesc ? 'M16 17q0 .406-.297.703l-7 7Q8.406 25 8 25t-.703-.297l-7-7Q0 17.406 0 17t.297-.703T1 16h14q.406 0 .703.297T16 17z' : 'M16 11q0 .406-.297.703T15 12H1q-.406 0-.703-.297T0 11t.297-.703l7-7Q7.594 3 8 3t.703.297l7 7Q16 10.594 16 11z' : 'M16 17q0 .406-.297.703l-7 7Q8.406 25 8 25t-.703-.297l-7-7Q0 17.406 0 17t.297-.703T1 16h14q.406 0 .703.297T16 17zm0-6q0 .406-.297.703T15 12H1q-.406 0-.703-.297T0 11t.297-.703l7-7Q7.594 3 8 3t.703.297l7 7Q16 10.594 16 11z'}}", d='M16 17q0 .406-.297.703l-7 7Q8.406 25 8 25t-.703-.297l-7-7Q0 17.406 0 17t.297-.703T1 16h14q.406 0 .703.297T16 17zm0-6q0 .406-.297.703T15 12H1q-.406 0-.703-.297T0 11t.297-.703l7-7Q7.594 3 8 3t.703.297l7 7Q16 10.594 16 11z')
              // end ngIf: sortable !== false
              // ngIf: sortable === false
          th.vui-cell-wrap(style='width:200px') Makegood Comments
  .vui-scrollable.fixed-header-grid-body.ng-scope(vui-floating-scroll='')
    table.vui-table.vui-no-row-hover.vui-table--fixed-layout.mg-offer-spots
      tbody
        // ngRepeat: item in items | orderBy:ctrl.sorting.columnName:ctrl.sorting.sortedDesc
        tr.ng-scope(ng-repeat='item in items | orderBy:ctrl.sorting.columnName:ctrl.sorting.sortedDesc')
          td.vui-truncate.vui-text-align--center(style='width:80px', title='1')
            // ngIf: ::ctrl.isEditMode
            span.ng-binding(ng-bind='::item.lineNumber') 1
          td.vui-truncate.ng-binding(style='width:110px', ng-bind='::item.days|vuiDaysAbbreviation', title='SA') SA
          td.vui-truncate.ng-binding(style='width:95px', ng-bind='::item.startTime|vuiTime', title='12:00 am') 12:00 am
          td.vui-truncate.ng-binding(style='width:95px', ng-bind='::item.endTime|vuiTime', title='1:00 am') 1:00 am
          td.vui-truncate.ng-binding(style='width:310px', ng-bind='::item.programName', title='Modern Family') Modern Family
          td.vui-truncate.vui-text-align--right.ng-binding(style='width:60px', ng-bind='::item.spotLength|vuiSeconds', title='15 s') 15 s
          td.vui-truncate.vui-text-align--right.ng-binding(style='width:85px', ng-bind='::item.totalSpots', title='2') 2
          td.spot-allocation-cell(ng-style="{'width': ctrl.spotAllocationNavigator.tableCellWidth}", style='width: 503px;')
            vom-spot-allocation-with-missed-spots.ng-pristine.ng-untouched.ng-valid.ng-isolate-scope.ng-not-empty(ng-model='item.spotAllocations', navigator='ctrl.spotAllocationNavigator')
              .spot-allocation-row
                .spot-allocation-container.spot-allocation-data(ng-style="{'width': vm.navigator.spotsWidth}", style='width: 455px;')
                  ul.spot-allocation(ng-style="{'left': vm.navigator.left + 'px'}", style='left: 0px;')
                    // ngRepeat: spot in vm.spots
                    li.ng-scope(ng-repeat='spot in vm.spots', ng-class="::{'hiatus-spot': spot.isHiatus}")
                      div
                        span
                          span.ng-binding(ng-bind='::spot.value') 1
                          // ngIf: ::(spot.value !== null && spot.missedSpots)
                          // ngIf: spot.missedSpots
                    // end ngRepeat: spot in vm.spots
                    li.ng-scope(ng-repeat='spot in vm.spots', ng-class="::{'hiatus-spot': spot.isHiatus}")
                      div
                        span
                          span.ng-binding(ng-bind='::spot.value') 1
                          // ngIf: ::(spot.value !== null && spot.missedSpots)
                          // ngIf: spot.missedSpots
                    // end ngRepeat: spot in vm.spots
                    li.ng-scope(ng-repeat='spot in vm.spots', ng-class="::{'hiatus-spot': spot.isHiatus}")
                      div
                        span
                          span.ng-binding(ng-bind='::spot.value')
                          // ngIf: ::(spot.value !== null && spot.missedSpots)
                          // ngIf: spot.missedSpots
                    // end ngRepeat: spot in vm.spots
                    li.ng-scope(ng-repeat='spot in vm.spots', ng-class="::{'hiatus-spot': spot.isHiatus}")
                      div
                        span
                          span.ng-binding(ng-bind='::spot.value')
                          // ngIf: ::(spot.value !== null && spot.missedSpots)
                          // ngIf: spot.missedSpots
                    // end ngRepeat: spot in vm.spots
                    li.ng-scope(ng-repeat='spot in vm.spots', ng-class="::{'hiatus-spot': spot.isHiatus}")
                      div
                        span
                          span.ng-binding(ng-bind='::spot.value')
                          // ngIf: ::(spot.value !== null && spot.missedSpots)
                          // ngIf: spot.missedSpots
                    // end ngRepeat: spot in vm.spots
                    li.ng-scope(ng-repeat='spot in vm.spots', ng-class="::{'hiatus-spot': spot.isHiatus}")
                      div
                        span
                          span.ng-binding(ng-bind='::spot.value')
                          // ngIf: ::(spot.value !== null && spot.missedSpots)
                          // ngIf: spot.missedSpots
                    // end ngRepeat: spot in vm.spots
                    li.ng-scope(ng-repeat='spot in vm.spots', ng-class="::{'hiatus-spot': spot.isHiatus}")
                      div
                        span
                          span.ng-binding(ng-bind='::spot.value')
                          // ngIf: ::(spot.value !== null && spot.missedSpots)
                          // ngIf: spot.missedSpots
                    // end ngRepeat: spot in vm.spots
                    li.ng-scope(ng-repeat='spot in vm.spots', ng-class="::{'hiatus-spot': spot.isHiatus}")
                      div
                        span
                          span.ng-binding(ng-bind='::spot.value')
                          // ngIf: ::(spot.value !== null && spot.missedSpots)
                          // ngIf: spot.missedSpots
                    // end ngRepeat: spot in vm.spots
                    li.ng-scope(ng-repeat='spot in vm.spots', ng-class="::{'hiatus-spot': spot.isHiatus}")
                      div
                        span
                          span.ng-binding(ng-bind='::spot.value')
                          // ngIf: ::(spot.value !== null && spot.missedSpots)
                          // ngIf: spot.missedSpots
                    // end ngRepeat: spot in vm.spots
                    li.ng-scope(ng-repeat='spot in vm.spots', ng-class="::{'hiatus-spot': spot.isHiatus}")
                      div
                        span
                          span.ng-binding(ng-bind='::spot.value')
                          // ngIf: ::(spot.value !== null && spot.missedSpots)
                          // ngIf: spot.missedSpots
                    // end ngRepeat: spot in vm.spots
                    li.ng-scope(ng-repeat='spot in vm.spots', ng-class="::{'hiatus-spot': spot.isHiatus}")
                      div
                        span
                          span.ng-binding(ng-bind='::spot.value')
                          // ngIf: ::(spot.value !== null && spot.missedSpots)
                          // ngIf: spot.missedSpots
                    // end ngRepeat: spot in vm.spots
                    li.ng-scope(ng-repeat='spot in vm.spots', ng-class="::{'hiatus-spot': spot.isHiatus}")
                      div
                        span
                          span.ng-binding(ng-bind='::spot.value')
                          // ngIf: ::(spot.value !== null && spot.missedSpots)
                          // ngIf: spot.missedSpots
                    // end ngRepeat: spot in vm.spots
                    li.ng-scope(ng-repeat='spot in vm.spots', ng-class="::{'hiatus-spot': spot.isHiatus}")
                      div
                        span
                          span.ng-binding(ng-bind='::spot.value')
                          // ngIf: ::(spot.value !== null && spot.missedSpots)
                          // ngIf: spot.missedSpots
                    // end ngRepeat: spot in vm.spots
          td.vui-truncate.vui-text-align--right(style='width:100px', title='$16.25')
            span $
            // ngIf: ::ctrl.isEditMode
            // ngIf: ::!ctrl.isEditMode
            span.ng-binding.ng-scope(ng-if='::!ctrl.isEditMode', ng-bind='::item.spotRate|currency') $16.25
            // end ngIf: ::!ctrl.isEditMode
          // ngIf: !ctrl.isImpressionsBuyType()
          // ngIf: ctrl.isImpressionsBuyType()
          td.vui-truncate.vui-text-align--right.currency.ng-scope(style='width:100px', ng-if='ctrl.isImpressionsBuyType()', title='5')
            // ngIf: ::ctrl.isEditMode
            // ngIf: ::!ctrl.isEditMode
            span.ng-binding.ng-scope(ng-if='::!ctrl.isEditMode', ng-bind='::item.videaImpressions|vuiImpressions') 5
            // end ngIf: ::!ctrl.isEditMode
          // end ngIf: ctrl.isImpressionsBuyType()
          td.vui-truncate.vui-text-align--right.ng-binding(style='width:100px', ng-bind='ctrl.getStationCppm(item)|vuiDecimal|currency', title='$3.25') $3.25
          td.vui-truncate.ng-binding(style='width:200px', ng-bind='::item.comment', title='Program change until further notice') Program change until further notice
        // end ngRepeat: item in items | orderBy:ctrl.sorting.columnName:ctrl.sorting.sortedDesc
