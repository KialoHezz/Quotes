import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
import { Quote } from '@angular/compiler';
import { QuotesModel } from '../quotes-model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  newQuote = new QuotesModel(1, '', '', '', new Date());

  @Input() quotes: Quote;
  @Output() isComplete = new EventEmitter<boolean>();

  quoteComplete(complete: boolean) {
    this.isComplete.emit(complete);
  }
  submitQoute() {
    // this.addQoute.emit(this.newQuote)
  }
  constructor() {}

  ngOnInit(): void {}
}
