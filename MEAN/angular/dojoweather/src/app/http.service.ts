import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HttpService {

  constructor(private _http: Http) { };
  retrieveTasks(city) {
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q='+city+'&APPID=ef484142cfea1e21f77f1fbda8962a91').map(data=>data.json()).toPromise()
  }

}
