// Implement "POJO" here to keep data of a single Product item.
var Product = (function () {
    function Product() {
    }
    Object.defineProperty(Product.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (val) {
            this._id = val;
        },
        enumerable: true,
        configurable: true
    });

    Object.defineProperty(Product.prototype, "title", {
        get: function () {
            return this._title;
        },
        set: function (val) {
            this._title = val;
        },
        enumerable: true,
        configurable: true
    });

    Object.defineProperty(Product.prototype, "description", {
        get: function () {
            return this._description;
        },
        set: function (val) {
            this._description = val;
        },
        enumerable: true,
        configurable: true
    });

    Object.defineProperty(Product.prototype, "timeleft", {
        get: function () {
            return this._timeleft;
        },
        set: function (val) {
            this._timeleft = val;
        },
        enumerable: true,
        configurable: true
    });

    Object.defineProperty(Product.prototype, "watchers", {
        get: function () {
            return this._watchers;
        },
        set: function (val) {
            this._watchers = val;
        },
        enumerable: true,
        configurable: true
    });

    Object.defineProperty(Product.prototype, "price", {
        get: function () {
            return this._price;
        },
        set: function (val) {
            this._price = val;
        },
        enumerable: true,
        configurable: true
    });
    return Product;
})();
//# sourceMappingURL=ProductModel.js.map
