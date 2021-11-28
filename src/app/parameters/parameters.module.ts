import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametersRoutingModule } from './parameters-routing.module';
import { AreaCreateComponent } from './area-de-investigacion/pages/area-create/area-create.component';
import { AreaUpdateComponent } from './area-de-investigacion/pages/area-update/area-update.component';
import { AreaDeleteComponent } from './area-de-investigacion/pages/area-delete/area-delete.component';
import { AreaReadComponent } from './area-de-investigacion/pages/area-read/area-read.component';


@NgModule({
  declarations: [
  
    AreaCreateComponent,
       AreaUpdateComponent,
       AreaDeleteComponent,
       AreaReadComponent
  ],
  imports: [
    CommonModule,
    ParametersRoutingModule
  ]
})
export class ParametersModule { }
