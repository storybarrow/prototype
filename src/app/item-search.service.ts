import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Item } from './item';


@Injectable()
export class ItemSearchService {

  private itemsUrl = 'api/items'; // URL to web api

  constructor(private http: Http) { }


  searchName(term: string): Observable<Item[]> {
    return this.http
      .get(`${this.itemsUrl}/?name=${term}`)
      .map(response => response.json().data as Item[]);
  }

  // WARN: This method does not work with our server
  searchAll(term: string): Observable<Item[]> {
    return this.http
      .get(`${this.itemsUrl}/?text=${term}`)
      .map(response => response.json().data as Item[]);
  }


}