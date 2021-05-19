import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../shared/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
constructor (private router: Router, private tokenService: TokenStorageService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      //if (Boolean(localStorage.getItem('isConnected'))) {
      if (Boolean(this.tokenService.getToken())) {
        return true;
      } else {
        this.router.navigateByUrl('/auth');
        return false;
      }
    
  }
  
}
