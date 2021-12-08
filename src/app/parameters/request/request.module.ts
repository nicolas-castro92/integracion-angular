import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestRoutingModule } from './request-routing.module';
import { RequestDeleteComponent } from './pages/request-delete/request-delete.component';
import { RequestCreateComponent } from './pages/request-create/request-create.component';
import { RequestUpdateComponent } from './pages/request-update/request-update.component';
import { RequestReadComponent } from './pages/request-read/request-read.component';


@NgModule({
  declarations: [
    RequestDeleteComponent,
    RequestCreateComponent,
    RequestUpdateComponent,
    RequestReadComponent
  ],
  imports: [
    CommonModule,
    RequestRoutingModule
  ]
})
export class RequestModule { }
