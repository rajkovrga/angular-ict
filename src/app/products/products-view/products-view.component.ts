import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/category.service';

@Component({
  selector: 'app-products-view',
  templateUrl: './products-view.component.html',
  styleUrls: ['./products-view.component.css'],
})
export class ProductsViewComponent implements OnInit {
  categories = [
    // {
    //   name: 'Voće',
    //   image: 'fruits.jpg',
    //   link: 'voce',
    // },
    // {
    //   name: 'Povrće',
    //   image: 'vegetables.jpg',
    //   link: 'povrce',
    // },
    // {
    //   name: 'Sokovi',
    //   image: 'juices.jpg',
    //   link: 'sokovi',
    // },
  ];

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.categoryService
            .getCategories()
            .subscribe((categories) => {
              this.categories = categories;
            });
  }
}
