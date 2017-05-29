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
var story_1 = require("./story");
var StoryDetailComponent = (function () {
    function StoryDetailComponent(router) {
        this.router = router;
    }
    StoryDetailComponent.prototype.edit = function () {
        this.router.navigate(['/editstory', this.story.id]);
    };
    return StoryDetailComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", story_1.Story)
], StoryDetailComponent.prototype, "story", void 0);
StoryDetailComponent = __decorate([
    core_1.Component({
        selector: 'story-detail',
        templateUrl: 'templates/story-detail.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router])
], StoryDetailComponent);
exports.StoryDetailComponent = StoryDetailComponent;
//# sourceMappingURL=story-detail.component.js.map