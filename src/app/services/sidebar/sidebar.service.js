angular.module('desafio').factory('SidebarService', function () {
    var m = {
        open: false,
        toggle: function() {
            m.open = !m.open;
        }
    };

    return m;
});
