import { Component, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { CommunicateService } from '../communicate.service';
import { Subscription } from 'rxjs/Subscription';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnDestroy {

  subscription: Subscription;
  product = { title:"", price:"", image:""}
  products = [];
  idx = 0;

  onSubmit() {
    this.products[this.idx] = this.product;
    this.product = { title:"", price:"", image:""};
  }
  delete(){
    this.products.splice(this.idx,1);
  }
  constructor(private _communicateService: CommunicateService, private _route: ActivatedRoute) {
    this._route.params.subscribe((param)=>{
      console.log(param.id);
      this.idx = param.id;
    });
    this.subscription = _communicateService.observedProducts.subscribe(
      products => this.products = products,
      (err) => {},
      () => {},
    )
  };
  retrieveCurrentdata(){
		this.products = this._communicateService.observedProducts.getValue();
	};
  changeData() {
    this._communicateService.updateProducts(this.products);
  };
  ngOnDestroy() {
    if (this.subscription){
      this.subscription.unsubscribe();
    };
	};

}
