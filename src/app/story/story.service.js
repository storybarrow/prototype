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
var story_1 = require("./story");
var StoryService = (function () {
    function StoryService(http) {
        this.http = http;
        this.storiesUrl = 'api/stories'; // URL to web api
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    StoryService.prototype.getStories = function () {
        return this.http.get(this.storiesUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    StoryService.prototype.getStory = function (id) {
        var url = this.storiesUrl + "/" + id;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    StoryService.prototype.newId = function () {
        return this.getStories()
            .then(function (stories) { return stories.length; });
    };
    StoryService.prototype.blankStory = function () {
        var newId;
        this.newId()
            .then(function (id) { return newId = id; });
        return Promise.resolve(new story_1.Story(newId, "", "", ""));
    };
    StoryService.prototype.create = function (story) {
        return this.http
            .post(this.storiesUrl, JSON.stringify(story), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    StoryService.prototype.update = function (story) {
        var url = this.storiesUrl + "/" + story.id;
        return this.http
            .put(url, JSON.stringify(story), { headers: this.headers })
            .toPromise()
            .then(function () { return story; })
            .catch(this.handleError);
    };
    StoryService.prototype.handleError = function (error) {
        console.error('An error occurred', error); //demo
        return Promise.reject(error.message || error);
    };
    return StoryService;
}());
StoryService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], StoryService);
exports.StoryService = StoryService;
//# sourceMappingURL=story.service.js.map