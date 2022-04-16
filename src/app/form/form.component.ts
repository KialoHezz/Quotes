import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { QuotesModel } from '../quotes-model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  newQuote = new QuotesModel(0, '', '', '', new Date());

  @Output() addQuote = new EventEmitter<QuotesModel>();

  submitQuote() {
    this.addQuote.emit(this.newQuote);
    this.newQuote = new QuotesModel(0, '', '', '', new Date());
  }

  constructor() {}

  ngOnInit(): void {}
}
