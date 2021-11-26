import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit {

  constructor( private router: Router,
               private authService: AuthService ) { }
  
  items: MenuItem[] = [];

  ngOnInit( ): void {
 
  }

  logout() {
    
    this.router.navigateByUrl('/auth')
    this.authService.logout();
  }

}
