import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/header/header.component';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { LayoutModule } from '@angular/cdk/layout';
import { ProductsViewComponent } from './products/products-view/products-view.component';
import { SingleProductComponent } from './products/single-product/single-product.component';
import { ProductsByCategoryComponent } from './products/products-by-category/products-by-category.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeSr from '@angular/common/locales/sr-Latn';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SortPipe } from './sort.pipe';
import { CartComponent } from './cart/cart.component';
registerLocaleData(localeSr);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    ProductsViewComponent,
    SingleProductComponent,
    ProductsByCategoryComponent,
    FilterPipe,
    HomeComponent,
    NotFoundComponent,
    SortPipe,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    LayoutModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'sr-Latn' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
