import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
//import { CollectionModule } from './collection.module';

// Imports for loading & setting up the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { StringFilterPipe }     from './filter.pipe';
import { FirstLetterUpperPipe } from './first-letter-upper.pipe';

import { AppComponent } from './app.component';

import { HomepageComponent }       from './homepage.component';
import { HomepageHeaderComponent } from './homepage-header.component';

import { ItemListComponent }  from './item-list.component';
import { ItemDetailComponent } from './item-detail.component';
import { ItemPageComponent }     from './item-page.component';
import { ItemEditorComponent }   from './item-editor.component';
import { ItemAutofillComponent } from './item-autofill.component';
import { ItemService }           from './item.service';
import { ItemSearchService }     from './item-search.service';

import { StoryListComponent } from './story-list.component';
import { StoryDetailComponent } from './story-detail.component';
import { StoryPageComponent }   from './story-page.component';
import { StoryEditorComponent } from './story-editor.component';
import { StoryService }         from './story.service';
import { StorySearchService }   from './story-search.service';

import { ServerFileService } from './server-file.service';


@NgModule({
  imports: [
    BrowserModule, 
    FormsModule,
    HttpModule,
//    CollectionModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  declarations: [
    AppComponent,
    HomepageComponent,
    HomepageHeaderComponent,

    ItemListComponent,
    ItemDetailComponent,
    ItemPageComponent,
    ItemEditorComponent,
    ItemAutofillComponent,

    StoryListComponent,
    StoryDetailComponent,
    StoryPageComponent,
    StoryEditorComponent,

    StringFilterPipe,
    FirstLetterUpperPipe
  ],
  providers: [ 
    ItemService,
    ItemSearchService,
    StoryService,
    StorySearchService,
    ServerFileService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
