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
import { CollectionComponent } from './collection.component';

import { ItemListComponent }  from './item-list.component';
import { ItemDetailComponent } from './item-detail.component';
import { ItemPageComponent } from './item-page.component';
import { ItemEditorComponent } from './item-editor.component';
import { ItemSearchComponent } from './item-search.component';
import { ItemService } from './item.service';
import { ItemSearchService } from './item-search.service';

import { StoryListComponent } from './story-list.component';
import { StoryDetailComponent } from './story-detail.component';
import { StoryPageComponent } from './story-page.component';
import { StoryEditorComponent } from './story-editor.component';
import { StoryService } from './story.service';

import { ServerFileDumpComponent } from './server-file-dump.component';


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
    ItemSearchComponent,

    StoryListComponent,
    StoryDetailComponent,
    StoryPageComponent,
    StoryEditorComponent,

    StringFilterPipe,

    ServerFileDumpComponent
  ],
  providers: [ 
    ItemService,
    ItemSearchService,
    StoryService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
