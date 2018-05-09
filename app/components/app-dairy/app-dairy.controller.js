class dairyCtrl {
    constructor(itemsFactory, $window) {
        this.itemsFactory = itemsFactory;
        this.$window = $window;
    }

    $onInit() {
        // check if app has already been initialized before
        if (this.isInitialized()) return;

        this.$window.localStorage.setItem('isInitialized', true);

        // setting default items with comments for localStorage
        this.initializeAppWithDefaultItems();

    }

    isInitialized() {
        return this.$window.localStorage.getItem('isInitialized') === "true";
    }

    initializeAppWithDefaultItems() {
        let defaultItem = new Item(`Some default item`, "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx");

        defaultItem.comments.push(new Comment(`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet consequuntur doloremque
            minima odio provident sed? Ad atque culpa eaque eum expedita illum laboriosam laborum laudantium libero,
            maxime minima mollitia, nemo numquam quae quaerat quasi quidem quod quos repellat sed suscipit, tempora
            ullam velit vero voluptates. A adipisci aliquam aspernatur deleniti dicta dignissimos, dolore eos et id
        illum ipsum itaque laudantium mollitia natus optio praesentium quaerat quisquam ratione recusandae rerum
        saepe sed sint velit veritatis vitae! Accusamus ad animi assumenda deleniti esse explicabo, facere illum
        ipsum itaque iure iusto maiores nemo nobis numquam officia quam qui reiciendis saepe sit veritatis vitae.`));

        this.itemsFactory.addItem(defaultItem);
    }
}