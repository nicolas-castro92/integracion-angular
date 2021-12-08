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
      },
      {
        path:'faculties',
        loadChildren: () => import ('./faculty/faculty.module').then ( m => m.FacultyModule )
      },
      {
        path:'investigation',
        loadChildren: () => import ('./i-area/i-area.module').then ( m => m.IAreaModule )
      },
      {
        path:'modalities',
        loadChildren: () => import ('./modality/modality.module').then ( m => m.ModalityModule )
      },
      {
        path:'proponents',
        loadChildren: () => import ('./proponent/proponent.module').then ( m => m.ProponentModule )
      },
      {
        path:'requests',
        loadChildren: () => import ('./request/request.module').then ( m => m.RequestModule )
      }
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametersRoutingModule { }
