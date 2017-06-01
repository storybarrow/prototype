import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';

import { Story } from './story';

import { Item } from './item';
import { ItemService } from './item.service';


@Component({
  selector: 'story-detail',
  templateUrl: 'templates/story-detail.component.html'
})
export class StoryDetailComponent {

  @Input() story: Story;
  items: Item[];

  constructor(
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

  edit(): void {
    this.router.navigate(['/editstory', this.story.id])
  }

}