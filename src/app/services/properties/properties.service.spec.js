describe('service: PropertiesService', function(){
    var $httpBackend, service, API;

    beforeEach(module('desafio'));
    beforeEach(inject(function($injector, _PropertiesService_, _API_){
        $httpBackend = $injector.get('$httpBackend');
        service = _PropertiesService_;
        API = _API_;
    }));

    it('should get a property by id', function() {
        var id = 1234;
        var property;
        var propertyResult = {
            id: 1234,
            title: 'Imóvel código 1234, com 5 quartos e 4 banheiros.',
            description: 'Voluptate ad culpa dolor aute reprehenderit consectetur anim aute irure adipisicing elit pariatur.',
            squareMeters: 194,
            price: 1985000,
            beds: 5,
            baths: 4,
            lat: 195,
            long: 559
        };

        $httpBackend.whenGET([API.url, id].join('/')).respond(200, propertyResult);

        service.getPropertyById(id).then(function(result){
            property = result.data;
        });

        $httpBackend.flush();
        expect(property.id).toEqual(id);
        expect(property.title).toEqual('Imóvel código 1234, com 5 quartos e 4 banheiros.');
    });

    it('should get a property by coordenades', function() {
        var coord = {
            ax: 1,
            ay: 1,
            bx: 20,
            by: 20
        };
        var properties;
        var propertiesResult = {
            properties: [
                {
                    id: 1234,
                    title: 'Imóvel código 1234, com 5 quartos e 4 banheiros.',
                    description: 'Voluptate ad culpa dolor aute reprehenderit consectetur anim aute irure adipisicing elit pariatur.',
                    squareMeters: 194,
                    price: 1985000,
                    beds: 5,
                    baths: 4,
                    lat: 195,
                    long: 559
                },
                {
                    id: 1235,
                    title: 'Imóvel código 1235, com 4 quartos e 3 banheiros.',
                    description: 'Voluptate ad culpa dolor aute reprehenderit consectetur anim aute irure adipisicing elit pariatur.',
                    squareMeters: 190,
                    price: 1980000,
                    beds: 4,
                    baths: 3,
                    lat: 194,
                    long: 558
                }
            ]
        };

        function serialiseParams(obj) {
            return Object.keys(obj).map(function(key) {
                return key + '=' + obj[key];
            }).join('&');
        }
        $httpBackend.whenGET([API.url, serialiseParams(coord)].join('?')).respond(200, propertiesResult);

        service.getPropertiesByCoord(coord).then(function(result){
            properties = result.data.properties;
        });

        $httpBackend.flush();
        expect(properties.length).toBe(2);
    });
});
