import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TCommitteeRoutingModule } from './t-committee-routing.module';
import { CommitteeDeleteComponent } from './pages/committee-delete/committee-delete.component';
import { CommitteeUpdateComponent } from './pages/committee-update/committee-update.component';
import { CommitteeCreateComponent } from './pages/committee-create/committee-create.component';
import { CommitteeReadComponent } from './pages/committee-read/committee-read.component';


@NgModule({
  declarations: [
    CommitteeDeleteComponent,
    CommitteeUpdateComponent,
    CommitteeCreateComponent,
    CommitteeReadComponent
  ],
  imports: [
    CommonModule,
    TCommitteeRoutingModule
  ]
})
export class TCommitteeModule { }
