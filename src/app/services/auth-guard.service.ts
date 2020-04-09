import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {AuthService} from "./auth.service";

@Injectable()

export class AuthGuard implements CanActivate{

  constructor(private authservice: AuthService,private route: Router){}

// Activation des routes si le visiteur est connecté
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> |
  boolean {
    if (this.authservice.isAuth){
      return true;
    }
    else {
      // si la connexion est réussie, le visiteur est redirigé sur la page d'accueil
      this.route.navigate(['/accueil']);
    }
  }
}
