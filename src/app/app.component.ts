import { Component } from '@angular/core';

// For server file dump
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { OnInit } from '@angular/core';



@Component({
  selector: 'sb-app',
  templateUrl: 'templates/app.component.html',
  styleUrls: [ 'styles/app.component.css' ]
})
export class AppComponent {
  title = 'StoryBarrow';


  // for server-data-dump
  hiding: boolean = false;
  path: string;

  constructor( 
    private router: Router,
    private location: Location ) { }

  ngOnInit(): void {
    this.path = this.location.path();
    this.router.events.subscribe(() => {
      this.path = this.location.path();
      this.hiding = (this.path === '/serverfile');
    });
  }


}