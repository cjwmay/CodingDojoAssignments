import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  colors = ["AliceBlue","AntiqueWhite","Aqua", "Aquamarine", "Azure","Beige","Bisque","BlueViolet","CornflowerBlue","DarkOrange"]
  a = Math.floor(Math.random()*9);
  b = Math.floor(Math.random()*10);
  c = Math.floor(Math.random()*10);
  d = Math.floor(Math.random()*10);
  e = Math.floor(Math.random()*10);
  f = Math.floor(Math.random()*10);
  g = Math.floor(Math.random()*10);
  h = Math.floor(Math.random()*10);
  i = Math.floor(Math.random()*10);
  j = Math.floor(Math.random()*10);

}
