import { Component, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { CommunicateService } from '../communicate.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnDestroy{
  product = {title:'', price:'', image:''};
  subscription: Subscription;
  subscriptionP: Subscription;
  productstoadd = [];
  products = [];

  OnSubmit(){
    this.productstoadd.push(this.product);
    this.product = {title:'', price:'', image:''};
    this.changeData();
  };

  constructor(private _communicateService: CommunicateService) {
    this.subscriptionP = _communicateService.observedProducts.subscribe(
      (products) => {
        this.products = products;
      }
    )
    this.subscription = this._communicateService.observedProducts.subscribe(
      (productstoadd) => {
        this.productstoadd = productstoadd
      },
      (err) => {},
      () => {},
    )
  };
  changeData() {
    this._communicateService.updateProducts(this.productstoadd);
    return this.productstoadd;
  };
 
  ngOnDestroy() {
    if (this.subscription){
      this.subscription.unsubscribe();
    }  
	};



}
