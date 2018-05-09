class ItemCtrl {
    constructor(itemsFactory, $rootScope, $scope) {
        this.$rootScope = $rootScope;
        this.items = itemsFactory.getItems();
        this.itemsFactory = itemsFactory;

        $scope.$watch(() => this.itemsFactory.getItems(), (updatedData, oldData) => {
            this.items = updatedData;
        }, true);
    }

    deleteItem() {
        this.itemsFactory.deleteItem(this.item.id);
        this.$rootScope.$broadcast('itemIsDeleted', this.item.id);
    }

    selectCurrentItem(item) {
        let number = this.itemsFactory.findIndexOfItemByID(item.id);
        this.$rootScope.$broadcast('itemIsSelected', {item: item, number: number});
    }

    isSelected(item) {
        if (!item || !this.currentItem) return false;
        return item.id === this.currentItem.id;
    }
}