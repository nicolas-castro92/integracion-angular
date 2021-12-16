import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JurieService } from 'src/app/parameters/juries/services/jurie.service';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.css']
})
export class ForgotPassComponent implements OnInit {


  rol=['Jurie','Admin']

  miFormulario: FormGroup = this.fb.group({
    correo: ['',[Validators.required]],
    rol:['']
  })

  constructor( private fb: FormBuilder,
               private router: Router,
               private authService: AuthService,
               private jurieService: JurieService ) { }

  ngOnInit(): void {
    
  }

  recuperarPass(){
    const {correo} = this.miFormulario.value.correo;
    //console.log(this.miFormulario.value);
    const rol = this.miFormulario.value.rol;

    if(rol==='Admin'){
      this.authService.recuperarPass(correo)
      .subscribe( okey => {
        //console.log(okey); --> buscar el mensaje de error
        if(okey===true){
          Swal.fire({
            icon: 'success',
            title: 'Mensaje enviado correctamente',
            showConfirmButton: false,
            timer: 1500
          })
          setTimeout(() => {
            this.router.navigateByUrl('/auth');
          }, 1500);
        }else{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${okey}`
          })
        }
      })
    }else{
      this.jurieService.recuperarPass(correo)
      .subscribe( okey => {
        //console.log(okey); --> buscar el mensaje de error
        if(okey===true){
          Swal.fire({
            icon: 'success',
            title: 'Mensaje enviado correctamente',
            showConfirmButton: false,
            timer: 1500
          })
          setTimeout(() => {
            this.router.navigateByUrl('/auth');
          }, 1500);
        }else{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${okey}`
          })
        }
      })
    }
    
  }


}
