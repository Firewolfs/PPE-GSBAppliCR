import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RapportsVisistesService
{
    private rapportsVisites: any[];
    rapportsSubject = new Subject<any[]>();

    constructor(private httpClient: HttpClient) { }

    emitRapportsSubject() 
    {
        this.rapportsSubject.next(this.rapportsVisites.slice());
    }

    getRapportsVisites(idVisiteur : String) {
        this.httpClient
          .get<any[]>('https://webserv-gr3.sio-carriat.com/gsbapi/?id5=' + idVisiteur)
          .subscribe
          (
            (response) => 
            {
              this.rapportsVisites = response;
              this.emitRapportsSubject();
            },
            (error) => 
            {
              console.log('Erreur ! : ' + error);
            }
          );
    }
}