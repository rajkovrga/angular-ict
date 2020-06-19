import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/products.service';
import { ShoppingCartService } from 'src/app/shopping-cart.service';
import { trigger, transition, useAnimation } from '@angular/animations';
import { fadeInAnimation } from 'src/app/animations';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products-by-category',
  templateUrl: './products-by-category.component.html',
  styleUrls: ['./products-by-category.component.css'],
  animations: [
    trigger('productAnimation', [
      transition('void=>*', [useAnimation(fadeInAnimation)]),
    ]),
  ],
})
export class ProductsByCategoryComponent implements OnInit, OnDestroy {
  products = [];
  category = '';
  searchInput = '';
  sortType = '';
  subscription: Subscription;

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
          this.subscription = this.productsService
            .getProducts(this.category)
            .subscribe((products) => {
              this.products = products;
            });
          break;
        case 'povrce':
          this.category = 'povrce';
          this.subscription = this.productsService
            .getProducts(this.category)
            .subscribe((products) => {
              this.products = products;
            });
          break;
        case 'sokovi':
          this.category = 'sokovi';
          this.subscription = this.productsService
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

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  changeSortType(type: string) {
    switch (type) {
      case 'asc':
        this.sortType = 'asc';
        break;
      case 'desc':
        this.sortType = 'desc';
        break;
      default:
        this.sortType = 'asc';
    }
  }
}
