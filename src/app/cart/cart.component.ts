import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';
import { fadeOutLeft } from '../animations';
import { transition, useAnimation, trigger } from '@angular/animations';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  animations: [fadeOutLeft],
})
export class CartComponent implements OnInit {
  cart = [];
  totalPrice = 0;
  displayedColumns = ['name', 'quantity', 'price', 'delete'];

  constructor(private cartService: ShoppingCartService) {}

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    this.totalPrice = this.cartService.getTotalPrice();
    this.cartService.cartChanged.subscribe((cart: any[]) => {
      this.cart = cart;
      this.totalPrice = this.cartService.getTotalPrice();
    });
  }

  onIncrease(index) {
    this.cartService.increse(index);
  }

  onDecrease(index) {
    this.cartService.decrease(index);
  }

  onDelete(index) {
    this.cartService.delete(index);
  }

  onDeleteAll() {
    this.cartService.deleteAll();
  }
}
