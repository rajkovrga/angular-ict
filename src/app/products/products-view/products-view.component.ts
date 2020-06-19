import { Component, OnInit, OnDestroy } from '@angular/core';
import { CategoryService } from 'src/app/category.service';
import { fadeInAnimation } from 'src/app/animations';
import { trigger, transition, useAnimation } from '@angular/animations';
import { Category } from '../Categorty.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products-view',
  templateUrl: './products-view.component.html',
  styleUrls: ['./products-view.component.css'],
  animations: [
    trigger('productAnimation', [
      transition('void=>*', [useAnimation(fadeInAnimation)]),
    ]),
  ],
})
export class ProductsViewComponent implements OnInit, OnDestroy {
  categories: Category[] = [];
  subscription: Subscription;

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.subscription = this.categoryService
      .getCategories()
      .subscribe((categories) => {
        this.categories = categories;
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
