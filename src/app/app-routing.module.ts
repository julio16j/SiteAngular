import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { WedoComponent } from './wedo/wedo.component';
import { WedidComponent } from './wedid/wedid.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'Home',
    component: HomeComponent
  },
  {
    path:'Aboutus',
    component: AboutusComponent
  },
  {
    path:'Wedo',
    component: WedoComponent
  },
  {
    path:'Wedid',
    component: WedidComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
