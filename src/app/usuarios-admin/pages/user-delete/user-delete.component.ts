import { Component, OnInit } from '@angular/core';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService, MessageService} from 'primeng/api';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styles: [
  ]
})
export class UserDeleteComponent implements OnInit {


  constructor( private confirmationService: ConfirmationService, 
               private messageService: MessageService ) { }

  ngOnInit() {
  }

  
}


