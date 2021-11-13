import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.css']
})
export class ForgotPassComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    correo: ['',[Validators.required]]
  })

  constructor( private fb: FormBuilder ) { }

  ngOnInit(): void {
    
  }

  recuperarPass(){
    console.log(this.miFormulario.value);
  }

}
