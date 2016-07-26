angular.module('desafio').directive('navbar', function () {
    return {
        restrict: 'E',
        templateUrl: 'app/components/navbar/navbar.html',
        controller: function ($scope, SidebarService) {
            $scope.sidebar = SidebarService;
        }
    };
});

