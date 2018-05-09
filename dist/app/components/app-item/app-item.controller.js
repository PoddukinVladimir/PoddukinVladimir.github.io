'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ItemCtrl = function () {
    function ItemCtrl(itemsFactory, $rootScope, $scope) {
        var _this = this;

        _classCallCheck(this, ItemCtrl);

        this.$rootScope = $rootScope;
        this.items = itemsFactory.getItems();
        this.itemsFactory = itemsFactory;

        $scope.$watch(function () {
            return _this.itemsFactory.getItems();
        }, function (updatedData, oldData) {
            _this.items = updatedData;
        }, true);
    }

    _createClass(ItemCtrl, [{
        key: 'deleteItem',
        value: function deleteItem() {
            this.itemsFactory.deleteItem(this.item.id);
            this.$rootScope.$broadcast('itemIsDeleted', this.item.id);
        }
    }, {
        key: 'selectCurrentItem',
        value: function selectCurrentItem(item) {
            var number = this.itemsFactory.findIndexOfItemByID(item.id);
            this.$rootScope.$broadcast('itemIsSelected', { item: item, number: number });
        }
    }, {
        key: 'isSelected',
        value: function isSelected(item) {
            if (!item || !this.currentItem) return false;
            return item.id === this.currentItem.id;
        }
    }]);

    return ItemCtrl;
}();
//# sourceMappingURL=app-item.controller.js.map