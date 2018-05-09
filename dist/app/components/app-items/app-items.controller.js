'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ItemsCtrl = function () {
    function ItemsCtrl(itemsFactory, $scope) {
        var _this = this;

        _classCallCheck(this, ItemsCtrl);

        this.itemsFactory = itemsFactory;
        this.items = itemsFactory.getItems();

        $scope.$watch(function () {
            return _this.itemsFactory.getItems();
        }, function (updatedData, oldData) {
            _this.items = updatedData;
        }, true);

        $scope.$on('itemIsSelected', function (event, data) {
            _this.currentItem = data.item;
        });
    }

    _createClass(ItemsCtrl, [{
        key: 'addNewItem',
        value: function addNewItem() {
            this.itemsFactory.addItem(this.text);
            this.clearText();
        }
    }, {
        key: 'clearText',
        value: function clearText() {
            this.text = '';
        }
    }]);

    return ItemsCtrl;
}();
//# sourceMappingURL=app-items.controller.js.map