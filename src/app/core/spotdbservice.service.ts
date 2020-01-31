import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ISpot } from '../shared/spot';
@Injectable({
  providedIn: 'root'
})
export class SpotdbService {
  auxSpot: ISpot;
  auxSpotList: ISpot[] = [];
  constructor(private storage: Storage) { }
  // Stores a value
  setItem(reference: string, value: ISpot) {
    this.storage.set(reference, {
      id: value.id, title: value.title, description:
      value.description , image: value.image, 
    })
      .then(
        (data) => console.log('Stored first item!', data),
        error => console.error('Error storing item', error)
      );
  }
  // Gets a stored item
  getItem(reference): Promise<ISpot> {
    return this.storage.get(reference);
  }
  // check if it is empty
  empty() {
    return this.storage.keys()
      .then(
        (data) => { return true },
        error => { return false }
      );
  }
  // Retrieving all keys
  keys(): Promise<string[]> {
    return this.storage.keys();
  }
  // Retrieving all values
  getAll(): Promise<ISpot[]> {
    return this.storage.keys().then((k) => {
      k.forEach(element => {
        this.getItem(element).then(
          (data: ISpot) => this.auxSpotList.push(data)
        );
      });
      return this.auxSpotList;
    });
  }
  // Removes a single stored item
  remove(reference: string) {
    this.storage.remove(reference)
      .then(
        data => console.log(data),
        error => console.error(error)
      );
  }
  // Removes all stored values.
  clear() {
    this.storage.clear()
      .then(
        data => console.log(data),
        error => console.error(error)
      );
  }
}