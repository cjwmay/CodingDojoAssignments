import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class WallService {

  constructor(private _http: Http) { }
  login(userData){
  	console.log("in the service's login function");
  	return this._http.post('/api/users', userData).map(response=>response.json()).toPromise();
  }

}
