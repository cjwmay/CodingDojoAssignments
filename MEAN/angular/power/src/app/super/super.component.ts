import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-super',
  templateUrl: './super.component.html',
  styleUrls: ['./super.component.css']
})
export class SuperComponent implements OnInit {
  @Input() mySelect;

  constructor() { }

  ngOnInit() {
  }

}
