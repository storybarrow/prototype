import { Component, OnInit } from '@angular/core';

import { Item } from './item';
import { ItemService } from './item.service';
import { ItemSearchService } from './item-search.service';

import 'rxjs/add/operator/toPromise';


@Component({
  selector: 'item-list',
  templateUrl: 'templates/item-list.component.html',
  styleUrls: [ 'styles/item-list.component.css' ]
})
export class ItemListComponent implements OnInit {

  items: Item[];
  selectedItem: Item;
  filterBoxText: string;
  currentFilter: string;

  constructor(
    private itemService: ItemService,
    private itemSearchService: ItemSearchService
  ) { }

  ngOnInit(): void {
    this.getItems();
  }


  getItems(): void {
    if (!this.currentFilter) {
      this.itemService.getItems()
        .then(items => this.items = items);
    } else {
      this.itemSearchService.searchAllFields(this.currentFilter)
        .toPromise()
        .then(items => this.items = items);
    }
  }


  filterItems(): void {
    this.currentFilter = this.filterBoxText.split('~~').join('');
    console.log("filter parameter: " + this.currentFilter);
    this.getItems();
    if (this.items.indexOf(this.selectedItem) == -1) {
      this.selectedItem = null;
    }
  }

  resetFilter(): void {
    this.currentFilter = null;
    this.filterBoxText = null;
    this.getItems();
  }


  onSelect(item: Item): void {
    if (this.selectedItem === item) {
      this.selectedItem = null;
    } else {
      this.selectedItem = item;
    }
  }

  clearItem: (item: Item) => void = 
    // Clears the item from the list, but not the database
    (item: Item) => {
      this.items = this.items.filter(i => i !== item);
      if (this.selectedItem === item) {
        this.selectedItem = null;
      }
    }

};
