import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { FormGroup, FormBuilder } from '@angular/forms';
import { User } from '../../interfaces/user.interface';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styles: [
  ]
})
export class UserCreateComponent implements OnInit {

  
  user!: User;
  constructor(private fb: FormBuilder,
              private userService: UserService
             ) { }

  ngOnInit(): void {
  }

  miFormulario: FormGroup = this.fb.group({
    nombre: [],
    apellido: [],
    correo: [],
    celular: [],

  })

  createUser() {
    console.log(this.miFormulario.value);
    const {nombre, apellido, correo, celular} = this.miFormulario.value;
    this.userService.createUser(nombre, apellido, correo, celular )
      .subscribe(resp => {
        this.user = resp;
          
      })
        
  }

}
