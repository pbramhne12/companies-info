import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {AboutusComponent} from './aboutus/aboutus.component';

const routes: Routes = [
  { path: 'company2', redirectTo: 'company2/home' },
  { path: 'company2/home', component: HomeComponent },
  { path: 'company2/aboutus', component:  AboutusComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
