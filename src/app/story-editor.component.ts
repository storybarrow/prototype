import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { Story } from './story';
import { StoryService } from './story.service';


@Component({
  selector: 'story-editor',
  templateUrl: 'templates/story-editor.component.html',
  styleUrls: [ 'styles/story-editor.component.css' ]
})
export class StoryEditorComponent implements OnInit {

  oldStory: Story;
  newStory: Story;
  mode: string;

  constructor(
    private storyService: StoryService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) { }


  // TODO: Figure out how to reformat this section into an
  //    observable-based initializer.
  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];

    if (id === "new") {
      this.mode = "New Story";
      this.storyService.blankStory()
        .then(story => {
          this.oldStory = story;
          this.newStory = Object.assign({}, story);
        });
    }
    else {
      this.mode = "Edit Story";
      this.storyService.getStory(+id)
        .then((story: Story) => {
          this.oldStory = story;
          this.newStory = Object.assign({}, story);
        });
    }
  }


  resetForm(): void {
    console.log("resetting...");
    this.newStory = Object.assign({}, this.oldStory);
  }

  save(): void {
    if (this.mode === "Edit Story") {
      this.storyService.update(this.newStory)
        .then(() => this.goToStory());
    }
    else {
      this.storyService.create(this.newStory)
        .then(() => this.goToStory());
    }
  }



  goBack(): void {
    this.location.back();
  }

  goToStory(): void {
    this.router.navigate(['/story', this.newStory.id]);
  }


  // TODO: Remove this when cleaning
  get olddiagnostic() { return JSON.stringify(this.oldStory); }
  get newdiagnostic() { return JSON.stringify(this.newStory); }
}