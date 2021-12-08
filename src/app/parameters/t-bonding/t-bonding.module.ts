import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TBondingRoutingModule } from './t-bonding-routing.module';
import { BondingReadComponent } from './pages/bonding-read/bonding-read.component';
import { BondingCreateComponent } from './pages/bonding-create/bonding-create.component';
import { BondingUpdateComponent } from './pages/bonding-update/bonding-update.component';
import { BondingDeleteComponent } from './pages/bonding-delete/bonding-delete.component';


@NgModule({
  declarations: [
    BondingReadComponent,
    BondingCreateComponent,
    BondingUpdateComponent,
    BondingDeleteComponent
  ],
  imports: [
    CommonModule,
    TBondingRoutingModule
  ]
})
export class TBondingModule { }
