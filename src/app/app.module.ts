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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    ProductsViewComponent,
    SingleProductComponent,
    ProductsByCategoryComponent,
    FilterPipe,
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
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
