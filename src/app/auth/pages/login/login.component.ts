import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  constructor( private fb: FormBuilder ) { }

  ngOnInit( ): void {
  }

  login(){
    console.log(this.miFormulario.value);
    console.log(this.miFormulario.valid);
  }

}
