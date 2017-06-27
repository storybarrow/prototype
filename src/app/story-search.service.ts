import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Story } from './story';


@Injectable()
export class StorySearchService {

  private storiesUrl = 'api/stories'; // URL to web api

  constructor(private http: Http) { }

/* // Now deprecated search-by-regex-in-name feature
  // Use searchFields({"name": term}) instead.
  searchName(term: string): Observable<Story[]> {
    return this.http
      .get(`${this.storiesUrl}/?name=${term}`)
      .map(response => response.json().data as Story[]);
  }
*/

/*  // WARN: This method does not work with our server
  searchAll(term: string): Observable<Story[]> {
    return this.http
      .get(`${this.storiesUrl}/?text=${term}`)
      .map(response => response.json().data as Story[]);
  }
*/

  // Takes an object where the keys correspond to Item keys and
  // the values are the desired text strings.
  // Returns a list of stories which contain the desired terms in EACH
  // of the specified fields.
  searchFields(terms: object): Observable<Story[]> {
    for (let key of Object.keys(terms)) {
      terms[key] = terms[key].toLowerCase();
    }
    return this.http.get(this.storiesUrl)
      .map(response => (response.json().data as Story[])
        .filter(story => Object.keys(terms)
          .every(key => key in story && 
            story[key].toLowerCase().includes(terms[key]))));
  }


  // Takes a single search string and returns all of the stories
  // that have a text string containing the search term.
  searchAllFields(term: string): Observable<Story[]> {
    term = term.toLowerCase();
    return this.http.get(this.storiesUrl)
      .map(response => (response.json().data as Story[])
        .filter(story => Object.keys(story)
          .some(key => typeof story[key] === "string" && 
            story[key].toLowerCase().includes(term))));
  }


}