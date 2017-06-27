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
  newTags: string;
  newImageUrl: string;
  selectedImageUrl: string;


  constructor(
    private itemService: ItemService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) { }


  ngOnInit(): void {

    this.route.params
      .switchMap((params: Params) => {
        this.newItem = null;
        if (params['id'] === "new") {
          this.mode = "New Item";
          return this.itemService.blankItem();
        } else {
          this.mode = "Edit Item";
          return this.itemService.getItem(+params['id']);
        }
      })
      .subscribe(item => {
        this.oldItem = item;
        this.newItem = Object.assign({}, item);
      });
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
    if (typeof this.newImageUrl === "string" && this.newImageUrl.length > 0
          && this.newItem.imageUrls.indexOf(this.newImageUrl) == -1) {
      this.newItem.imageUrls = this.newItem.imageUrls.concat([this.newImageUrl]);
      this.newImageUrl = null;
    }
  }


  deleteTag(tag: string): void {
    this.newItem.tags = this.newItem.tags.filter(t => t !== tag);
  }

  addTags(): void {
    if (typeof this.newTags === "string" && this.newTags.length > 0) {
      for (let newTag of this.newTags.split(',').map(str => str.trim())) {
        if (newTag.length > 0 && this.newItem.tags.indexOf(newTag) == -1) {
          this.newItem.tags = this.newItem.tags.concat([newTag]);
        }
      }
    }
    this.newTags = null;
  }


  goBack(): void {
    this.location.back();
  }

  goToItem(): void {
    this.router.navigate(['/item', this.newItem.id]);
  }


}