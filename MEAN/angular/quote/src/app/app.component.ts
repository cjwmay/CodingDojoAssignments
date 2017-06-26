import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  quotes = {
    quote: '',
    author: '',
    vote: 0,
  };
  quotesarr = [];
  vote(eventData){
    this.quotesarr[eventData].vote += 1;
    console.log(eventData);
  };
  down(eventData){
    this.quotesarr[eventData].vote -= 1;
    console.log(eventData);
  };
  delete(eventData){
    this.quotesarr.splice(eventData,1);
    console.log(eventData);
  };
  onSubmit(){
    this.quotesarr.push(this.quotes)
    this.quotes = {
    quote: '',
    author: '',
    vote: 0,
  };

  }
}
