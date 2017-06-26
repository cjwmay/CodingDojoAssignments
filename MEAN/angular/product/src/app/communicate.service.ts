import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class CommunicateService {
  observedProducts = new BehaviorSubject(null);

  updateProducts(products) {
    this.observedProducts.next(products);
  };

}
