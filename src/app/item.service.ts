import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Item } from './item';


@Injectable()
export class ItemService {

  private itemsUrl = 'api/items'; // URL to web api

  constructor(private http: Http) { }

  
  getItems(): Promise<Item[]> {
    return this.http.get(this.itemsUrl)
      .toPromise()
      .then(response => response.json().data as Item[])
      .catch(this.handleError);
  }

  
  getItem(id: number): Promise<Item> {
    const url = `${this.itemsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Item)
      .catch(this.handleError);
  }



  newId(): Promise<number> {
    return this.getItems()
      .then(items => items.length);
  }

  blankItem(): Promise<Item> {
    let newId;
    this.newId()
      .then(id => newId = id);
    return Promise.resolve(new Item(newId, "", "", "", ["", "", ""]));
  }


  private headers = new Headers({'Content-Type': 'application/json'});

  create(item: Item): Promise<Item> {
    return this.http
      .post(this.itemsUrl, 
        JSON.stringify(item), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Item)
      .catch(this.handleError);
  }

  update(item: Item): Promise<Item> {
    const url = `${this.itemsUrl}/${item.id}`;
    return this.http
      .put(url, JSON.stringify(item), {headers: this.headers})
      .toPromise()
      .then(() => item)
      .catch(this.handleError);
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); //demo
    return Promise.reject(error.message || error);
  }

}