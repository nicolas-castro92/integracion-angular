import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
import * as cryptoJS from 'crypto-js';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    usuario:['nicolas.1701322569@ucaldas.edu.co',[Validators.required]],
    clave: ['12',[Validators.required]]
  });

  constructor( private fb: FormBuilder,
               private authService: AuthService,
               private router: Router) { }

  ngOnInit( ): void {
  }

  get rol(){
    let resultado;
    return resultado = this.authService.idRol;
  }

  login(){
    
    // //console.log(this.miFormulario.value);
    // let clave = cryptoJS.MD5(this.miFormulario.get('clave')?.value).toString();
    // //const {usuario, clave} = this.miFormulario.value;
    // const usuario = this.miFormulario.get('usuario')?.value;
    // //console.log('login user',usuario);
    // //console.log('login pass',clave);
    // //console.log(cryptoJS.MD5('hola').toString());;
    // this.authService.login( usuario, clave)
    //   .subscribe( okey => {
    //     //console.log('aqui hay un error',okey);
    //     if(okey===true){
    //       this.router.navigateByUrl('/dashboard')
    //     }else{
    //       Swal.fire(
    //         'Error',
    //         okey,
    //         'error'
    //         /* {
    //         title: 'Error!',
    //         text: 'error',
    //         icon: 'error',
    //         confirmButtonText: 'Confirmar'
    //       } */)
        
    //     }
    //   })
    this.authService.validarToken(this.rol);

  }

}
