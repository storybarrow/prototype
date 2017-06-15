import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { Story } from './story';
import { StoryService } from './story.service';

import { Item } from './item';
import { ItemService } from './item.service';


@Component({
  selector: 'story-editor',
  templateUrl: 'templates/story-editor.component.html',
  styleUrls: [ 'styles/story-editor.component.css' ]
})
export class StoryEditorComponent implements OnInit {

  oldStory: Story;
  newStory: Story;
  oldItems: Item[];
  newItems: Item[];
  mode: string;
  newItemId: number;

  constructor(
    private storyService: StoryService,
    private itemService: ItemService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) { }


  ngOnInit(): void {

    this.route.params
      .switchMap((params: Params) => {
        this.newStory = null;
        this.newItems = null;
        if (params['id'] === "new") {
          this.mode = "New Story";
          return this.storyService.blankStory();
        } else {
          this.mode = "Edit Story";
          return this.storyService.getStory(+params['id']);
        }
      })
      .subscribe(story => {
        this.oldStory = story;
        this.newStory = Object.assign({}, story);
        this.itemService.getItems(this.newStory.item_ids)
          .then(items => {
            this.oldItems = items;
            this.newItems = JSON.parse(JSON.stringify(this.oldItems));
          });
      });
  }


  resetForm(): void {
    console.log("resetting...");
    this.newStory = Object.assign({}, this.oldStory);
    this.newItems = JSON.parse(JSON.stringify(this.oldItems));
    this.newItemId = null;
  }

  save(): void {
    if (this.mode === "Edit Story") {
      this.storyService.update(this.newStory)
        .then(() => this.goToStory());
    }
    else {
      this.storyService.create(this.newStory)
        .then(() => this.goToStory());
    }
  }


  addItem(): void {
    this.newStory.item_ids = this.newStory.item_ids.concat([this.newItemId]);
    this.itemService.getItem(this.newItemId)
      .then(item => this.newItems.push(item));
  }

  deleteItem(item_id: number): void {
    this.newStory.item_ids = this.newStory.item_ids.filter(id => id !== item_id);
    this.newItems = this.newItems.filter(item => item.id !== item_id);
  }


  goBack(): void {
    this.location.back();
  }

  goToStory(): void {
    this.router.navigate(['/story', this.newStory.id]);
  }


  // A callback function that defines the 
   // StoryEditor action on a search click
  addItemOnSearch: (item: Item) => void =
    (item: Item) => {
      this.newItems = this.newItems.concat([item]);
      this.newStory.item_ids = this.newStory.item_ids.concat([item.id]);
    }

}