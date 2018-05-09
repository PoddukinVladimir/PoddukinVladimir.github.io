'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var commentsCtrl = function () {
    function commentsCtrl(itemsFactory, $scope) {
        var _this = this;

        _classCallCheck(this, commentsCtrl);

        this.itemsFactory = itemsFactory;
        this.items = itemsFactory.getItems();
        this.number = '';

        $scope.$watch(function () {
            return _this.itemsFactory.getItems();
        }, function (updatedData, oldData) {
            // updating data from service
            _this.items = updatedData;

            if (_this.currentIndex !== undefined && _this.currentItem !== undefined) {
                _this.currentItem = updatedData[_this.currentIndex];
                _this.currentComments = _this.currentItem.comments;
            }
        }, true);

        $scope.$on('itemIsSelected', function (event, data) {
            _this.currentIndex = data.number;
            _this.number = data.number + 1;
            _this.currentComments = _this.getCurrentComments();
        });

        $scope.$on('itemIsDeleted', function (event, id) {
            if (!_this.currentItem || id !== _this.currentItem.id) return;

            // deleting comments
            _this.clearData();
        });
    }

    _createClass(commentsCtrl, [{
        key: 'clearData',
        value: function clearData() {
            this.currentComments = undefined;
            this.currentItem = undefined;
        }
    }, {
        key: 'getCurrentComments',
        value: function getCurrentComments() {
            this.currentItem = this.itemsFactory.getItems()[this.currentIndex];
            return this.currentItem.comments;
        }
    }, {
        key: 'addComment',
        value: function addComment() {
            this.itemsFactory.addComment(this.currentItem, this.commentText);
            this.clearTextArea();
        }
    }, {
        key: 'clearTextArea',
        value: function clearTextArea() {
            this.commentText = "";
        }
    }, {
        key: 'isAnyItemSelected',
        value: function isAnyItemSelected() {
            return this.currentItem !== undefined;
        }
    }]);

    return commentsCtrl;
}();
//# sourceMappingURL=app-comments.controller.js.map