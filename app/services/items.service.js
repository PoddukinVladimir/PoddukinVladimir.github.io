angular.module('dairyApp').factory('itemsFactory', function ($window) {

    // Model
    let items = [];

    if ($window.localStorage.getItem('isInitialized') === 'true') {
        items = getItemsFromLocalStorage();
    }

    // Private methods
    function isTextEmpty(text) {
        return text === undefined || text === '';
    }

    function findIndexOfItemByID(id) {
        for (let i = 0; i < items.length; i++) {
            if (items[i].id === id) {
                return i;
            }
        }
    }

    function generateGuid() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
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
        getItems: function () {
            return getItemsFromLocalStorage();
        },
        addItem: function (text) {
            if (isTextEmpty(text)) return;
            if (typeof text === 'string') {
                let id = generateGuid();
                items.push(new Item(text, id));
                setItemsToLocalStorage();
            } else if (typeof text === 'object') {
                text.id = generateGuid();
                items.push(text);
                setItemsToLocalStorage();
            }
        },
        deleteItem: function (id) {
            let index = findIndexOfItemByID(id);
            items.splice(index, 1);
            setItemsToLocalStorage();
        },
        findIndexOfItemByID: findIndexOfItemByID,
        addComment: function (item, text) {
            if (isTextEmpty(text)) return;
            let index = findIndexOfItemByID(item.id);
            items[index].comments.push(new Comment(text));
            setItemsToLocalStorage();
        }
    }
});