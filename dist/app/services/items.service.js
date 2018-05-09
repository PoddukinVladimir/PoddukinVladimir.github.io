'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

angular.module('dairyApp').factory('itemsFactory', function ($window) {

    // Model
    var items = [];

    if ($window.localStorage.getItem('isInitialized') === 'true') {
        items = getItemsFromLocalStorage();
    }

    // Private methods
    function isTextEmpty(text) {
        return text === undefined || text === '';
    }

    function findIndexOfItemByID(id) {
        for (var i = 0; i < items.length; i++) {
            if (items[i].id === id) {
                return i;
            }
        }
    }

    function generateGuid() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        }

        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    }

    function setItemsToLocalStorage() {
        $window.localStorage.setItem('items', JSON.stringify(items));
    }

    function getItemsFromLocalStorage() {
        return JSON.parse($window.localStorage.getItem('items'));
    }

    return {
        getItems: function getItems() {
            return getItemsFromLocalStorage();
        },
        addItem: function addItem(text) {
            if (isTextEmpty(text)) return;
            if (typeof text === 'string') {
                var id = generateGuid();
                items.push(new Item(text, id));
                setItemsToLocalStorage();
            } else if ((typeof text === 'undefined' ? 'undefined' : _typeof(text)) === 'object') {
                text.id = generateGuid();
                items.push(text);
                setItemsToLocalStorage();
            }
        },
        deleteItem: function deleteItem(id) {
            var index = findIndexOfItemByID(id);
            items.splice(index, 1);
            setItemsToLocalStorage();
        },
        findIndexOfItemByID: findIndexOfItemByID,
        addComment: function addComment(item, text) {
            if (isTextEmpty(text)) return;
            var index = findIndexOfItemByID(item.id);
            items[index].comments.push(new Comment(text));
            setItemsToLocalStorage();
        }
    };
});
//# sourceMappingURL=items.service.js.map