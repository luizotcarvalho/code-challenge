describe('controllers: main', function(){
    var vm, $scope, PropertiesServiceMock, $provide;

    beforeEach(module('desafio'));
    beforeEach(angular.mock.module(function (_$provide_) {
        $provide = _$provide_;
    }));
    beforeEach(inject(function(_$controller_, _$rootScope_) {
        $scope = _$rootScope_.$new();

        PropertiesServiceMock = {
            getPropertyById: function(){
                return {
                    success:function(){return this;},
                    error: function(){return this;},
                    finally: function(){return this;}
                }
            },
            getPropertiesByCoord: function(){
                return {
                    success:function(){return this;},
                    error: function(){return this;},
                    finally: function() {return this;}
                }
            }
        };

        $provide.value('PropertiesService', PropertiesServiceMock);
        vm = _$controller_('MainController', {$scope: $scope});
    }));

    it('should have called getPropertiesByCoord', function() {
        spyOn(vm, 'getPropertiesByCoord');
        $scope.$digest();
        expect(vm.getPropertiesByCoord).toHaveBeenCalled();
    });
});

