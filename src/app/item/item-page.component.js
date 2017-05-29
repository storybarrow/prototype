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
var ItemPageComponent = (function () {
    function ItemPageComponent(itemService, router, route, location) {
        this.itemService = itemService;
        this.router = router;
        this.route = route;
        this.location = location;
    }
    ItemPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.itemService.getItem(+this.route.snapshot.params['id'])
            .then(function (item) { return _this.item = item; });
    };
    ItemPageComponent.prototype.goBack = function () {
        this.location.back();
    };
    ItemPageComponent.prototype.edit = function () {
        this.router.navigate(['/edititem', this.item.id]);
    };
    return ItemPageComponent;
}());
ItemPageComponent = __decorate([
    core_1.Component({
        selector: 'item-page',
        templateUrl: 'templates/item-page.component.html'
    }),
    __metadata("design:paramtypes", [item_service_1.ItemService,
        router_1.Router,
        router_1.ActivatedRoute,
        common_1.Location])
], ItemPageComponent);
exports.ItemPageComponent = ItemPageComponent;
//# sourceMappingURL=item-page.component.js.map