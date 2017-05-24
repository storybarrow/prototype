import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { StringFilterPipe } from './filter.pipe';

import { AppRoutingModule } from './app-routing.module';

// Imports for loading & setting up the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';


import { AppComponent } from './app.component';
import { ItemListComponent }  from './item-list.component';
import { ItemDetailComponent } from './item-detail.component';
import { ItemEditorComponent } from './item-editor.component';
import { ItemService } from './item.service';


@NgModule({
  imports: [
    BrowserModule, 
    FormsModule,
    HttpModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  declarations: [
    AppComponent,
    ItemListComponent,
    ItemDetailComponent,
    ItemEditorComponent,
    StringFilterPipe
  ],
  providers: [ 
    ItemService 
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
