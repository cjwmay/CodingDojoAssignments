import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MessageboardService } from './../messageboard.service';
@Component({
  selector: 'app-messageboard',
  templateUrl: './messageboard.component.html',
  styleUrls: ['./messageboard.component.css']
})
export class MessageboardComponent implements OnInit {
  messages: object[] = [{content:"testing",name:"test user"}]

  constructor(private _messageboardService: MessageboardService) { }

  ngOnInit() {
  }
  newMsgFromChild(data){
    this.messages.push(data);
  }

}
