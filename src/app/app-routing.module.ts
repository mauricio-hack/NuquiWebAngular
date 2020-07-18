import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './shared/components/user/register/register.component';
import { LoginComponent } from './shared/components/user/login/login.component';

const routes: Routes = [
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: '', component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
