angular.module('dairyApp').component('appItem', {
    templateUrl: 'app/components/app-item/app-item.component.html',
    bindings: {
        'item' : '<',
        'currentItem' : '<'
    },
    controller: ItemCtrl
});
