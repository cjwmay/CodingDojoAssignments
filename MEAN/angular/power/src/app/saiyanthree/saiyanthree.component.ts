import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-saiyanthree',
  templateUrl: './saiyanthree.component.html',
  styleUrls: ['./saiyanthree.component.css']
})
export class SaiyanthreeComponent implements OnInit {
  @Input() mySelect;
  constructor() { }

  ngOnInit() {
  }

}
