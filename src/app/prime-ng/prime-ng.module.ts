import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';

import {ButtonModule} from 'primeng/button';


// modulos

@NgModule({
  declarations: [],
  imports: [
    CommonModule
    
  ],
  exports:[
    // exportarlos
    MenubarModule,
    ButtonModule
    
  ]
})
export class PrimeNgModule { }
