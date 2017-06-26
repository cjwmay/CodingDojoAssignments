import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user = {
    name:"",
  };
  users = [];
  onsubmit(){
    this.users = [];
    this.users.push(this.user);
    this.user = {name:""};
  };
  score = 0;
  tasks = [];
  constructor(private _httpService: HttpService){};
  getTasks(){
    this._httpService.retrieveTasks("https://api.github.com/users/"+this.user.name)
    .then( tasks => { this.tasks = tasks }).
    catch( err => { console.log(err); });

  };
}
