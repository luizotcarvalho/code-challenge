angular.module('desafio').directive('sidebar', function () {
    return {
        restrict: 'E',
        templateUrl: 'app/components/sidebar/sidebar.html',
        controller: function ($scope, SidebarService) {
            $scope.sidebar = SidebarService;
        }
    };
});
