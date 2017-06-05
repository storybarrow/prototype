import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CollectionComponent } from './collection.component';

import { ItemPageComponent } from './item-page.component';
import { ItemEditorComponent } from './item-editor.component';

import { StoryPageComponent } from './story-page.component';
import { StoryEditorComponent } from './story-editor.component';

import { ServerFileDumpComponent } from './server-file-dump.component';



const ROUTES: Routes = [
  { path: '',  redirectTo: '/home',  pathMatch: 'full' },
  { path: 'home', component: CollectionComponent },
  { path: 'serverfile', component: ServerFileDumpComponent },
  { path: 'item/:id', component: ItemPageComponent },
  { path: 'edititem/:id', component: ItemEditorComponent },
  { path: 'story/:id', component: StoryPageComponent },
  { path: 'editstory/:id', component: StoryEditorComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(ROUTES) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }