'use strict';

angular.module('dairyApp').component('appItem', {
    templateUrl: 'app/components/app-item/app-item.component.html',
    bindings: {
        'item': '<',
        'currentItem': '<'
    },
    controller: ItemCtrl
});
//# sourceMappingURL=app-item.component.js.map