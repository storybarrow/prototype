import { Component } from '@angular/core';

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
  selectedList: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }


  onSelect(selectedList: string): void { 
    this.selectedList = selectedList;
    this.router.navigate([this.selectedList], { relativeTo: this.route });
  }

  buttonStyle(buttonName: string): string {
    if (buttonName === this.selectedList) {
      return "tab selected";
    } else {
      return "tab";
    }
  }

}