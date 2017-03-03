import templateUrl from "../templates/price-guide-programs-table.html";
"use strict";

var priceGuideProgramsTableController = function($scope, $filter, priceGuideService) {
    var self = this;
    self.firstRunRatingTypeWatch = true;
    self.stationColumns = 4;
    if ($scope.programData) {
        self.programName = $scope.programData.program;
    }
    $scope.$watch(function() { return $scope.ratingType; }, function(newValue, oldValue) {
        if (!angular.equals(newValue, oldValue) || self.firstRunRatingTypeWatch) {
            if (newValue === "CPP") {
                self.ratingType.rating = true;
                self.ratingType.impressions = false;
                self.ratingTypeDisplay = "Rating";
                self.cpDisplay = "CPP";
            }
            if (newValue === "CPM") {
                self.ratingType.impressions = true;
                self.ratingType.rating = false;
                self.ratingTypeDisplay = "IMPS";
                self.cpDisplay = "CPM";
            }
        }
    });
    self.ratingType = {
        rating: true,
        impressions: false
    };
    self.allWeeksSelected = function(month) {
        var allWeeksSelected = true;

        for (let i = 0; i < month.details.length; i++) {
            if (month.details[i].checked !== true) {
                allWeeksSelected = false;
                break;
            }
        }

        return allWeeksSelected;
    }
    self.getWeeksToShow = function(month) {
        return month.details.filter(function(value) {
            return value.checked;
        });
    };
    self.ratingOnClick = function(detail) {
        $scope.showRatingModal = true;
        $scope.programFromRating = detail;
    };
    self.detailRateChanged = function(detail) {
        detail.acceptedVideaRate.value = false;
    };
    var programAverageFor = function(program, reducerField, reducerSubField = "value") {
        var count = 0;
        const total = program.details.reduce(function(monthacc, month) {
            const weektotal = month.details.reduce(function(weekacc, week) {
                count ++;
                if (week.checked) {
                    return weekacc + (typeof (week[reducerField][reducerSubField]) !== "undefined" ? week[reducerField][reducerSubField] : week[reducerField]);
                } else {
                    return weekacc + (typeof (month[reducerField][reducerSubField]) !== "undefined" ? month[reducerField][reducerSubField] : month[reducerField]);
                }
            }, 0);
            return monthacc + weektotal;
        }, 0);
        return total/count;
    };
    self.calculateCpp = function(detail) {
        return detail.stationRate.value
            ? detail.stationRate.value.toFixed(0) / detail.stationRating.value.toFixed(1)
            : 0;
    };
    self.calculateCpm = function(detail) {
        return detail.stationRate.value
            ? ((detail.stationRate.value * 1000) / detail.stationImpressions.value)
            : 0;
    };
    self.calculateImps = function(detail) {
        return (detail.stationRating.value * 0.01 * detail.universe);
    };
    self.calculateAverageRate = function(program) {
        return programAverageFor(program, "stationRate");
    };
    self.calculateAveragePreviouslyAcceptedRate = function(program) {
        return programAverageFor(program, "stationRate", "originalValue");
    };
    self.calculateAverageRating = function(program) {
        return programAverageFor(program, "stationRating");
    };
    self.calculateAverageImpressions = function(program) {
        return programAverageFor(program, "stationImpressions");
    };
    self.calculateAverageVideaRate = function(program) {
        return programAverageFor(program, "videaRate");
    };
    self.calculateAverageVideaRating = function(program) {
        return programAverageFor(program, "videaRating");
    };
    self.calculateAverageVideaImpressions = function(program) {
        return programAverageFor(program, "videaImpressions");
    };
    self.calculateAverageVideaCpm = function(program) {
        return ((self.calculateAverageVideaRate(program) * 1000) / self.calculateAverageVideaImpressions(program));
    };
    self.calculateAverageCpp = function(program) {
        return self.calculateAverageRate(program).toFixed(0) / self.calculateAverageRating(program).toFixed(1);
    };
    self.calculateAverageVideaCpp = function(program) {
        return self.calculateAverageVideaRate(program).toFixed(0) / self.calculateAverageVideaRating(program).toFixed(1);
    };
    self.calculateAverageCpm = function(program) {
        return ((self.calculateAverageRate(program) * 1000) / self.calculateAverageImpressions(program));
    };

    self.acceptVideaRateProgram = function(program, isRepUser) {
        //this is different from acceptVideaRate method--need to go through and acceptVideaRate for all children of this line.
        if (isRepUser) return;
        var months = [];
        if (!program.acceptedVideaRate.value) {
            months = program.details;
            months.forEach(function(month) {
                if (!month.acceptedVideaRate.value) {
                    self.acceptVideaRate(month, true);

                }
                const weeks = month.details;
                weeks.forEach(function(week) {

                    if (!week.acceptedVideaRate.value) {
                        self.acceptVideaRate(week, true);

                    }
                });
            });
        } else {
            months = program.details;
            months.forEach(function(month) {
                self.acceptVideaRate(month, false);
                const weeks = month.details;
                weeks.forEach(function(week) {
                    self.acceptVideaRate(week, false);

                });
            });

        };

        program.acceptedVideaRate.isDirty = !program.acceptedVideaRate.isDirty;
    };
    var updateAcceptVideaRateValueForProgram = (program) => {
        let anyAccepted = program.details.some((month) => {
            if (month.acceptedVideaRate.value)
                return true;
            let anyAcceptedWeek = month.details.some((week) => {
                return week.acceptedVideaRate.value;
            });
            return anyAcceptedWeek;
        });
        program.acceptedVideaRate.value = anyAccepted;
    };
    self.setAcceptVideaRateValueForProgram = (program) => {
        //run after the digest cycle to use the updated acceptedVideaRate per line
        setTimeout(() => {
            $scope.$apply(function() {
                updateAcceptVideaRateValueForProgram(program);
            });
        });
    };
    self.SetAcceptVideaRateValueForAll = () => {
        setTimeout(() => {
            $scope.$apply(function() {
                for (let program of $scope.programs) {
                    updateAcceptVideaRateValueForProgram(program);
                }
            });
        });
    };
    self.acceptVideaRate = function(line, acceptedVideaRateValue, isRepUser) {
        if (isRepUser) return;
        if (!line.acceptedVideaRate.value) {

            line.stationRate.value = line.videaRate;

        }

        if (acceptedVideaRateValue !== null && acceptedVideaRateValue !== undefined) {
            line.acceptedVideaRate.value = acceptedVideaRateValue;
        }
        line.checked = true;
        line.acceptedVideaRate.isDirty = !line.acceptedVideaRate.isDirty;
    };

    self.toggleWeekSelection = function(month) {
        if (month.showWeeks) {
            month.showWeeks = false;
        } else {
            month.showWeeks = true;
            setTimeout(function() {
                angular.element(".weekPopup").focus();
            });
        }
    };

    self.onWeekClicked = function(week) {
        if (week.stationRate.originalValue == null){
            week.acceptedVideaRate.value = true;
            week.acceptedVideaRate.isDirty = false;
            week.acceptedVideaRate.originalValue = true;
        }
        //keep focus on week selector
        setTimeout(function() {
            let weekSelector = angular.element(".weekPopup");
            weekSelector.blur();
            weekSelector.focus();
        });
    };

    self.redirectToSportsSpecials = function() {
        document.location.href = "/Shared/Sellers/Preferences#/SportsSpecialsSettings";
    };

    self.copyStationRate = function(details, obj) {
        let newStationRate = null;

        if (!obj.stationRate.value) {
            newStationRate = obj.stationRate.originalValue;
        } else {
            newStationRate = obj.stationRate.value;
        }

        angular.forEach(details,
            function(month) {
                month.stationRate.value = newStationRate;
                month.stationRate.isDirty = true;
                month.stationRate.isOverridden = true;
                month.acceptedVideaRate.value = false;
                month.acceptedVideaRate.isDirty = true;

                angular.forEach(month.details,
                    function(week) {
                        if (week.checked) {
                            week.stationRate.value = newStationRate;
                            week.stationRate.isDirty = true;
                            week.stationRate.isOverridden = true;
                            week.acceptedVideaRate.value = false;
                            week.acceptedVideaRate.isDirty = true;
                        }
                    });
            });
    };

    var indicatePreviousRatePerLine = function(element) {
        if (element.stationRate.originalValue !== null && element.stationRate.value !== element.stationRate.originalValue) {
            self.showPreviousRate = true;
            return;
        }
        if (element.details) {
            element.details.forEach(indicatePreviousRatePerLine);
        }
    };
    var indicatePreviousRate = function() {
        self.showPreviousRate = false;
        $scope.programs.forEach(indicatePreviousRatePerLine);
        self.stationColumns = self.showPreviousRate ? 4 : 3;
    };
    $scope.$watch("programsOnChange", function(newValue) {
        if (newValue) {
            indicatePreviousRate();
            $scope.programsOnChange = false;
            self.SetAcceptVideaRateValueForAll();
        }
    });


};

export default [
    function() {
        return {
            restrict: "E",
            templateUrl: templateUrl,
            scope: {
                programs: "=",
                ratingType: "=",
                demographic: "=",
                showRatingModal: "=",
                programFromRating: "=",
                isRepUser: "=",
                lastModified: "=",
                includeZeroSpots: "=",
                programsOnChange: "="
            },
            controller: ["$scope", "$filter", "priceGuideService", priceGuideProgramsTableController],
            controllerAs: "pgpt"
        };
    }
];
