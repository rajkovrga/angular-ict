import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/products.service';
import { ShoppingCartService } from 'src/app/shopping-cart.service';

@Component({
  selector: 'app-products-by-category',
  templateUrl: './products-by-category.component.html',
  styleUrls: ['./products-by-category.component.css'],
})
export class ProductsByCategoryComponent implements OnInit {
  products = [];
  category = '';
  searchInput = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      switch (params.get('category')) {
        case 'voce':
          this.category = 'voce';
          this.productsService
            .getProducts(this.category)
            .subscribe((products) => {
              this.products = products;
            });
          break;
        case 'povrce':
          this.category = 'povrce';
          this.productsService
            .getProducts(this.category)
            .subscribe((products) => {
              this.products = products;
            });
          break;
        case 'sokovi':
          this.category = 'sokovi';
          this.productsService
            .getProducts(this.category)
            .subscribe((products) => {
              this.products = products;
            });
          break;
        default:
          this.router.navigate(['proizvodi']);
      }
      if (params.get('category') === 'voce') {
      }
    });
  }

  sortProducts(type: string) {
    switch (type) {
      case 'asc':
        this.products.sort((a, b) => a.price - b.price);
        break;
      case 'desc':
        this.products.sort((a, b) => b.price - a.price);
        break;
      default:
        this.products.sort((a, b) => b.price - a.price);
    }
  }
}
