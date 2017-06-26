import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  message = {name:'', content:''};
  @Output() newMessageEvent = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }
  newMessage(){
    console.log(this.message);
    this.newMessageEvent.emit(this.message);
  }

}
