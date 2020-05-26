import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart = [];
  totalPrice = 0;
  displayedColumns = ['name', 'quantity', 'price', 'delete'];

  constructor(private cartService: ShoppingCartService) {}

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    this.totalPrice = this.cartService.getTotalPrice();
    console.log(this.cart);
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
