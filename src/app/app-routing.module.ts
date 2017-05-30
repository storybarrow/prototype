import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CollectionComponent } from './collection.component';

import { ItemPageComponent } from './item-page.component';
import { ItemEditorComponent } from './item-editor.component';



const routes: Routes = [
  { path: '',  redirectTo: '/collection',  pathMatch: 'full' },
  { path: 'collection', component: CollectionComponent },
  { path: 'item/:id', component: ItemPageComponent },
  { path: 'edititem/:id', component: ItemEditorComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }