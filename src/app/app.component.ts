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

  constructor(public afAuth: AngularFireAuth) {
    this.afAuth.user.subscribe((usuario) => {
      console.log(usuario);
    });

  }

  // tslint:disable-next-line: typedef
  login() {
    this.afAuth.auth.signInWithEmailAndPassword('mauricio.velez.osorno.14@gmail.com', 'anamauricio14');
  }
  // tslint:disable-next-line: typedef
  logout() {
    this.afAuth.auth.signOut();
  }

}
