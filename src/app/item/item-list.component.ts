import { Component } from '@angular/core';

import { Item } from './item';
import { ItemService } from './item.service';


@Component({
  selector: 'item-list',
  templateUrl: 'templates/item-list.component.html',
  styleUrls: [ 'styles/item-list.component.css' ]
})
export class ItemListComponent  { 
  items: Item[];
  selectedItem: Item;

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.getItems();
  }


  getItems(): void {
    this.itemService.getItems()
      .then(items => this.items = items);
  }


  onSelect(item: Item): void {
    if (this.selectedItem === item) {
      this.selectedItem = null;
    } else {
      this.selectedItem = item;
    }
  }

};
