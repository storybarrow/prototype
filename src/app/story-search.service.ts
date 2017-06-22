import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Story } from './story';


@Injectable()
export class StorySearchService {

  private storiesUrl = 'api/stories'; // URL to web api

  constructor(private http: Http) { }


  searchName(term: string): Observable<Story[]> {
    return this.http
      .get(`${this.storiesUrl}/?name=${term}`)
      .map(response => response.json().data as Story[]);
  }

  // WARN: This method does not work with our server
  searchAll(term: string): Observable<Story[]> {
    return this.http
      .get(`${this.storiesUrl}/?text=${term}`)
      .map(response => response.json().data as Story[]);
  }


}