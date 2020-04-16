import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Subject } from 'rxjs';


@Injectable()
export class AuthService{

  // Variables
  userSubject = new Subject<any[]>();
  isAuth = false;
  user: User[] = [];

  constructor(private httpClient: HttpClient){}

  // Récupération du login et mdp dans l'API
  getUserInfo(login, mdp) {
    return new Promise((resolve, reject) => {
      this.httpClient.get<any>('https://webserv-gr3.sio-carriat.com/gsbapi/?login='+login).subscribe(
        authData => {
          // authData est à 0 si l'utilisateur est reconnu
          if(authData[0] !== undefined)
          {
            // Comparaison des données de l'API et du form de connexion
            if(login === authData[0].login && mdp === authData[0].mdp){
              this.user.push(authData[0]);
              this.isAuth = true;
              resolve(this.user[0]);
            }
            // Si le login est bon mais pas le mdp on affiche un msg d'erreur
            else{
              resolve("Erreur de mot de passe");
            }
          }
          // Si le login n'est pas bon, on affiche un msg d'erreur
          else{
            resolve("Erreur de login");
          }
        });
      });
    }

    signOut() {
      this.isAuth = false;
    }

  emitUserSuject(){
    this.userSubject.next(this.user.slice());
}
}
