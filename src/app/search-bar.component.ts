import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { TERMS } from "./terms";


@Component({
  selector: 'search-bar',
  templateUrl: 'templates/search-bar.component.html',
  styleUrls: [ 'styles/search-bar.component.css' ]
})
export class SearchBarComponent {

  terms = TERMS;
  searchText: string;
  mode: string; // always: null, items, or stories

  constructor(private router: Router) { }


  onSelectMode(selectedMode: string) {
    this.mode = selectedMode;
  }


  onSearch() {
    let searchTerm = this.searchText.trim();
    let tagSearch = searchTerm.charAt(0) === "#";
    
    if (tagSearch) {
      searchTerm = searchTerm.slice(1).trim();
      this.router.navigateByUrl('/home/' + this.mode + '?tag=' + searchTerm);
    } else {
      this.router.navigateByUrl('/home/' + this.mode + '?text=' + searchTerm);
    }

    this.searchText = null;

  }


  buttonStyle(buttonName: string): string {
    if (buttonName === this.mode) {
      return "tab selected";
    } else {
      return "tab";
    }
  }


}