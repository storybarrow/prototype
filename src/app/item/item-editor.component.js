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
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
require("rxjs/add/operator/switchMap");
var item_service_1 = require("./item.service");
var ItemEditorComponent = (function () {
    function ItemEditorComponent(itemService, router, route, location) {
        this.itemService = itemService;
        this.router = router;
        this.route = route;
        this.location = location;
    }
    // TODO: Figure out how to reformat this section into an
    //    observable-based initializer.
    ItemEditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.params['id'];
        if (id === "new") {
            this.mode = "New Item";
            this.itemService.blankItem()
                .then(function (item) { return _this.item = item; });
        }
        else {
            this.mode = "Edit Item";
            this.itemService.getItem(+id)
                .then(function (item) { return _this.item = item; });
        }
    };
    ItemEditorComponent.prototype.save = function () {
        var _this = this;
        if (this.mode === "Edit Item") {
            this.itemService.update(this.item)
                .then(function () { return _this.goToItem(); });
        }
        else {
            this.itemService.create(this.item)
                .then(function () { return _this.goToItem(); });
        }
    };
    ItemEditorComponent.prototype.goBack = function () {
        this.location.back();
    };
    ItemEditorComponent.prototype.goToItem = function () {
        this.router.navigate(['/item', this.item.id]);
    };
    Object.defineProperty(ItemEditorComponent.prototype, "diagnostic", {
        // TODO: Remove this when cleaning
        get: function () { return JSON.stringify(this.item); },
        enumerable: true,
        configurable: true
    });
    return ItemEditorComponent;
}());
ItemEditorComponent = __decorate([
    core_1.Component({
        selector: 'item-editor',
        templateUrl: 'templates/item-editor.component.html'
    }),
    __metadata("design:paramtypes", [item_service_1.ItemService,
        router_1.Router,
        router_1.ActivatedRoute,
        common_1.Location])
], ItemEditorComponent);
exports.ItemEditorComponent = ItemEditorComponent;
//# sourceMappingURL=item-editor.component.js.map