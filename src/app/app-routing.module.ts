import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes, Router } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ProductsViewComponent } from './products/products-view/products-view.component';
import { ProductsByCategoryComponent } from './products/products-by-category/products-by-category.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'onama', component: AboutComponent },
  { path: 'proizvodi/:category', component: ProductsByCategoryComponent },
  { path: 'proizvodi', component: ProductsViewComponent },
  { path: 'korpa', component: CartComponent },
  { path: 'narudzbina', component: CheckoutComponent },
  { path: '**', component: NotFoundComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
