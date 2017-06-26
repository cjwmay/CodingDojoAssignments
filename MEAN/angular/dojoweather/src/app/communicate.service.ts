import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class CommunicateService {

  observedTasks = new BehaviorSubject(null);

  updateTasks(tasks) {
    this.observedTasks.next(tasks);
  };
  constructor() { };

}
