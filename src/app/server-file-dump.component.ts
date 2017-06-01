import { Component, OnInit } from '@angular/core';

import { Item } from './item';
import { ItemService } from './item.service';

import { Story } from './story';
import { StoryService } from './story.service';


@Component({
  selector: 'server-file-dump',
  templateUrl: 'templates/server-file-dump.component.html'
})
export class ServerFileDumpComponent {
  items: Item[];
  itemsString: string;
  stories: Story[];
  storiesString: string;


  constructor(
    private itemService: ItemService,
    private storyService: StoryService
  ) { }

  
  ngOnInit(): void {
    this.itemService.getItems()
      .then((items: Item[]) => {
        this.items = items;
        this.itemsString = this.stringifyList(items);
      });
    this.storyService.getStories()
      .then((stories: Story[]) => {
        this.stories = stories;
        this.storiesString = this.stringifyList(stories);
      });
  }

  stringifyList(objectList: any[]) { 
    return objectList.map(object => JSON.stringify(object)).join();
  }
}