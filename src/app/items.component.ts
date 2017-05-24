import { Component } from '@angular/core';

import { Item } from './item';
import { ItemService } from './item.service';


@Component({
  selector: 'item-list',
  templateUrl: 'templates/app.component.html',
  styleUrls: [ 'styles/app.component.css' ]
})
export class ItemsComponent  { 
  title = 'StoryBarrow';
  items: Item[];
  selectedItem: Item;

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.getItems();
  }


  getItems() {
    this.itemService.getItems()
      .then(items => this.items = items);
  }


  onSelect(item: Item) {
    this.selectedItem = item;
  }

};
