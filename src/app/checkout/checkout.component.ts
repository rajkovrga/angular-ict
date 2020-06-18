import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';
import { Checkout } from './Checkout.model';
import { CheckoutService } from '../checkout.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  checkoutData: Checkout = {
    firstname: '',
    lastname: '',
    address: '',
    city: '',
    phone: '',
    cart: [],
  };
  totalPrice = 0;
  error = false;

  constructor(
    private cartService: ShoppingCartService,
    private checkoutService: CheckoutService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.cartService.getCartNumber() === 0) {
      this.router.navigate(['/proizvodi']);
    }
    this.checkoutData.cart = this.cartService.getCart();
    this.totalPrice = this.cartService.getTotalPrice();
    this.checkoutService.orderSuccess.subscribe((status: Promise<any>) => {
      status
        .then(() => {
          this.error = false;
        })
        .catch((error) => {
          this.error = true;
        });
    });
  }

  insertOrder() {
    this.checkoutService.insertOrder(this.checkoutData);
    if (!this.error) {
      this.snackBar.open('Uspešno ste izvršili narudžbinu!', 'U redu', {
        duration: 3000,
        verticalPosition: 'top',
      });
      setTimeout(() => {
        this.cartService.deleteAll();
        this.router.navigate(['']);
      }, 3000);
    } else {
      this.snackBar.open('Došlo je do greške!', 'U redu', {
        duration: 3000,
        verticalPosition: 'top',
      });
    }
  }
}
