import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Subscription } from 'rxjs/Subscription';

@Injectable()
export class HttpService {
  
  constructor(private _http: Http) { }
  retrieveTasks() {
    return this._http.get('/tasks').map(data=>data.json()).toPromise()
  }
}

