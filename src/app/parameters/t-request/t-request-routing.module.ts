import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TRequestCreateComponent } from './pages/trequest-create/trequest-create.component';
import { TRequestReadComponent } from './pages/trequest-read/trequest-read.component';
import { TRequestUpdateComponent } from './pages/trequest-update/trequest-update.component';
import { TRequestDeleteComponent } from './pages/trequest-delete/trequest-delete.component';

const routes: Routes = [
  {
    path:'',
    children:[
      { path:'t-request-create', component: TRequestCreateComponent },
      { path:'t-request-read', component: TRequestReadComponent },
      { path:'t-request-update/:id', component: TRequestUpdateComponent },
      { path:'t-request-delete/:id', component: TRequestDeleteComponent },
      { path:'**', redirectTo:'t-request-read' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TRequestRoutingModule { }
