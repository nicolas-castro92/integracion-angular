import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { switchMap } from "rxjs/operators";
import { FormBuilder, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styles: [
  ]
})
export class UserUpdateComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    id:[],
    nombre: [],
    apellido: [],
    correo: [],
    celular: [],
    estado: []
  })

  constructor( private userService: UserService,
               private activatedRoute: ActivatedRoute,
               private fb: FormBuilder,
               private router: Router ) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap( ({id}) => this.userService.getUserById(id) )
      )
      .subscribe( usuario => {
        this.miFormulario.setValue(usuario)
        console.log('actualizo',usuario);} )

  }

  updateUser(){
    const user = this.miFormulario.value;
    console.log('user',user);
    this.userService.updateUser(user)
      .subscribe( usuario => {
        Swal.fire({
          icon: 'success',
          title: 'Good job!',
          text:'Updating..',
          showConfirmButton: false,
          timer: 1400
        })
        setTimeout(() => {
          this.router.navigateByUrl('/usuarios/user-read');
        }, 1500);
      } )
  }

}
