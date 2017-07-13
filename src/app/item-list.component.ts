import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import 'rxjs/add/operator/switchMap';

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
  //filterBoxText: string;
  filterText: string;

  constructor(
    private route: ActivatedRoute,
    private itemService: ItemService,
    private itemSearchService: ItemSearchService
  ) { }


  ngOnInit(): void {
    
    this.route.queryParams
      .switchMap((params: Params) => {
        if (params['text']) {
          this.filterText = params['text'];
        } else {
          this.filterText = null;
        }
        return this.getItems();
      })
      .subscribe(items => this.items = items);

  }


  // Fetches item list (filtered if necessary)
  getItems(): Promise<Item[]> {
    if (!this.filterText) {
      return this.itemService.getItems();
    } else {
      return this.itemSearchService.searchAllFields(this.filterText)
        .toPromise();
    }
  }


/*  filterItems(): void {
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
  }  */


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
