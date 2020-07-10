import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {AboutusComponent} from './aboutus/aboutus.component';

const routes: Routes = [
  { path: 'company1', redirectTo: 'company1/home' },
  { path: 'company1/home', component: HomeComponent },
  { path: 'company1/aboutus', component:  AboutusComponent},


 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
