import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { fromEvent, of, Subject} from 'rxjs';
import {tap, map} from 'rxjs/operators';


@Injectable()
export class ApiService {
  private urlApi = 'https://webserv-gr3.sio-carriat.com/gsbapi/';
  // Constructeur
  constructor(private httpClient: HttpClient) {}
}
