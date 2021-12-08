import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TRequestRoutingModule } from './t-request-routing.module';
import { TRequestReadComponent } from './pages/trequest-read/trequest-read.component';
import { TRequestUpdateComponent } from './pages/trequest-update/trequest-update.component';
import { TRequestDeleteComponent } from './pages/trequest-delete/trequest-delete.component';
import { TRequestCreateComponent } from './pages/trequest-create/trequest-create.component';


@NgModule({
  declarations: [
    TRequestReadComponent,
    TRequestUpdateComponent,
    TRequestDeleteComponent,
    TRequestCreateComponent
  ],
  imports: [
    CommonModule,
    TRequestRoutingModule
  ]
})
export class TRequestModule { }
