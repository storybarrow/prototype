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

  clearStory: (story: Story) => void = 
    // Clears the story from the list, but not the database
    (story: Story) => {
      this.stories = this.stories.filter(s => s !== story);
      if (this.selectedStory === story) {
        this.selectedStory = null;
      }
    }

};
