import {Subject} from "rxjs";
import {Injectable} from "@angular/core";
import { User } from '../models/user.model';
import{HttpClient, HttpClientModule} from '@angular/common/http';

@Injectable()

export class AuthService {

  // Variables
  userSubject = new Subject<any[]>();
  isAuth = false;
  user: User[] = [];

  constructor(private httpClient: HttpClient){}

  // Récupération du login et mdp dans la BDD du serveur
  getUserInfo(login, mdp) {
    return new Promise((resolve, reject) => {
      this.httpClient.get<any>('https://webserv-gr3.sio-carriat.com/gsbapi/?login='+login).subscribe(
        authData => {
          if(authData[0] !== undefined)
          {
            // Vérification du login et du mdp
            if(login === authData[0].login && mdp === authData[0].mdp){
              this.user.push(authData[0]);
              this.isAuth = true;
              resolve(this.user[0]);
            }
            // Msg d'erreur si le login est incorrect -> à finir
            else{
              resolve("Login incorrect");
            }
          }
          // Msg d'erreur si le mdp est incorrect -> à finir
          else{
            resolve("Mdp incorrect");
          }
        });
      });
    }

  // Déconnexion
  signOut(){
    this.isAuth = false;
  }

  emitUserSuject(){
    this.userSubject.next(this.user.slice());
  }

}
