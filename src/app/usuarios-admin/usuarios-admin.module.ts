import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosAdminRoutingModule } from './usuarios-admin-routing.module';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { UserCreateComponent } from './pages/user-create/user-create.component';
import { UserUpdateComponent } from './pages/user-update/user-update.component';
import { UserDeleteComponent } from './pages/user-delete/user-delete.component';
import { UserReadComponent } from './pages/user-read/user-read.component';


@NgModule({
  declarations: [
    ChangePasswordComponent,
    UserCreateComponent,
    UserUpdateComponent,
    UserDeleteComponent,
    UserReadComponent
  ],
  imports: [
    CommonModule,
    UsuariosAdminRoutingModule
  ],
  exports:[
    ChangePasswordComponent
  ]
})
export class UsuariosAdminModule { }
