import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/user.interface';
import { UserService } from '../../services/user.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-read',
  templateUrl: './user-read.component.html',
  styles: [
  ]
})
export class UserReadComponent implements OnInit {

  user!: User[];

  constructor( private userService: UserService,
               private router: Router ) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser (){
    this.userService.getUser()
      .subscribe( usuarios => {
        console.log(usuarios);
        this.user = usuarios
      } )
  }
 

}
