import { Component } from '@angular/core';

import { Story } from './story';
import { StoryService } from './story.service';


@Component({
  selector: 'story-list',
  templateUrl: 'templates/story-list.component.html',
  styleUrls: [ 'styles/story-list.component.css' ]
})
export class StoryListComponent  { 
  stories: Story[];
  selectedStory: Story;

  constructor(private storyService: StoryService) { }

  ngOnInit(): void {
    this.getStories();
  }


  getStories(): void {
    this.storyService.getStories()
      .then(stories => this.stories = stories);
  }


  onSelect(story: Story): void {
    if (this.selectedStory === story) {
      this.selectedStory = null;
    } else {
      this.selectedStory = story;
    }
  }

};
