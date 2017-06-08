import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { Item } from './item';
import { ItemService } from './item.service';


@Component({
  selector: 'item-editor',
  templateUrl: 'templates/item-editor.component.html',
  styleUrls: [ 'styles/item-editor.component.css' ]
})
export class ItemEditorComponent implements OnInit {

  oldItem: Item;
  newItem: Item;
  mode: string;
  newTag: string;
  newImageUrl: string;
  selectedImageUrl: string;


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
        .then((item: Item) => {
          this.oldItem = item;
          this.newItem = Object.assign({}, item);
        });
    }
    else {
      this.mode = "Edit Item";
      this.itemService.getItem(+id)
        .then((item: Item) => {
          this.oldItem = item;
          this.newItem = Object.assign({}, item);
        });
    }
  }


  resetForm(): void {
    console.log("resetting...");
    this.newItem = Object.assign({}, this.oldItem);
  }

  save(): void {
    if (this.mode === "Edit Item") {
      this.itemService.update(this.newItem)
        .then(() => this.goToItem());
    }
    else {
      this.itemService.create(this.newItem)
        .then(() => this.goToItem());
    }
  }


  deleteImage(imageUrl: string): void {
    this.newItem.imageUrls = this.newItem.imageUrls.filter(url => url !== imageUrl);
  }

  addImage(): void {
    if (typeof this.newImageUrl === "string" && this.newImageUrl.length > 0) {
      this.newItem.imageUrls = this.newItem.imageUrls.concat([this.newImageUrl]);
      this.newImageUrl = null;
    }
  }


  deleteTag(tag: string): void {
    this.newItem.tags = this.newItem.tags.filter(t => t !== tag);
  }

  addTag(): void {
    if (typeof this.newTag === "string" && this.newTag.length > 0) {
      this.newItem.tags = this.newItem.tags.concat([this.newTag]);
      this.newTag = null;
    }
  }


  goBack(): void {
    this.location.back();
  }

  goToItem(): void {
    this.router.navigate(['/item', this.newItem.id]);
  }


}