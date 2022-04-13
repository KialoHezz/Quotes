import { Component, OnInit } from '@angular/core';
import { QuotesModel } from '../quotes-model';
@Component({
  selector: 'app-display-qoute',
  templateUrl: './display-qoute.component.html',
  styleUrls: ['./display-qoute.component.css'],
})
export class DisplayQouteComponent implements OnInit {
  quotes: QuotesModel[] = [
    new QuotesModel(
      1,
      'Allan',
      'still alive',
      'never borrow confindence',
      new Date()
    ),
  ];

  addNewQuote(quote: QuotesModel) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.completeDate);
    this.quotes.push(quote);
  }

  deleteQuote(isComplete: any, index: number) {
    if (isComplete) {
      let toDelete = confirm(
        `Are you sure you want to delete ${this.quotes[index].username}?`
      );

      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }

  // @Output() isComplete = new EventEmitter<boolean>();

  show(index: number) {
    this.quotes[index].showMore = !this.quotes[index].showMore;
  }

  constructor() {}

  ngOnInit(): void {}
}
