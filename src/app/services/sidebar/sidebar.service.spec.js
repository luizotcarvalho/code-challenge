describe('service: SidebarService', function(){
    var sidebar;

    beforeEach(module('desafio'));
    beforeEach(inject(function(SidebarService){
        sidebar = SidebarService;
    }));

    it('should toggle open state', function() {
        expect(sidebar.open).toBe(false);
        sidebar.toggle();
        expect(sidebar.open).toBe(true);
    });
});
