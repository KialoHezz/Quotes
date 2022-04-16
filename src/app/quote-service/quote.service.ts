import { Injectable } from '@angular/core';
import { Quotes } from '../quoteList';
// import { QuotesModel } from '../quotes-model';

@Injectable({
  providedIn: 'root',
})

export class QuoteService {
  
  getQuotes() {
    return Quotes;
  }

  constructor() {}
}
