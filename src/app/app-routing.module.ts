import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutusComponent } from './aboutus/aboutus.component';

import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: '',
    component: AboutusComponent
  },
  {
    path: 'Home',
    component: HomeComponent
  },
  {
    path: 'Aboutus',
    component: AboutusComponent
  },
  {
    path: 'Simulatenow',
    component: HomeComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
