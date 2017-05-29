"use strict";
var Story = (function () {
    function Story(id, name, caption, description, item_ids) {
        if (item_ids === void 0) { item_ids = []; }
        this.id = id;
        this.name = name;
        this.caption = caption;
        this.description = description;
        this.item_ids = item_ids;
    }
    return Story;
}());
exports.Story = Story;
//# sourceMappingURL=story.js.map