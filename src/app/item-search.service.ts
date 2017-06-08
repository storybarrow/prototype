import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Item } from './item';


@Injectable()
export class ItemSearchService {

  private itemsUrl = 'api/items'; // URL to web api

  constructor(private http: Http) { }


  search(term: string): Observable<Item[]> {
    return this.http
      .get(`${this.itemsUrl}/?name=${term}`)
      .map(response => response.json().data as Item[]);
  }

}