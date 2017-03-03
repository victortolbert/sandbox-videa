import angular from 'angular';
// jQuery was used because this directive has some specific DOM manipulations which became much easier with it.
import $ from "jquery";

// The directive will provide functionality for changing table html element. The table will be splited in three
// tables and wrapped into special html structure for fixing thead and tfoot parts of the table.
export default ["$log", "$window", "$timeout", function ($log, $window, $timeout) {
    const $win = $($window);

    let vuiFixedHeaderAndFooterTemplate = function (element, attrs) {
        let thead = $(element.find('> thead'));
        let tbody = $(element.find('> tbody'));
        let tfoot = $(element.find('> tfoot'));

        // Verification table on valid structure
        if (!thead || !tbody || !tfoot) {
            $log.error('vuiFixedHeaderAndFooter directive is not appliyed, the table should contains <thead>, <tbody>' +
                ' and <foot> elements.');
            return;
        }

        // Create new table for populating it with thead, tbody and tfoot from source table
        let tableTemplate = $("<table></table>");
        angular.forEach(attrs.$attr, function (attributeName) {
            tableTemplate.attr(attributeName, attrs[attributeName]);
        });

        // Split table to three tables where first one should contains <thead>, the second one <tbody>
        // and the third - <tfoot> elements
        let header = tableTemplate.clone().append(thead);
        let body = tableTemplate.clone().append(tbody);
        let footer = tableTemplate.clone().append(tfoot);

        // Is needed because of emulating of scrolling with css 'left' property
        $(header).css('position', 'relative');
        $(body).css('position', 'relative');

        // Put tables to the template
        element.replaceWith(`<div class="fixed-header-grid">
                                    <div class="fixed-header-grid-header">
                                        ${header[0].outerHTML}
                                    </div>
                                    <div class="fixed-header-footer-grid-body vui-scrollable--y">
                                        ${body[0].outerHTML}
                                    </div>
                                    <div class="fixed-footer-grid-footer vui-scrollable--x">
                                        ${footer[0].outerHTML}
                                    </div>
                                </div>`);
    };

    let vuiFixedHeaderAndFooterLink = function (scope, element) {
        let divs = $(element).find('> div');
        let headerDivElement = $(divs[0]);
        let headerTableElement = $(headerDivElement.find('> table')[0]);
        let bodyDivElement = $(divs[1]);
        let footerDivElement = $(divs[2]);

        // Need to update position if user scrolling.
        $win.bind('scroll', setPositions);

        // Need to update the width and position when user makes zooming
        $win.bind('resize', onResize);

        // Add handler which will scroll header and footer
        footerDivElement.bind('scroll', scrollTable);

        // Remove handlers on destroy to avoid memory leaks
        scope.$on('$destroy', function() {
            $win.unbind('scroll', setPositions);
            $win.unbind('resize', onResize);
            footerDivElement.unbind('scroll', scrollTable);
        });

        // Set initial UI State and listening for DOM changes
        setUIState();

        function setUIState(){
            // In the $timeout we're waiting until these DOM mutations will be finished and set UI state
            $timeout(() => {
                setTableBodyMargins();
                setWidth();
                setPositions();
                scrollTable();
                // Reapply DOM changes handler
                updateOnDOMChanges();
            })
        }

        function onResize(){
            setTableBodyMargins();
            setWidth();
            setPositions();
        }

        // Next function is kinda a very dirty hack. What is going on here:
        // We are listening once for 'DOMSubtreeModified' event which is triggering on DOM changes and it means that
        // rows began to be inserted after some ajax call, for example. So we're starting to listen to it again when
        // DOM modifications are finished - to not get into endless cycle
        function updateOnDOMChanges(){
            $timeout(() => {
                $(element).one('DOMSubtreeModified', setUIState);
            })
        }

        // This function is needed because we need to take some space for header and footer in grid but we can't do
        // this with css because content is dynamic
        function setTableBodyMargins(){
            bodyDivElement.css({
                // 10 is needed just in case if footer is hidden initially
                'margin-bottom': footerDivElement.height() || 10,
                'margin-top': headerTableElement.height()
            });
        }

        function setWidth(){
            let headerAndFooterWidth = element.width() || 'auto';
            headerDivElement.width(headerAndFooterWidth);
            footerDivElement.width(headerAndFooterWidth);
        }

        function scrollTable(){
            let scrollLeft = footerDivElement.scrollLeft();
            bodyDivElement.scrollLeft(scrollLeft);
            headerDivElement.scrollLeft(scrollLeft);
        }

        function setPositions(){
            let $el = $(element);
            let elOffset = $el.offset();
            let windowScrollTop = $win.scrollTop();
            let containerHeight = $el.height();
            let containerOffset = elOffset.top;
            let headerHeight = headerTableElement.height();
            let footerHeight = footerDivElement.height();
            let maxOffsetForHeader = containerOffset + containerHeight - headerHeight;
            let maxOffsetForFooter = containerOffset + containerHeight;
            let scrolledSpace = $win.height() + windowScrollTop;

            // Position of header
            let headerStyle = getStyles(windowScrollTop > containerOffset && windowScrollTop < maxOffsetForHeader);
            headerDivElement.css(headerStyle);

            // Position of footer
            let footerStyle = getStyles(scrolledSpace > containerOffset + headerHeight + footerHeight &&
                scrolledSpace < maxOffsetForFooter);
            footerDivElement.css(footerStyle);

            function getStyles(isFloating){
                return isFloating ?
                    {
                        'position': 'fixed',
                        // Left is used in case if window has horizontal scroll
                        left: elOffset.left - $win.scrollLeft()
                    } :
                    {
                        'position': 'absolute',
                        left: 0
                    };
            }
        }
    };

    return {
        restrict: 'A',
        // TODO [2017\01\23 KB]: Actually it's not correct usage of template function, have to change compile and call
        // link from there
        template: vuiFixedHeaderAndFooterTemplate,
        link: vuiFixedHeaderAndFooterLink
    };
}];
