angular.module('desafio').config(function ($routeProvider) {
    $routeProvider.when('/', {
        controller: 'MainController',
        controllerAs: 'vm',
        templateUrl: '/app/views/anuncios.html'
    })
    .when('/ops', {
        templateUrl: '/app/views/ops.html'
    })
    .otherwise({redirectTo:'/ops'});
});

