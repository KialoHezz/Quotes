import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { DisplayQouteComponent } from './display-qoute/display-qoute.component';
import { FormsModule } from '@angular/forms';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    DisplayQouteComponent,
    QuoteDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
