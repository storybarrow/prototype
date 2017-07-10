import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';

import { Story } from './story';
import { StoryService } from './story.service';

import { Item } from './item';
import { ItemService } from './item.service';

import { TERMS } from './terms';


@Component({
  selector: 'story-detail',
  templateUrl: 'templates/story-detail.component.html',
  styleUrls: [ 'styles/story-detail.component.css' ]
})
export class StoryDetailComponent {

  terms = TERMS;
  @Input() story: Story;
  @Input() deleteFunc: (s: Story) => void;
  items: Item[];

  constructor(
    private storyService: StoryService,
    private itemService: ItemService,
    private router: Router    
  ) { }


  ngOnInit(): void {
    this.items = [];
  }

  ngOnChanges(): void {
    if (this.story) {
      this.itemService.getItems(this.story.item_ids)
        .then(items => this.items = items);
    }
  }


  goToStory(): void {
    this.router.navigate(['/story', this.story.id])
  }

  goToItem(item: Item): void {
    this.router.navigate(['/item', item.id]);
  }

  edit(): void {
    this.router.navigate(['/editstory', this.story.id])
  }

  delete(): void {
    this.storyService
      .delete(this.story)
      .then(() => {
        this.deleteFunc(this.story)
        this.story = null;
      });
  }

}