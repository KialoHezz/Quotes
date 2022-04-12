import { Component, OnInit } from '@angular/core';
import { QuotesModel } from '../quotes-model';
@Component({
  selector: 'app-display-qoute',
  templateUrl: './display-qoute.component.html',
  styleUrls: ['./display-qoute.component.css'],
})
export class DisplayQouteComponent implements OnInit {
  quote: QuotesModel[] = [
    new QuotesModel(
      1, 'Allan','still alive','never borrow confindence',new Date(2020 / 3 / 14)
    ),
  ]

  addNewQuote(quote: QuotesModel) {
    let quoteLength = this.quote.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate);
    this.quote.push(quote);
  }

  // upvoteComplete(counter:number, increment:number){
  //   increment++
  //   this.increment.emit(counter);
  // }

  constructor() {}

  ngOnInit(): void {}
}
