import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Item } from './item';
import { ItemService } from './item.service';

import { TERMS } from './terms';


@Component({
  selector: 'item-detail',
  templateUrl: 'templates/item-detail.component.html',
  styleUrls: [ 'styles/item-detail.component.css' ]
})
export class ItemDetailComponent {

  terms = TERMS;
  @Input() item: Item;
  @Input() deleteFunc: (i: Item) => void;
  sample: string = "sampletext";

  constructor(
    private itemService: ItemService,
    private router: Router
  ) { }

  goToItem(): void {
    this.router.navigate(['/item', this.item.id])
  }

  edit(): void {
    this.router.navigate(['/edititem', this.item.id])
  }

  delete(): void {
    this.itemService
      .delete(this.item)
      .then(() => {
        this.deleteFunc(this.item)
        this.item = null;
      });
  }

}