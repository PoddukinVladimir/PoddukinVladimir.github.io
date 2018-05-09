class ItemsCtrl {
    constructor(itemsFactory, $scope) {
        this.itemsFactory = itemsFactory;
        this.items = itemsFactory.getItems();

        $scope.$watch(() => this.itemsFactory.getItems(), (updatedData, oldData) => {
            this.items = updatedData;
        }, true);

        $scope.$on('itemIsSelected', (event, data) => {
            this.currentItem = data.item;
        });
    }

    addNewItem() {
        this.itemsFactory.addItem(this.text);
        this.clearText();
    }

    clearText() {
        this.text = '';
    }
}