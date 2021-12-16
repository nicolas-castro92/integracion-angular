import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Request, solicitudxr } from '../../interfaces/request.interface';
import { RequestService } from '../../services/request.service';

@Component({
  selector: 'app-request-read',
  templateUrl: './request-read.component.html',
  styles: [
  ]
})
export class RequestReadComponent implements OnInit {

  request!: Request[]
  requestt!: solicitudxr[];

  constructor( private requestService: RequestService,
               private router: Router ) { }

  ngOnInit(): void {
    this.getRequest()
  }

  getRequest (){
    this.requestService.getRequest()
      .subscribe( requests => {
        this.request = requests
        console.log(this.request);
      })
  }

  getDos(){
    this.requestService.requestDos()
      .subscribe(resp => {
        this.requestt = resp;
        console.log('que veo',resp);
      })
  }

}
