import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Story } from './story';


@Injectable()
export class StoryService {

  private storiesUrl = 'api/stories'; // URL to web api

  constructor(private http: Http) { }

  
  getStories(): Promise<Story[]> {
    return this.http.get(this.storiesUrl)
      .toPromise()
      .then(response => response.json().data as Story[])
      .catch(this.handleError);
  }

  
  getStory(id: number): Promise<Story> {
    const url = `${this.storiesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Story)
      .catch(this.handleError);
  }



  newId(): Promise<number> {
    return this.getStories()
      .then(stories => stories.length);
  }

  blankStory(): Promise<Story> {
    return this.newId()
      .then(id => new Story(id, "", "", ""));
  }


  private headers = new Headers({'Content-Type': 'application/json'});

  create(story: Story): Promise<Story> {
    return this.http
      .post(this.storiesUrl, 
        JSON.stringify(story), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Story)
      .catch(this.handleError);
  }

  update(story: Story): Promise<Story> {
    const url = `${this.storiesUrl}/${story.id}`;
    return this.http
      .put(url, JSON.stringify(story), {headers: this.headers})
      .toPromise()
      .then(() => story)
      .catch(this.handleError);
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); //demo
    return Promise.reject(error.message || error);
  }

}