import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formulariologin: FormGroup

  constructor(private creadorFormulario: FormBuilder,public afAuth: AngularFireAuth) { }

  ngOnInit(): void {
    this.formulariologin = this.creadorFormulario.group({
      email: ['', Validators.compose([
        Validators.required, Validators.email
      ])],
      password: [ '', Validators.required]
    });
  }
 
  LogIn(){
    this.afAuth.auth.signInWithEmailAndPassword(this.formulariologin.value.email, this.formulariologin.value.password).then((usuario) => {
      console.log(usuario);
    });
  }

}
