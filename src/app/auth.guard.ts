import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private authService: AuthService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if(localStorage.getItem("currentUser") != null){
            console.log(localStorage.getItem("currentUser"));
            return true;
        }
        else {
            this.router.navigate(["/login"]);
            console.log(localStorage.getItem("currentUser"));
            return false;
        }
    }
}