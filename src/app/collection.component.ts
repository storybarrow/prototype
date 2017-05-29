import { Component } from '@angular/core';

import { ItemListComponent } from './item/item-list.component';
import { StoryListComponent } from './story/story-list.component';

@Component({
  selector: 'collection',
  template: `
    <item-list></item-list>
    <story-list></story-list>
  `
})
export class CollectionComponent { }