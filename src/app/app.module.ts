import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AngularFireAuth } from 'angularfire2/auth';

import { ListaServiciosComponent } from './shared/components/admin/lista-servicios/lista-servicios.component';
import { DetailServicioComponent } from './shared/components/detail-servicio/detail-servicio.component';
import { HomeComponent } from './shared/components/home/home.component';
import { LoginComponent } from './shared/components/user/login/login.component';
import { ProfileComponent } from './shared/components/user/profile/profile.component';
import { RegisterComponent } from './shared/components/user/register/register.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListaServiciosComponent,
    DetailServicioComponent,
    HomeComponent,
    ProfileComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    ReactiveFormsModule
  ],
  providers: [
    AngularFireAuth
  ],
  bootstrap: [AppComponent],
 
})
export class AppModule { }
