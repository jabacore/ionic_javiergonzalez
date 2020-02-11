import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class SpotcrudService {

  constructor(private firestore: AngularFirestore) { }


  create_Spot(record) {
    return this.firestore.collection('spots').add(record);
  }

  

  get_Spot(recordID){
    return this.firestore.collection('spots/'+recordID).snapshotChanges();
  }

  read_Spots() {
    return this.firestore.collection('spots').snapshotChanges();
  }

  update_Spot(recordID, record) {
    this.firestore.doc('spots/' + recordID).update(record);
  }

  delete_Spot(record_id) {
    this.firestore.doc('spots/' + record_id).delete();
  }

}
