angular.module('desafio').service('PropertiesService', function ($http, API) {
    function getPropertiesByCoord(params) {
        var promise = $http({
            method: 'GET',
            url: API.url,
            params: params
        });
        return promise;
    }

    function getPropertyById(id) {
        var promise = $http({
            method: 'GET',
            url: [API.url, id].join('/')
        });
        return promise;
    }

    return {
        getPropertiesByCoord: getPropertiesByCoord,
        getPropertyById: getPropertyById
    };
});
