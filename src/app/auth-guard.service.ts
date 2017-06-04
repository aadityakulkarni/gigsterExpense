import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {AuthService} from './auth/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authServ: AuthService, private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
            if (this.authServ.isAuthenticated()) {
              return true;
            } else {
              this.router.navigate(['/']);
            }
  }


}
