import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Company1SharedModule } from 'projects/company1/src/app/app.module';
import { Company2SharedModule } from 'projects/company2/src/app/app.module';


const routes: Routes = [
  {
    path: 'company1',
    loadChildren: () => import('../../projects/company1/src/app/app.module').then(m => m.Company1SharedModule)
  },
  {
    path: 'company2',
    loadChildren: () => import('../../projects/company2/src/app/app.module').then(n => n.Company2SharedModule)
  },
  {
    path: '',
    redirectTo: '/company1/home',
    pathMatch: 'full'
  },
  // { path: '**', redirectTo: '/company1'}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    Company1SharedModule.forRoot(),
    Company2SharedModule.forRoot()],
  exports: [RouterModule]
})
export class AppRoutingModule { }
