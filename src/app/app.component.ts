import { Component } from '@angular/core';
import { QuotesModel } from './quotes-model';



const $: any = '';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Qoute';

  quote: QuotesModel[] = [
    new QuotesModel(
      1,
      'Allan',
      'still alive',
      'never borrow confindence',
      new Date(2020 / 3 / 14)
    ),
  ];
}


// Can't bind to 'newQuote' since it isn't a known property of 'app-form'.
// 1. If 'app-form' is an Angular component and it has 'newQuote' input, then verify that it is part of this module.
// 2. If 'app-form' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.
// 3. To allow any property add 'NO_ERRORS_SCHEMA' to the '@NgModule.schemas' of this component.ngts