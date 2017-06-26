import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  array = ["ON","ON","ON","ON","ON","ON","ON","ON","ON","ON"]
  title = 'app';
  color = ["green","green","green","green","green","green","green","green","green","green"];
  switch(idx){
    if(this.array[idx] == "ON"){
      this.array[idx] = "OFF";
      this.color[idx] = "red";
    }else{
      this.array[idx] = "ON";
      this.color[idx] = "green";
    }

  }
}
