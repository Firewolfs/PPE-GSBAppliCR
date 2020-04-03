import { Injectable } from '@angular/core';
import {Subject, Subscription} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MedicamentService {

  medicSubject = new Subject<any[]>();
  private medicsList = [];

  famSubject = new Subject<any[]>();
  private family = [];
  private famille: string;

  constructor(private http: HttpClient) {}

  getAllMedic() {
    this.http.get<any[]>('https://webserv-gr3.sio-carriat.com/gsbapi/?nomMed=').subscribe(
      (response) => {
        this.medicsList = response;
        this.emitMedicSubject();
      }
    );
    console.log(this.medicsList);
  }

  searchMedic(ref: string) {
    this.http.get<any[]>('https://webserv-gr3.sio-carriat.com/gsbapi/?nomMed=' + ref).subscribe(
      (response) => {
        this.medicsList = response;
        this.emitMedicSubject();
      }
    );
  }

  emitMedicSubject() { this.medicSubject.next(this.medicsList.slice()); }

  emitFamSubject() { this.famSubject.next(this.family.slice()); }

}
