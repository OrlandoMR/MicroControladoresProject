import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Item { name: string; }

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(public firestore: AngularFirestore,   private itemsCollection: AngularFirestoreCollection<Item>) { }

  public getPhotos(){
    this.itemsCollection = this.firestore.collection<Item>('Img');
    return this.itemsCollection.valueChanges();
  }
}
