import { Component, Input, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/empty';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { Item } from './item';
import { ItemSearchService } from './item-search.service';


@Component({
  selector: 'item-autofill',
  templateUrl: 'templates/item-autofill.component.html',
  styleUrls: [ 'styles/item-autofill.component.css' ]
})
export class ItemAutofillComponent implements OnInit {

  @Input() searchAction: (i: Item) => any;
  items: Observable<Item[]>;
  searchBoxText: string;
  private searchTerms = new Subject<string>();

  constructor(private itemSearchService: ItemSearchService) { }


  search(term: string): void {
    this.searchTerms.next(term);
  }


  listen(): void {
    this.items = this.searchTerms
      .debounceTime(300)       // waits 300ms after each keystroke
      .distinctUntilChanged()  // ignores consecutive identical terms
      .switchMap(term => term  // switches to new observables
        ? this.itemSearchService.searchTextFields({"name": term}) // returns http search Obsvble
        : Observable.of<Item[]>([])) // or just an Obsvble of empty items if no term
      .catch(error => {
        console.log(error);
        return Observable.of<Item[]>([]);
      });
  }

  ngOnInit(): void {
    this.listen();
  }

  onClick(item: Item): void {
    this.searchBoxText = null;
    this.searchAction(item);
    this.listen();
  }

}