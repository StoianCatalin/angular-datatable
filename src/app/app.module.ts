import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgdTableModule } from '../agd-table/agd-table.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgdTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
