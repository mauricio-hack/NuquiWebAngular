import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formulariologin: FormGroup;
  datosCorrectos: boolean = true;
  textoError: string = '';

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
    if (this.formulariologin.valid){
      this.datosCorrectos = true;
      this.afAuth.auth.signInWithEmailAndPassword(this.formulariologin.value.email, this.formulariologin.value.password).then((usuario) => {
        console.log(usuario);
      }).catch((error) => {
        this.datosCorrectos = false;
        this.textoError = error.message;
      });
    }else{
      this.datosCorrectos = false;
      this.textoError = 'Por favor resivar que los datos estan correctos';
    }

  }

}
