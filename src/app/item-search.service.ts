import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Item } from './item';


@Injectable()
export class ItemSearchService {

  private itemsUrl = 'api/items'; // URL to web api

  constructor(private http: Http) { }


  // Takes an object where the keys correspond to Item keys and
  // the values are the desired text strings.
  // Returns a list of items which contain the desired terms in EACH
  // of the specified fields.
  searchTextFields(terms: Object): Observable<Item[]> {
    for (let key of Object.keys(terms)) {
      terms[key] = terms[key].toLowerCase().trim();
    }
    return this.http.get(this.itemsUrl)
      .map(response => (response.json().data as Item[])
        .filter(item => Object.keys(terms)
          .every(key => key in item &&
            item[key].toLowerCase().includes(terms[key]))));
  }


  searchTags(term: string): Observable<Item[]> {
    term = term.toLowerCase().trim();
    return this.http.get(this.itemsUrl)
      .map(response => (response.json().data as Item[])
        .filter(item => item["tags"]
          .some(tag => typeof tag === "string" &&
            tag.toLowerCase().includes(term))));
  }


  // Takes a single search string and returns all of the items
  // that have a text string containing the search term.
  searchAllFields(term: string): Observable<Item[]> {
    term = term.toLowerCase().trim();
    return this.http.get(this.itemsUrl)
      .map(response => (response.json().data as Item[])
        .filter(item => Object.keys(item)
          .some(key => typeof item[key] === "string" &&
            item[key].toLowerCase().includes(term))));
  }


}