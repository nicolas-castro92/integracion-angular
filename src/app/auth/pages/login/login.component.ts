import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

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

  login(){
    //console.log(this.miFormulario.value);
    const {usuario,clave} = this.miFormulario.value;

    this.authService.login( usuario, clave )
      .subscribe( okey => {
        console.log(okey);
        if(okey===true){
          this.router.navigateByUrl('/dashboard')
        }else{
          Swal.fire(
            'Error',
            okey,
            'error'
            /* {
            title: 'Error!',
            text: 'error',
            icon: 'error',
            confirmButtonText: 'Confirmar'
          } */)
        
        }
      })
  }

}
