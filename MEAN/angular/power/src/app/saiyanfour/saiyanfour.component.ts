import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-saiyanfour',
  templateUrl: './saiyanfour.component.html',
  styleUrls: ['./saiyanfour.component.css']
})
export class SaiyanfourComponent implements OnInit {
  @Input() mySelect;
  constructor() { }

  ngOnInit() {
  }

}
