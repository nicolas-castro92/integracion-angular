import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../protected/dashboard/dashboard.component';

const routes: Routes = [
  {
    path:'',
    component:DashboardComponent,
    children:[
      {
        path:'juries',
        loadChildren: () => import ('./juries/juries.module').then ( m=> m.JuriesModule )
      },
      {
        path:'departaments',
        loadChildren: () => import ('./departament/departament.module').then ( m => m.DepartamentModule )
      }
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametersRoutingModule { }
