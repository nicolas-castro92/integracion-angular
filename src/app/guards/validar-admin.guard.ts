import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ValidarAdminGuard implements CanActivate {

  constructor(private authService: AuthService,
              private router: Router){}

  canActivate(): boolean {
    const rol: number | undefined = this.authService.usuario.data?.rol
    if(rol==2){
      console.log('si paso',rol);
      return true;
    }else{
      console.log('no paso',rol);
      this.router.navigateByUrl('/dashboard')
      return false;
    }

  }
  
}
