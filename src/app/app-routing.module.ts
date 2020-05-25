import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes, Router } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ProductsViewComponent } from './products/products-view/products-view.component';
import { ProductsByCategoryComponent } from './products/products-by-category/products-by-category.component';

const routes: Routes = [
  { path: '', redirectTo: '/onama', pathMatch: 'full' },
  { path: 'onama', component: AboutComponent },
  { path: 'proizvodi/:category', component: ProductsByCategoryComponent },
  { path: 'proizvodi', component: ProductsViewComponent },
  { path: '**', redirectTo: '/onama', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
