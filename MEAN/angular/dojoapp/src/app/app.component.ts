import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hi';
  emails = [{email:"cjwmay@live.cn", importance: true, subject: "haha", content:"blahblahblah"},{email:"cjwmay@live.cn", importance: false, subject: "haha", content:"blahblahblah"},{email:"cjwmay@live.cn", importance: false, subject: "haha", content:"blahblahblah"},{email:"cjwmay@live.cn", importance: true, subject: "haha", content:"blahblahblah"},];
}
