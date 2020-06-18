import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Checkout } from './checkout/Checkout.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  orderSuccess = new Subject();
  constructor(private afs: AngularFirestore) {}

  insertOrder(checkoutData: Checkout) {
    this.orderSuccess.next(this.afs.collection('orders').add(checkoutData));
  }
}
