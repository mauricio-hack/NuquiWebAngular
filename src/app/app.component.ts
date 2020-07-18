import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'projectNuquiweb';

  constructor(public afAuth: AngularFireAuth){ }

  // tslint:disable-next-line: typedef
  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  // tslint:disable-next-line: typedef
  logout() {
    this.afAuth.auth.signOut();
  }

}
