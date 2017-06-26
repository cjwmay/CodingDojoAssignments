import { Component, OnInit } from '@angular/core';
import { WallService } from './../wall.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  newUser:object = {name: ""};
  errors: string[] = [];

  constructor(private _wallService: WallService, private _router: Router) { }

  ngOnInit() {
  }
  login(){
    console.log(this.newUser);
  	this._wallService.login(this.newUser)
  	.then((data)=>{
  		console.log("then");
  		console.log(data);
  		if(data.errors != undefined){
        console.log("we got validation errors");
        var newArr = [];
        for(var key in data.errors){
          newArr.push(data.errors[key].message);
        }
  			this.errors = newArr;
  		}else{
        console.log("no validation errors");
        this._router.navigate(['/wall']);
      }
  	})
  	.catch((errors)=>{
  		console.log("catch");
  		console.log(errors);
  	})
  }

}
