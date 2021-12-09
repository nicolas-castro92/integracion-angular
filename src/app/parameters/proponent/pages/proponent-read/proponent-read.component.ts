import { Component, OnInit } from '@angular/core';
import { Proponent } from '../../interfaces/proponent.interface';
import { ProponentService } from '../../services/proponent.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proponent-read',
  templateUrl: './proponent-read.component.html',
  styles: [
  ]
})
export class ProponentReadComponent implements OnInit {

  proponent!: Proponent[];

  constructor( private proponentService: ProponentService,
               private router: Router ) { }

  ngOnInit(): void {
    this.getProponent();
  }

  getProponent (){
    this.proponentService.getProponent()
      .subscribe( proponents => {
        console.log(proponents);
        this.proponent = proponents
      } )
  }
 

}
