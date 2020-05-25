import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-view',
  templateUrl: './products-view.component.html',
  styleUrls: ['./products-view.component.css'],
})
export class ProductsViewComponent implements OnInit {
  categories = [
    {
      name: 'Voće',
      image: 'fruits.jpg',
      link: 'voce',
    },
    {
      name: 'Povrće',
      image: 'vegetables.jpg',
      link: 'povrce',
    },
    {
      name: 'Sokovi',
      image: 'juices.jpg',
      link: 'sokovi',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
