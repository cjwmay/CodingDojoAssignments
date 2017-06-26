import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  num = 1;
  select = 0;
  onSubmit(){
      this.select = this.num;
      this.num = 0;
  }
}
