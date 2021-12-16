import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { switchMap } from 'rxjs';
import * as cryptoJS from 'crypto-js';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styles: [
  ]
})
export class ChangePasswordComponent implements OnInit {

  idUser!:number

  constructor( private fb: FormBuilder,
               private userService: UserService,
               private router: Router,
               private activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap( ({id}) => this.userService.getUserById(id) )
      )
      .subscribe( usuario => {
        this.idUser = usuario.id
        //console.log('que voy a actualizar',usuario);
      })
  }

  miFormulario: FormGroup = this.fb.group({
    oldpass:['',[Validators.required, Validators.minLength(3)]],
    newpass:['',[Validators.required, Validators.minLength(3)]]
  })

  changePass(){
    
    let claveNueva = cryptoJS.MD5(this.miFormulario.get('newpass')?.value).toString();
    const claveVieja= cryptoJS.MD5(this.miFormulario.get('oldpass')?.value).toString();
    //console.log('oldpass',claveVieja,'nueva', claveNueva);
    this.userService.changePass(this.idUser,claveVieja,claveNueva,)
      .subscribe( resp =>{
        if(resp===true){
          Swal.fire({
            icon: 'success',
            title: 'Good job!',
            text:'new pass has been created',
            showConfirmButton: false,
            timer: 2000
          })
          setTimeout(() => {
            localStorage.clear();
          this.router.navigateByUrl('/auth')  
          }, 2000);
          
          
        }else{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Contraseña incorrecta'
          })
        }
      })
  }

}
