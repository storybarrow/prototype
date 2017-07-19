import { Component, AfterViewInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';


import { ItemListComponent } from './item-list.component';
import { StoryListComponent } from './story-list.component';

import { TERMS } from './terms';



@Component({
  selector: 'homepage-header',
  templateUrl: 'templates/homepage-header.component.html',
  styleUrls: [ 'styles/homepage-header.component.css' ]
})
export class HomepageHeaderComponent { 
  
  terms = TERMS;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }



  onSelect(selectedList: string): void {
    this.router.navigate([selectedList], { relativeTo: this.route });
  }

}