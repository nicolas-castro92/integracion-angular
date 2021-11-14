import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    usuario:['',[Validators.required]],
    clave: ['',[Validators.required]]
  });

  constructor( private fb: FormBuilder,
               private authService: AuthService) { }

  ngOnInit( ): void {
  }

  login(){
    console.log(this.miFormulario.value);
    const {usuario,clave} = this.miFormulario.value;

    this.authService.login( usuario, clave )
      .subscribe( resp => {
        console.log(resp);
      })

  }

}
