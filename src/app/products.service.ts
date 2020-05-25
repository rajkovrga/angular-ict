import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Product } from './products/Product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private afs: AngularFirestore) {}

  getProducts(category) {
    return this.afs
      .collection('products', (ref) => ref.where('category', '==', category))
      .snapshotChanges()
      .pipe(
        map((products) => {
          return products.map((p) => {
            const data = p.payload.doc.data() as Product;
            const id = p.payload.doc.id;
            return { id, ...data, cart: true };
          });
        })
      );
  }
}
