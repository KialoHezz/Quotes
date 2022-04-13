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
      1,
      'Allan',
      'still alive',
      'never borrow confindence',
      new Date()
    ),
  ];

  addNewQuote(quote: QuotesModel) {
    let quoteLength = this.quote.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.completeDate);
    this.quote.push(quote);
  }

  //increment upVote
  counter: number = 0;
  //Decrement downVote
  decrement: number = 0;

  deleteQuote(isComplete:any, index:number) {
    if (isComplete) {
      let toDelete = confirm(
        `Are you sure you want to delete ${this.quote[index].username}?`
      );

      if (toDelete) {
        this.quote.splice(index, 1);
      }
    }
  }
  constructor() {}

  ngOnInit(): void {}
}
