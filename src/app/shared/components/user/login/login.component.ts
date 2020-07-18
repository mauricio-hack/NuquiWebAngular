import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth) {
    this.afAuth.user.subscribe((usuario) => {
      console.log(usuario);
    });
   }

  ngOnInit(): void {

  }

  login() {
    this.afAuth.auth.signInWithEmailAndPassword('mauricio.velez.osorno.14@gmail.com', 'anamauricio14');
  }
  logout() {
    this.afAuth.auth.signOut();
  }
  

}



// tslint:disable-next-line: typedef

// tslint:disable-next-line: typedef
