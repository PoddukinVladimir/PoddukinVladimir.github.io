'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var dairyCtrl = function () {
    function dairyCtrl(itemsFactory, $window) {
        _classCallCheck(this, dairyCtrl);

        this.itemsFactory = itemsFactory;
        this.$window = $window;
    }

    _createClass(dairyCtrl, [{
        key: '$onInit',
        value: function $onInit() {
            // check if app has already been initialized before
            if (this.isInitialized()) return;

            this.$window.localStorage.setItem('isInitialized', true);

            // setting default items with comments for localStorage
            this.initializeAppWithDefaultItems();
        }
    }, {
        key: 'isInitialized',
        value: function isInitialized() {
            return this.$window.localStorage.getItem('isInitialized') === "true";
        }
    }, {
        key: 'initializeAppWithDefaultItems',
        value: function initializeAppWithDefaultItems() {
            var defaultItem = new Item('Some default item', "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx");

            defaultItem.comments.push(new Comment('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet consequuntur doloremque\n            minima odio provident sed? Ad atque culpa eaque eum expedita illum laboriosam laborum laudantium libero,\n            maxime minima mollitia, nemo numquam quae quaerat quasi quidem quod quos repellat sed suscipit, tempora\n            ullam velit vero voluptates. A adipisci aliquam aspernatur deleniti dicta dignissimos, dolore eos et id\n        illum ipsum itaque laudantium mollitia natus optio praesentium quaerat quisquam ratione recusandae rerum\n        saepe sed sint velit veritatis vitae! Accusamus ad animi assumenda deleniti esse explicabo, facere illum\n        ipsum itaque iure iusto maiores nemo nobis numquam officia quam qui reiciendis saepe sit veritatis vitae.'));

            this.itemsFactory.addItem(defaultItem);
        }
    }]);

    return dairyCtrl;
}();
//# sourceMappingURL=app-dairy.controller.js.map