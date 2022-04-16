import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Goal } from '../goal-class/goal';

//injecting the QuoteService
import { QuoteService } from '../quote-service/quote.service';
import { QuotesModel } from '../quotes-model';
//alter service
// import { AlertService } from '../alert.service.spec';

@Component({
  selector: 'app-display-qoute',
  templateUrl: './display-qoute.component.html',
  styleUrls: ['./display-qoute.component.css'],
  //register the service.
  providers: [QuoteService],
})
export class DisplayQouteComponent implements OnInit {
  //create a property assign the type
  quotes: QuotesModel[];
   goals: Goal;
  

  
  // alterService :AlertService;

 //injecting the QuoteServices
  constructor(public quoteService: QuoteService, private http:HttpClient) {
    this.quotes = quoteService.getQuotes();
    

  }

  addNewQuote(quote: any) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.completeDate);
    this.quotes.push(quote);
  }

  //function  for delete
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

  //show description when user toggles after s/he clicks detils button.
  show(index: number) {
    this.quotes[index].showMore = !this.quotes[index].showMore;
  }

  ngOnInit(): void {
      interface ApiResponse{
    author: string;
    goal: string;
  }

  this.http.get<ApiResponse>("http://quotes.stormconsultancy.co.uk/random.json").subscribe(data => {
    this.goals = new Goal(data.author, data.goal)
  })
  }


}
