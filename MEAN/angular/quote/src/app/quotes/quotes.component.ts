import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  

  @Input() quotes;
  @Output() voteEmitter = new EventEmitter();
  @Output() downEmitter = new EventEmitter();
  @Output() deleteEmitter = new EventEmitter();

  voteUp(val){
    this.voteEmitter.emit(val);
  }
  voteDown(val){
    this.downEmitter.emit(val);
  }
  delete(val){
    this.deleteEmitter.emit(val);
  }
  

  constructor() { }

  ngOnInit() {
  }

}
