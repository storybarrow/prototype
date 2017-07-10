import { Component } from '@angular/core';

import { TERMS } from './terms';

@Component({
  selector: 'sb-app',
  templateUrl: 'templates/app.component.html',
  styleUrls: [ 'styles/app.component.css' ]
})
export class AppComponent {
  title = 'StoryBarrow';
  terms = TERMS;
}