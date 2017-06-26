import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Registration';
  user = { email:'', fname:'', lname:'',password:'', streetaddress:'', unitapt:'',city:'', state:''};
  users = [];
  onSubmit(){
    this.users = [];
    console.log(this.user);
    this.users.push(this.user);
    console.log(this.users);
    this.user = { email:'', fname:'', lname:'',password:'', streetaddress:'',unitapt:'',city:'', state:''};
  }
}
