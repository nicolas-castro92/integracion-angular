import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IAreaRoutingModule } from './i-area-routing.module';
import { AreaCreateComponent } from './pages/area-create/area-create.component';
import { AreaDeleteComponent } from './pages/area-delete/area-delete.component';
import { AreaUpdateComponent } from './pages/area-update/area-update.component';
import { AreaReadComponent } from './pages/area-read/area-read.component';


@NgModule({
  declarations: [
    AreaCreateComponent,
    AreaDeleteComponent,
    AreaUpdateComponent,
    AreaReadComponent
  ],
  imports: [
    CommonModule,
    IAreaRoutingModule
  ]
})
export class IAreaModule { }
