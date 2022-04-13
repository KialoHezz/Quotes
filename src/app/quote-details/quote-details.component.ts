import { Quote } from '@angular/compiler';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { QuotesModel } from '../quotes-model';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css'],
})
export class QuoteDetailsComponent implements OnInit {
  @Input() quotes: QuotesModel;

  @Output() onDelete = new EventEmitter<boolean>();

  deleteQuote(complete: boolean) {
    this.onDelete.emit(complete);
  }

  //increment upVote
  counter: number = 0;
  //Decrement downVote
  decrement: number = 0;

  constructor() {}

  ngOnInit(): void {}
}
