import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
import { QuotesModel } from '../quotes-model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  newQuote = new QuotesModel(1, '', '', '', new Date());

  @Output() addQoute = new EventEmitter<QuotesModel>();

  submitQoute() {
    this.addQoute.emit(this.newQuote);
  }

  quoteComplete(addQoutes: any){
    this.addQoute.emit(addQoutes);
  };
  constructor() {}

  ngOnInit(): void {}
}
