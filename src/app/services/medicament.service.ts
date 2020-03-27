import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MedicamentService {

  medicSubject = new Subject<any[]>();
  private medicsList = [];

  constructor(private http: HttpClient) {}

  getAllMedic() {
    this.http.get<any[]>('https://webserv-gr3.sio-carriat.com/gsbapi/?nomMed=').subscribe(
      (response) => {
        this.medicsList = response;
        this.emitMedicSubject();
      }
    );
  }

  emitMedicSubject() { this.medicSubject.next(this.medicsList.slice()); }

}
