import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Item } from './item';


@Component({
  selector: 'item-detail',
  templateUrl: 'templates/item-detail.component.html'
})
export class ItemDetailComponent {

  @Input() item: Item;

  constructor(private router: Router) { }

  edit(): void {
    this.router.navigate(['/item', this.item.id])
  }

}