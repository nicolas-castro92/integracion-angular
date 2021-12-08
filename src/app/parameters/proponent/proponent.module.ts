import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProponentRoutingModule } from './proponent-routing.module';
import { ProponentReadComponent } from './pages/proponent-read/proponent-read.component';
import { ProponentCreateComponent } from './pages/proponent-create/proponent-create.component';
import { ProponentUpdateComponent } from './pages/proponent-update/proponent-update.component';
import { ProponentDeleteComponent } from './pages/proponent-delete/proponent-delete.component';


@NgModule({
  declarations: [
    ProponentReadComponent,
    ProponentCreateComponent,
    ProponentUpdateComponent,
    ProponentDeleteComponent
  ],
  imports: [
    CommonModule,
    ProponentRoutingModule
  ]
})
export class ProponentModule { }
