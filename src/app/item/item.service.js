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
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var item_1 = require("./item");
var ItemService = (function () {
    function ItemService(http) {
        this.http = http;
        this.itemsUrl = 'api/items'; // URL to web api
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    ItemService.prototype.getItems = function () {
        return this.http.get(this.itemsUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    ItemService.prototype.getItem = function (id) {
        var url = this.itemsUrl + "/" + id;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    ItemService.prototype.newId = function () {
        return this.getItems()
            .then(function (items) { return items.length; });
    };
    ItemService.prototype.blankItem = function () {
        var newId;
        this.newId()
            .then(function (id) { return newId = id; });
        return Promise.resolve(new item_1.Item(newId, "", "", "", ["", "", ""]));
    };
    ItemService.prototype.create = function (item) {
        return this.http
            .post(this.itemsUrl, JSON.stringify(item), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    ItemService.prototype.update = function (item) {
        var url = this.itemsUrl + "/" + item.id;
        return this.http
            .put(url, JSON.stringify(item), { headers: this.headers })
            .toPromise()
            .then(function () { return item; })
            .catch(this.handleError);
    };
    ItemService.prototype.handleError = function (error) {
        console.error('An error occurred', error); //demo
        return Promise.reject(error.message || error);
    };
    return ItemService;
}());
ItemService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ItemService);
exports.ItemService = ItemService;
//# sourceMappingURL=item.service.js.map