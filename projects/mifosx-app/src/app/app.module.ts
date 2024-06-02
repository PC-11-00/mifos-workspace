import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MifosxLibModule } from 'mifosx-lib';
import { BulkImportService } from 'finearct-client';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
