import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ItemListComponent } from './item-list.component';
import { ItemEditorComponent } from './item-editor.component';
import { ItemFormComponent } from './item-form.component';


const routes: Routes = [
  { path: '',  redirectTo: '/collection',  pathMatch: 'full' },
  { path: 'collection', component: ItemListComponent },
  //{ path: 'new-item', component: ItemFormComponent },
  { path: 'item/:id', component: ItemEditorComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }