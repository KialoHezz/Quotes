import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Quote } from '@angular/compiler';
import { QuotesModel } from '../quotes-model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  newQuote = new QuotesModel();

  @Output() addQoute = new EventEmitter<Quote>();

  submitQoute(){
    this.addQoute.emit(this.newQuote)
  }
  constructor() {}

  ngOnInit(): void {}
}
