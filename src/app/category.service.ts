import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Category } from './products/Categorty.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private afs: AngularFirestore) {}

  getCategories() {
    return this.afs
      .collection('categories')
      .snapshotChanges()
      .pipe(
        map((products) => {
          return products.map((p) => {
            const data = p.payload.doc.data() as Category;
            const id = p.payload.doc.id;
            return { id, ...data};
          });
        })
      );
  }
}
