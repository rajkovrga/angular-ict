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
    var number = 0;
    for (let item of this.cartItems) {
      number += item.quantity;
    }
    return number;
  }

  getTotalPrice() {
    var totalPrice = 0;
    for (let item of this.cartItems) {
      totalPrice += item.price * item.quantity;
    }
    return totalPrice;
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

  increse(index) {
    this.cartItems[index].quantity++;
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
    this.cartChanged.next(this.cartItems.slice());
  }

  decrease(index) {
    if (this.cartItems[index].quantity === 1) {
      this.cartItems.splice(index, 1);
    } else {
      this.cartItems[index].quantity--;
    }
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
    this.cartChanged.next(this.cartItems.slice());
  }

  delete(index) {
    this.cartItems.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
    this.cartChanged.next(this.cartItems.slice());
  }

  deleteAll() {
    this.cartItems = [];
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
    this.cartChanged.next(this.cartItems.slice());
  }
}
