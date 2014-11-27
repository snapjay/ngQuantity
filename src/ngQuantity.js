'use strict';

angular.module('ngQuantity', [])

    .directive('quantity', function () {
        return {
            restrict: 'E',
            require: '?ngModel',
            scope: {
                id: '@',
                min: '@',
                max: '@',
                step: '@',
                value: '='
            },
            //TODO: Extend ngModel
            link: function (scope, element, attrs, ngModel) {



                //element.on('click', function () {
                //    ngModel.$setViewValue(ngModel.$viewValue+10)
                //    scope.$apply();
                //})

                if (!attrs.step)attrs.step = 1;

                scope.id = attrs.id;
                scope.step = parseInt(attrs.step);
                scope.min = parseInt(attrs.min);
                scope.max = parseInt(attrs.max);
                //  scope.ttt = ngModel.$viewValue;

                //ngModel.$render = function() {
                //    scope.ttt = ngModel.$viewValue;
                //};
                //
                //scope.decrease = function(){
                //
                //    ngModel.$setViewValue(ngModel.$viewValue-10);
                //    scope.ttt = ngModel.$viewValue;
                //    //    scope.$apply();
                //}
                //scope.increase = function(){
                //    ngModel.$setViewValue(ngModel.$viewValue+10);
                //    scope.ttt = ngModel.$viewValue;
                //  //  scope.$apply();
                //}

            },
            controller: ['$rootScope', '$scope', function ($rootScope, $scope) {

                if (!$scope.step) $scope.step = 1;

                $scope.disabled = {
                    min: true,
                    max: true
                }

                $scope.increase = function (bool) {

                    var val = parseInt($scope.value);
                    var step = parseInt($scope.step);

                    if (bool) {
                        if ($scope.disabled.max === true) return false;
                        $scope.value = val + step;
                    } else {
                        if ($scope.disabled.min === true) return false;
                        $scope.value = val - step;
                    }

                    $rootScope.$broadcast('ngQuantity-change', $scope.id, $scope.value, val, step);
                    $scope._updateDisabled();
                }

                $scope._updateDisabled = function () {

                    var val = parseInt($scope.value);
                    var step = parseInt($scope.step);

                    if (typeof $scope.max !== 'undefined') {
                        if (($scope.max) && (val + step) > $scope.max) {
                            $scope.disabled.max = true;
                        } else {
                            $scope.disabled.max = false;
                        }
                    } else {
                        $scope.disabled.max = false;
                    }


                    if (typeof $scope.min !== 'undefined') {
                        if ((val - step) < $scope.min) {
                            $scope.disabled.min = true;
                        } else {
                            $scope.disabled.min = false;
                        }
                    } else {
                        $scope.disabled.min = false;
                    }
                }

                $scope._updateDisabled();
            }],

            templateUrl: 'template/quantity/picker.html'
        }
    })