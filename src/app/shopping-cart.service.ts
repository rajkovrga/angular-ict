import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  cartChanged = new Subject();
  cartItems = [];

  constructor() {
    if (localStorage.getItem('cart') !== null) {
      this.cartItems = JSON.parse(localStorage.getItem('cart'));
    }
  }

  getCart() {
    return this.cartItems.slice();
  }

  getCartNumber() {
    return this.cartItems.length;
  }

  addToCart(product) {
    console.log(product);
    for (let item of this.cartItems) {
      if (item.id === product.id) {
        item.quantity++;
        localStorage.setItem('cart', JSON.stringify(this.cartItems));
        return this.cartChanged.next(this.cartItems.slice());
      }
    }
    const newItem = { ...product, quantity: 1 };
    this.cartItems.push(newItem);
    console.log(this.cartItems);
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
    this.cartChanged.next(this.cartItems.slice());
  }
}
