class commentsCtrl {
    constructor(itemsFactory, $scope) {
        this.itemsFactory = itemsFactory;
        this.items = itemsFactory.getItems();
        this.number = '';

        $scope.$watch(() => this.itemsFactory.getItems(), (updatedData, oldData) => {
            // updating data from service
            this.items = updatedData;

            if (this.currentIndex !== undefined) {
                this.currentItem = updatedData[this.currentIndex];
                this.currentComments = this.currentItem.comments;
            }
        }, true);

        $scope.$on('itemIsSelected', (event, data) => {
            this.currentIndex = data.number;
            this.number = data.number + 1;
            this.currentComments = this.getCurrentComments();
        });

        $scope.$on('itemIsDeleted', (event, id) => {
            if (!this.currentItem || id !== this.currentItem.id) return;

            // deleting comments
            this.clearData();
        });
    }

    clearData() {
        this.currentComments = undefined;
        this.currentItem = undefined;
    }

    getCurrentComments() {
        this.currentItem = this.itemsFactory.getItems()[this.currentIndex];
        return this.currentItem.comments;
    }

    addComment() {
        this.itemsFactory.addComment(this.currentItem, this.commentText);
        this.clearTextArea();
    }

    clearTextArea() {
        this.commentText = "";
    }

    isAnyItemSelected() {
        return this.currentItem !== undefined;
    }
}