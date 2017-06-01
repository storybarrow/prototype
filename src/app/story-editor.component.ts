import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { Story } from './story';
import { StoryService } from './story.service';


@Component({
  selector: 'story-editor',
  templateUrl: 'templates/story-editor.component.html'
})
export class StoryEditorComponent implements OnInit {

  story: Story;
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
        .then(story => this.story = story);
    }
    else {
      this.mode = "Edit Story";
      this.storyService.getStory(+id)
        .then((story: Story) => this.story = story);
    }

  }


  save(): void {
    if (this.mode === "Edit Story") {
      this.storyService.update(this.story)
        .then(() => this.goToStory());
    }
    else {
      this.storyService.create(this.story)
        .then(() => this.goToStory());
    }
  }



  goBack(): void {
    this.location.back();
  }

  goToStory(): void {
    this.router.navigate(['/story', this.story.id]);
  }


  // TODO: Remove this when cleaning
  get diagnostic() { return JSON.stringify(this.story); }
}