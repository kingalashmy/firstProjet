import { Routes } from '@angular/router';
import { Interface } from 'node:readline/promises';
import { InterfaceComponent } from './interface/interface.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

export const routes: Routes = [

  {
    path: '',
    component:InterfaceComponent
  },

  // login page 

  {
    path: 'login',
    component:LoginComponent
  },

  // signup page 

  {
    path: 'signup',
    component:SignupComponent
  },

];
