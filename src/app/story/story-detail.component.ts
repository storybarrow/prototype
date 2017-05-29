import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Story } from './story';


@Component({
  selector: 'story-detail',
  templateUrl: 'templates/story-detail.component.html'
})
export class StoryDetailComponent {

  @Input() story: Story;

  constructor(private router: Router) { }

  edit(): void {
    this.router.navigate(['/editstory', this.story.id])
  }

}