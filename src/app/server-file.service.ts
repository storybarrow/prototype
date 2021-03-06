import { Injectable } from '@angular/core';

import { Item } from './item';
import { ItemService } from './item.service';

import { Story } from './story';
import { StoryService } from './story.service';


@Injectable()
export class ServerFileService {

  textfields: string[] = ['name', 'caption', 'description', 'tags'];

  head: string = `import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService { 
  createDb() {
    let items = [ `;

  mid: string = `
                ]; 
    let stories = [ `;

  foot:string = `
                  ]; 
    return { items, stories }; 
  } 
}`;

  constructor(
    private itemService: ItemService,
    private storyService: StoryService
  ) { }


  stringifyList(objectList: any[]) {
    return objectList.map(object => JSON.stringify(object)).join(",\n                  ");
  }


  getEncodedText(): Promise<string> {
    let itemsString: string;
    let storiesString: string;

    return Promise.all([
      this.itemService.getItems()
        .then(items => itemsString = this.stringifyList(items)) ,
      this.storyService.getStories()
        .then(stories => storiesString = this.stringifyList(stories))])
      .then(() => encodeURIComponent(
        this.head + itemsString + this.mid + storiesString + this.foot));
  }
}