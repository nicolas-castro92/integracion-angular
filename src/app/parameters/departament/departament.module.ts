import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartamentRoutingModule } from './departament-routing.module';
import { DepartamentReadComponent } from './pages/departament-read/departament-read.component';
import { DepartamentDeleteComponent } from './pages/departament-delete/departament-delete.component';
import { DepartamentCreateComponent } from './pages/departament-create/departament-create.component';
import { DepartamentUpdateComponent } from './pages/departament-update/departament-update.component';


@NgModule({
  declarations: [
    DepartamentReadComponent,
    DepartamentDeleteComponent,
    DepartamentCreateComponent,
    DepartamentUpdateComponent
  ],
  imports: [
    CommonModule,
    DepartamentRoutingModule
  ]
})
export class DepartamentModule { }
