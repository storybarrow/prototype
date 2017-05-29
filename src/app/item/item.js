"use strict";
var Item = (function () {
    function Item(id, name, caption, description, tags, imageUrl) {
        if (imageUrl === void 0) { imageUrl = ""; }
        this.id = id;
        this.name = name;
        this.caption = caption;
        this.description = description;
        this.tags = tags;
        this.imageUrl = imageUrl;
    }
    return Item;
}());
exports.Item = Item;
//# sourceMappingURL=item.js.map