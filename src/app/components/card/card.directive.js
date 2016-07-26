angular.module('desafio').directive('card', function () {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            property: '='
        },
        templateUrl: 'app/components/card/card.html'
    };
});
