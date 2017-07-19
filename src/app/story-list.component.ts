import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';

import { Story } from './story';
import { StoryService } from './story.service';
import { StorySearchService } from './story-search.service';



@Component({
  selector: 'story-list',
  templateUrl: 'templates/story-list.component.html',
  styleUrls: [ 'styles/story-list.component.css' ]
})
export class StoryListComponent implements OnInit {

  stories: Story[];
  selectedStory: Story;
  filterAllText: string;
  filterTagText: string;

  constructor(
    private route: ActivatedRoute,
    private storyService: StoryService,
    private storySearchService: StorySearchService
  ) { }


  ngOnInit(): void {
    
    this.route.queryParams
      .switchMap((params: Params) => {
        if (params['text']) {
          this.filterAllText = params['text'];
        } else if (params['tag']) {
          this.filterTagText = params['tag'];
        } else {
          this.filterAllText = null;
          this.filterTagText = null;
        }
        return this.getStories();
      })
      .subscribe(stories => this.stories = stories);

  }


  // Fetches story list (filtered if this.filterText has value)
  getStories(): Promise<Story[]> {
    if (this.filterAllText) {
      return this.storySearchService.searchAllFields(this.filterAllText)
        .toPromise();
    } else if (this.filterTagText) {
      return this.storySearchService.searchTags(this.filterTagText)
        .toPromise();
    } else {
      return this.storyService.getStories();
    }
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
