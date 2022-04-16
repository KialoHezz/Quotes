import { NgModule } from '@angular/core';
// import { NgProgressModule } from '@ngx-progressbar/core';
// import { NgProgressHttpClientModule } from '@ngx-progressbar/http-client';
import { BrowserModule } from '@angular/platform-browser';
//registered my services
import { QuoteService } from './quote-service/quote.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { DisplayQouteComponent } from './display-qoute/display-qoute.component';
import { FormsModule } from '@angular/forms';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import {HttpClientModule} from '@angular/common/http';

import { DateCountPipe } from './date-count.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    DisplayQouteComponent,
    QuoteDetailsComponent,

    DateCountPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    //loaders
    // NgProgressModule.forRoot(),
    // NgProgressHttpClientModule,
    HttpClientModule,
  ],
  //registered the service
  providers: [QuoteService],
  bootstrap: [AppComponent],
})
export class AppModule {}
