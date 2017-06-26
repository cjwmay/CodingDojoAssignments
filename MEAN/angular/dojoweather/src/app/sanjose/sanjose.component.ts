import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpService } from '../http.service';
import { Subscription } from 'rxjs/Subscription';
import { CommunicateService } from '../communicate.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-sanjose',
  templateUrl: './sanjose.component.html',
  styleUrls: ['./sanjose.component.css']
})
export class SanjoseComponent implements OnDestroy {

  subscription: Subscription;
  tasks = [];
  constructor(private  _communicateService: CommunicateService, private _httpService: HttpService){
    this.subscription = _communicateService.observedTasks.subscribe(
      (tasks) => { this.tasks = tasks; },
      (err) => { },
      () => { },
      )
  };
  


  ngOnDestroy(){
    if(this.subscription){
      this.subscription.unsubscribe();
    }
	};

}
