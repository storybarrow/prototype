import { Component, OnInit } from '@angular/core';

import { Story } from './story';
import { StoryService } from './story.service';
import { StorySearchService } from './story-search.service';

import 'rxjs/add/operator/toPromise';


@Component({
  selector: 'story-list',
  templateUrl: 'templates/story-list.component.html',
  styleUrls: [ 'styles/story-list.component.css' ]
})
export class StoryListComponent implements OnInit {

  stories: Story[];
  selectedStory: Story;
  filterBoxText: string;
  currentFilter: string;

  constructor(
    private storyService: StoryService,
    private storySearchService: StorySearchService
  ) { }

  ngOnInit(): void {
    this.getStories();
  }


  getStories(): void {
    if (!this.currentFilter) {
      this.storyService.getStories()
        .then(stories => this.stories = stories);
    } else {
      this.storySearchService.searchAllFields(this.currentFilter)
        .toPromise()
        .then(stories => this.stories = stories);
    }
  }


  filterStories(): void {
    this.currentFilter = this.filterBoxText.split('~~').join('');
    console.log("filter parameter: " + this.currentFilter);
    this.getStories();
    if (this.stories.indexOf(this.selectedStory) == -1) {
      this.selectedStory = null;
    }
  }

  resetFilter(): void {
    this.currentFilter = null;
    this.filterBoxText = null;
    this.getStories();
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
