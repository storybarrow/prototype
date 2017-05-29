import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { StringFilterPipe } from './pipes/filter.pipe';

import { AppRoutingModule } from './app-routing.module';

// Imports for loading & setting up the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';


import { AppComponent } from './app.component';
import { CollectionComponent } from './collection.component';

import { ItemListComponent }  from './item/item-list.component';
import { ItemDetailComponent } from './item/item-detail.component';
import { ItemPageComponent } from './item/item-page.component';
import { ItemEditorComponent } from './item/item-editor.component';
import { ItemService } from './item/item.service';

import { StoryListComponent } from './story/story-list.component';
import { StoryDetailComponent } from './story/story-detail.component';
import { StoryService } from './story/story.service';


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
    CollectionComponent,
    ItemListComponent,
    ItemDetailComponent,
    ItemPageComponent,
    ItemEditorComponent,
    StoryListComponent,
    StoryDetailComponent,
    StringFilterPipe
  ],
  providers: [ 
    ItemService,
    StoryService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
