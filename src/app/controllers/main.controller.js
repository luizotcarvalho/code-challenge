angular.module('desafio').controller('MainController', function ($scope, PropertiesService) {
    var vm = this;
    vm.filters = {};

    $scope.$watch('vm.filters.id', function(new_value, old_value) {
        vm.properties = undefined;
        if(old_value !== new_value && new_value){
            vm.getPropertyById(new_value);
        }
        else {
            vm.getPropertiesByCoord();
        }
    });

    vm.filterFunc = function(item) {
        var result = true;

        // area
        if(vm.filters.squareMeters && item.squareMeters !== vm.filters.squareMeters.toString()){
            result = false;
        }

        // quartos
        if(vm.filters.beds && item.beds !== vm.filters.beds.toString()){
            result = false;
        }

        // banheiros
        if(vm.filters.baths && item.baths !== vm.filters.baths.toString()){
            result = false;
        }

        // preço min e max
        if(vm.filters.price_min && parseFloat(item.price) < parseFloat(vm.filters.price_min)){
            result = false;
        }

        if(vm.filters.price_max && parseFloat(item.price) > parseFloat(vm.filters.price_max)){
            result = false;
        }

        return result;
    };

    vm.getPropertyById = function(id){
        vm.loading = true;

        PropertiesService.getPropertyById(id)
        .success(function(results){
            if(results.id){
                vm.properties = [results];
            }
        })
        .error(function(){
            alert('Ocorreu um erro ao buscar o imóvel com o ID: ' + id + '. Tente novamente mais tarde.');
        })
        .finally(function(){
            vm.loading = false;
        });
    }

    vm.getPropertiesByCoord = function () {
        vm.loading = true;

        var coord = {
            ax: 1,
            ay: 1,
            bx: 20,
            by: 20
        };

        PropertiesService.getPropertiesByCoord(coord)
        .success(function(results){
            vm.properties = results.properties;
        })
        .error(function(){
            alert('Ocorreu um erro ao buscar os imóveis. Tente novamente mais tarde.');
        })
        .finally(function(){
            vm.loading = false;
        });
    }
});
