import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCartService } from 'src/app/shopping-cart.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css'],
})
export class SingleProductComponent implements OnInit {
  @Input() product;

  constructor(private cartService: ShoppingCartService) {}

  ngOnInit(): void {}

  addToCart(product) {
    this.cartService.addToCart(product);
  }
}
