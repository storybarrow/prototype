import { Component } from '@angular/core';

import { ItemListComponent } from './item-list.component';
import { StoryListComponent } from './story-list.component';

@Component({
  selector: 'collection',
  templateUrl: 'templates/collection.component.html',
  styleUrls: [ 'styles/collection.component.css' ]
})
export class CollectionComponent { 
  selectedList: string;

  show(selectedList: string): void { 
    this.selectedList = selectedList;
  }

  buttonStyle(buttonName: string): string {
    if (buttonName === this.selectedList) {
      return "btn selected";
    } else {
      return "btn";
    }
  }
}