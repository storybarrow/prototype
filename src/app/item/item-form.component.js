"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var item_service_1 = require("./item.service");
var ItemFormComponent = (function () {
    function ItemFormComponent(itemService) {
        this.itemService = itemService;
        this.tags = ['nonfiction', 'fiction', 'magic', 'macguffin'];
        this.submitted = false;
    }
    ItemFormComponent.prototype.ngOnInit = function () {
        this.getItem();
    };
    ItemFormComponent.prototype.getItem = function () {
        var _this = this;
        this.itemService.getItem(this.id)
            .then(function (response) { return _this.item = response; });
    };
    ItemFormComponent.prototype.onSubmit = function () {
        this.submitted = true;
    };
    ItemFormComponent.prototype.clearForm = function () {
        var _this = this;
        this.itemService.blankItem()
            .then(function (item) { return _this.item = item; });
        this.submitted = false;
    };
    Object.defineProperty(ItemFormComponent.prototype, "diagnostic", {
        // TODO: Remove this when cleaning
        get: function () { return JSON.stringify(this.item); },
        enumerable: true,
        configurable: true
    });
    return ItemFormComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], ItemFormComponent.prototype, "id", void 0);
ItemFormComponent = __decorate([
    core_1.Component({
        selector: 'item-form',
        templateUrl: 'templates/item-form.component.html'
    }),
    __metadata("design:paramtypes", [item_service_1.ItemService])
], ItemFormComponent);
exports.ItemFormComponent = ItemFormComponent;
//# sourceMappingURL=item-form.component.js.map