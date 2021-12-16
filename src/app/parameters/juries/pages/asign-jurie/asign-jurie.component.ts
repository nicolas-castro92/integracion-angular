import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { JurieService } from '../../services/jurie.service';
import { RequestService } from 'src/app/parameters/request/services/request.service';
import { Jurie } from '../../interfaces/jurie.interface';

@Component({
  selector: 'app-asign-jurie',
  templateUrl: './asign-jurie.component.html',
  styles: [
  ]
})
export class AsignJurieComponent implements OnInit {

  jurieee:Jurie[]=[];
  idRequest!:number;
  idJurie!:number;
  request!:Request;

  constructor( private fb: FormBuilder,
               private router: Router,
               private requestService: RequestService,
               private jurieService: JurieService,
               private activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap( ({id}) => this.requestService.getRequestById(id))
      )
      .subscribe( requests => {
        console.log('que me traes',requests);
        this.idRequest = requests.id;
      }),

      this.jurieService.getJurie()
      .subscribe( juries => {
        this.jurieee = juries;
      })
  }

  miFormulario: FormGroup = this.fb.group({
    jurie:[]
  });

  asignar(){
    const jurado = parseInt(this.miFormulario.value.jurie);
    console.log(jurado);
    console.log(this.idRequest);
    const formData = this.miFormulario.getRawValue();
    
    return this.jurieService.asignJurie({
      id_jurado: jurado,
      id_solicitud: this.idRequest,
      id_estado: 2
    })
    .subscribe( resp => {
      Swal.fire({
        icon: 'success',
        title: 'Good job!',
        text:'Jurie has been asigned',
        showConfirmButton: false,
        timer: 2000
      })
      this.router.navigateByUrl('/parameters/rquests/request-read')
    })
  }
  
  
}
