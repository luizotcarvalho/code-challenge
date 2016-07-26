angular.module('desafio').directive('filters', function () {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            filters: '='
        },
        templateUrl: 'app/components/filtros/filtros.html',
        controller: function ($scope) {
            $scope.toggle = function() {
                $scope.show = !$scope.show;
            };
        }
    };
});
