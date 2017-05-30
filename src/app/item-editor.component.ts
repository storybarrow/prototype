import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { Item } from './item';
import { ItemService } from './item.service';


@Component({
  selector: 'item-editor',
  templateUrl: 'templates/item-editor.component.html'
})
export class ItemEditorComponent implements OnInit {

  item: Item;
  mode: string;

  constructor(
    private itemService: ItemService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) { }


  // TODO: Figure out how to reformat this section into an
  //    observable-based initializer.
  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];

    if (id === "new") {
      this.mode = "New Item";
      this.itemService.blankItem()
        .then(item => this.item = item);
    }
    else {
      this.mode = "Edit Item";
      this.itemService.getItem(+id)
        .then((item: Item) => this.item = item);
    }

  }


  save(): void {
    if (this.mode === "Edit Item") {
      this.itemService.update(this.item)
        .then(() => this.goToItem());
    }
    else {
      this.itemService.create(this.item)
        .then(() => this.goToItem());
    }
  }



  goBack(): void {
    this.location.back();
  }

  goToItem(): void {
    this.router.navigate(['/item', this.item.id]);
  }


  // TODO: Remove this when cleaning
  get diagnostic() { return JSON.stringify(this.item); }
}