import { Component, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { CommunicateService } from '../communicate.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnDestroy {

  subscription: Subscription;
  product = { title:"", price:"", image:""}
  products = [];
  idx = 0;
  delete(){
    this.products.splice(this.idx,1);
  }
  constructor(private _communicateService: CommunicateService) {
    this.subscription = this._communicateService.observedProducts.subscribe(
      (products) => {
        this.products = products
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
