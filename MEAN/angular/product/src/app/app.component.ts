import { Component, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { CommunicateService } from './communicate.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  subscription: Subscription;
  subscriptionP: Subscription;
  product = { title:"", price:"", image:""}
  products = [];
  productstoadd = [];
  constructor(private _communicateService: CommunicateService) {
    _communicateService.updateProducts(this.products);
    this.subscriptionP = _communicateService.observedProducts.subscribe(
      (products) => {
        this.products = products;
      }
    )
    this.subscription = _communicateService.observedProducts.subscribe(
      (productstoadd) => {
        this.products.concat(this.productstoadd);
      },
      (err) => {},
      () => {},
    )

  };
  
  ngOnDestroy() {
    if (this.subscription){
      this.subscription.unsubscribe();
    }  
	};

}
