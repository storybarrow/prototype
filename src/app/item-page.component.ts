import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { Item } from './item';
import { ItemService } from './item.service';



@Component({
  selector: 'item-page',
  templateUrl: 'templates/item-page.component.html',
  styleUrls: [ 'styles/item-page.component.css' ]
})
export class ItemPageComponent implements OnInit {

  item: Item;

  constructor(
    private itemService: ItemService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) { }


  ngOnInit(): void {
    this.itemService.getItem(+this.route.snapshot.params['id'])
      .then((item: Item) => this.item = item);
  }

  goHome(): void { 
    this.router.navigate(['']);
  }

  goBack(): void {
    this.location.back();
  }

  edit(): void {
    this.router.navigate(['/edititem', this.item.id]);
  }

  delete(): void {
    this.itemService
      .delete(this.item)
      .then(() => this.goHome());
  }

}