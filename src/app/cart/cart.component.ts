import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';
import { fadeOutLeft } from '../animations';
import { transition, useAnimation, trigger } from '@angular/animations';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  animations: [fadeOutLeft],
})
export class CartComponent implements OnInit, OnDestroy {
  cart = [];
  totalPrice = 0;
  displayedColumns = ['name', 'quantity', 'price', 'delete'];
  subscription: Subscription;

  constructor(private cartService: ShoppingCartService) {}

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    this.totalPrice = this.cartService.getTotalPrice();
    this.subscription = this.cartService.cartChanged.subscribe(
      (cart: any[]) => {
        this.cart = cart;
        this.totalPrice = this.cartService.getTotalPrice();
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
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
