import { Component } from '@angular/core';
import { SafeUrl, DomSanitizer } from '@angular/platform-browser';

import { ItemListComponent } from './item-list.component';
import { StoryListComponent } from './story-list.component';

import { ServerFileService } from './server-file.service';

import { TERMS } from './terms';



@Component({
  selector: 'homepage',
  templateUrl: 'templates/homepage.component.html',
  styleUrls: [ 'styles/homepage.component.css' ]
})
export class HomepageComponent { 
  
  terms = TERMS;
  selectedList: string;
  hrefconst: string = 'data:text/plain;charset=utf-8,';
  serverhref: SafeUrl;
  buttonPrepping: boolean = false;
  downloadReady: boolean = false;
  prepButtonText: string = "Make Data Service File";

  constructor(
    private serverFileService: ServerFileService,
    private sanitizer: DomSanitizer
  ) { }


  show(selectedList: string): void { 
    this.selectedList = selectedList;
  }

  buttonStyle(buttonName: string): string {
    if (buttonName === this.selectedList) {
      return "tab selected";
    } else {
      return "tab";
    }
  }

  buildServerFileDownload(): void {
    this.serverFileService
      .getEncodedText()
      .then(text => {
        this.serverhref = this.sanitizer
          .bypassSecurityTrustUrl(this.hrefconst + text);
        this.buttonPrepping = false;
        this.prepButtonText = "Make Data Service File"
        this.downloadReady = true;
      });
  }

  prepDataServiceFile(): void {
    this.buttonPrepping = true;
    this.prepButtonText = "Preparing..."
    this.buildServerFileDownload();
  }

  // NB: An anchor tag with a click event bound to a function
  // only follows the link if that function returns true.
  downloadClick(): boolean {
    this.downloadReady = false;
    return true;
  }
}