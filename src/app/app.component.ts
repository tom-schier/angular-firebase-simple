import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '../../node_modules/angularfire2/auth';
import { auth } from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  items: Observable<any[]>;
  _db: AngularFirestore
  constructor(db: AngularFirestore, public afAuth: AngularFireAuth) {
    this._db = db;
    this.items = db.collection('Locations').valueChanges();
  }

  getData(){
    this._db.collection("Locations").doc("02daaddb-23a6-433b-87fd-cc4b177a4278").valueChanges().subscribe(data => {
        console.log("Yeah then " + data);
    })
  }

  login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
  logout() {
    this.afAuth.auth.signOut();
  }
}
