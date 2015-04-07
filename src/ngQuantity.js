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
				scope.step = parseFloat(attrs.step);
				scope.min = parseFloat(attrs.min);
				scope.max = parseFloat(attrs.max);
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

				var step = parseFloat($scope.step);
				var min = parseFloat($scope.min);
				var max = parseFloat($scope.max);

				$scope.disabled = {
					min: true,
					max: true
				};

				$scope.increase = function (bool) {

					var val = parseFloat($scope.value);

					if (bool) {
						if ($scope.disabled.max === true) return false;
						if ((!max) || ($scope.value < max)) {
							$scope._setValue(val + step);
						}
					} else {
						if ($scope.disabled.min === true) return false;
						if ((!min) || ($scope.value > min)) {
							$scope._setValue(val - step);
						}
					}

					$rootScope.$broadcast('ngQuantity-change', $scope.id, $scope.value, val, step);
					$scope._updateDisabled();
				};

				$scope._setValue = function(value) {
					var newVal = value;

					if (typeof $scope.step.toString().split('.')[1] == 'undefined'){
						 newVal =  value;
					} else {
						 newVal = $scope.value = value.toPrecision($scope.step.toString().split('.')[1].length + 1);
					}

					$scope.value = newVal;
					return $scope.value;
				};

				$scope._updateDisabled = function () {

					var val = parseFloat($scope.value);

					if (typeof $scope.max !== 'undefined') {
						$scope.disabled.max = val + step > max;
					} else {
						$scope.disabled.max = false;
					}

					if (typeof $scope.min !== 'undefined') {
						$scope.disabled.min = val - step < min;
					} else {
						$scope.disabled.min = false;
					}
				};

				$scope._updateDisabled();
			}],

			templateUrl: 'template/quantity/picker.html'
		}
	})
