import { Component, OnDestroy } from '@angular/core';
import { HttpService } from './http.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subscription } from 'rxjs/Subscription';
import { CommunicateService } from './communicate.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  subscription: Subscription;
  tasks = [];
  getTasks(city) {
    this._httpService.retrieveTasks(city)
    .then( tasks => { this.tasks = tasks, this._communicateService.updateTasks(this.tasks)})
    .catch( err => { console.log(err); });
  };

  constructor(private _httpService: HttpService, private _communicateService: CommunicateService) {
    _communicateService.updateTasks(this.tasks);
  };

  changeData(){
    this._communicateService.updateTasks(this.tasks);
    console.log(this.tasks);
  };

  onDestroy(){
    if(this.subscription){
      this.subscription.unsubscribe();
    }
	};


}
