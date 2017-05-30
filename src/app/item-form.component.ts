import { Component, Input, OnInit } from '@angular/core';

import { Item } from './item';
import { ItemService } from './item.service';


@Component({
  selector: 'item-form',
  templateUrl: 'templates/item-form.component.html'
})
export class ItemFormComponent {
  @Input() id: number;

  item: Item;


  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.getItem();
  }

  getItem(): void {
    this.itemService.getItem(this.id)
      .then(response => this.item = response);
  }
  
  
  tags = ['nonfiction', 'fiction', 'magic', 'macguffin'];


  

  submitted = false;


  onSubmit(): void {
    this.submitted = true;
  }

  clearForm(): void {
    this.itemService.blankItem()
      .then(item => this.item = item);
    this.submitted = false;
  }

  // TODO: Remove this when cleaning
  get diagnostic() { return JSON.stringify(this.item); }
  
}