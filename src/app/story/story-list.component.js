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
var story_service_1 = require("./story.service");
var StoryListComponent = (function () {
    function StoryListComponent(storyService) {
        this.storyService = storyService;
    }
    StoryListComponent.prototype.ngOnInit = function () {
        this.getStories();
    };
    StoryListComponent.prototype.getStories = function () {
        var _this = this;
        this.storyService.getStories()
            .then(function (stories) { return _this.stories = stories; });
    };
    StoryListComponent.prototype.onSelect = function (story) {
        if (this.selectedStory === story) {
            this.selectedStory = null;
        }
        else {
            this.selectedStory = story;
        }
    };
    return StoryListComponent;
}());
StoryListComponent = __decorate([
    core_1.Component({
        selector: 'story-list',
        templateUrl: 'templates/story-list.component.html',
        styleUrls: ['styles/story-list.component.css']
    }),
    __metadata("design:paramtypes", [story_service_1.StoryService])
], StoryListComponent);
exports.StoryListComponent = StoryListComponent;
;
//# sourceMappingURL=story-list.component.js.map