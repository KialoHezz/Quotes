import { Quote } from '@angular/compiler';
import { Component, OnInit ,Input,Output, EventEmitter} from '@angular/core';
import { QuotesModel} from "../quotes-model";

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css'],
})
export class QuoteDetailsComponent implements OnInit {
  @Input() quote: Quote;
  @Output() onDelete = new EventEmitter<boolean>();

  deleteQuote(complete: Boolean) {
    this.onDelete.emit();
  }

  constructor() {}

  ngOnInit(): void {}
}
