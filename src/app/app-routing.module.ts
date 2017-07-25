import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './homepage.component';
import { HomepageHeaderComponent } from './homepage-header.component';

import { ItemListComponent }  from './item-list.component';
import { ItemPageComponent } from './item-page.component';
import { ItemEditorComponent } from './item-editor.component';

import { StoryListComponent }  from './story-list.component';
import { StoryPageComponent } from './story-page.component';
import { StoryEditorComponent } from './story-editor.component';



const routes: Routes = [
  { 
    path: '',
    redirectTo: '/home',
    pathMatch: 'full' 
  },
  { 
    path: 'home',
    component: HomepageComponent,
    children: [
      {
        path: '',
        component: HomepageHeaderComponent,
        children: [
          {
            path: 'items',
            component: ItemListComponent
          },
          {
            path: 'collections',
            component: StoryListComponent
          }
        ]
      }
    ]
  },
  {
    path: 'item/:id',
    component: ItemPageComponent
  },
  { 
    path: 'edititem/:id',
    component: ItemEditorComponent
  },
  { 
    path: 'collection/:id',
    component: StoryPageComponent
  },
  { 
    path: 'editcollection/:id',
    component: StoryEditorComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }