import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { Story } from './story';
import { StoryService } from './story.service';

import { Item } from './item';
import { ItemService } from './item.service';



@Component({
  selector: 'story-page',
  templateUrl: 'templates/story-page.component.html',
  styleUrls: [ 'styles/story-page.component.css' ]
})
export class StoryPageComponent implements OnInit {

  story: Story;
  items: Item[];
  selectedItem: Item;

  constructor(
    private storyService: StoryService,
    private itemService: ItemService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) { }


  ngOnInit(): void {
    this.storyService.getStory(+this.route.snapshot.params['id'])
      .then((story: Story) => {
        this.story = story;
        this.itemService.getItems(this.story.item_ids)
        .then(items => this.items = items);
      });
  }

  onSelect(item: Item): void {
    if (this.selectedItem === item) {
      this.selectedItem = null;
    } else {
      this.selectedItem = item;
    }
  }

  goHome(): void { 
    this.router.navigate(['']);
  }

  goBack(): void {
    this.location.back();
  }

  edit(): void {
    this.router.navigate(['/editstory', this.story.id])
  }

  delete(): void {
    this.storyService
      .delete(this.story)
      .then(() => this.goHome());
  }

}