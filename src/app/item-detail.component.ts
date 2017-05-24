import { Component, Input } from '@angular/core';

import { Item } from './item';


@Component({
  selector: 'item-detail',
  templateUrl: 'templates/item-detail.component.html'
})
export class ItemDetailComponent {

  @Input() item: Item;

}