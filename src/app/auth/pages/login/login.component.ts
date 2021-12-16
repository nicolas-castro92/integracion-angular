import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
import * as cryptoJS from 'crypto-js';
import { LocalStorageService } from '../../../services/local-storage.service';
import { JurieService } from 'src/app/parameters/juries/services/jurie.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  rol=['Jurie','Admin']

  miFormulario: FormGroup = this.fb.group({
    usuario:['nicolas.1701322569@ucaldas.edu.co',[Validators.required]],
    clave: ['3YGj1yHz3i',[Validators.required]],
    rol: ['',[Validators.required]]
  });

  constructor( private fb: FormBuilder,
               private authService: AuthService,
               private router: Router,
               private localStorageService : LocalStorageService,
               private jurieService: JurieService) { }

  ngOnInit( ): void {
  }


  login(){

 
    let clave = cryptoJS.MD5(this.miFormulario.get('clave')?.value).toString();
    const usuario = this.miFormulario.get('usuario')?.value;
    const rol = this.miFormulario.value.rol;

    if(rol==='Admin'){
      console.log(usuario,clave);
      this.authService.login( usuario, clave)
      .subscribe( okey => {
        //console.log('aqui hay un error',okey);
        // undefined let saved = this.localStorageService.saveSessionData(okey)
        //console.log('antes',okey);
        if(okey===true){
          //console.log('despues de okey ',okey);
          this.router.navigateByUrl('/dashboard')
        }else{
          Swal.fire(
            'Error',
            okey,
            'error'
          )
        }
      })
    }else{
      console.log(usuario, clave);
      this.jurieService.login(usuario,clave)
      .subscribe( okey => {
        //console.log('aqui hay un error',okey);
        // undefined let saved = this.localStorageService.saveSessionData(okey)
        //console.log('antes',okey);
        if(okey===true){
          //console.log('despues de okey ',okey);
          this.router.navigateByUrl('/dashboard')
        }else{
          Swal.fire(
            'Error',
            okey,
            'error'
          )
        }
      })
    }
    




    
    //console.log(this.miFormulario.value);
    //const {usuario, clave} = this.miFormulario.value;
    //console.log('login user',usuario);
    //console.log('login pass',clave);
    //console.log(cryptoJS.MD5('hola').toString());;
    

  }

}
