import { Component, OnInit } from '@angular/core';
import {MedicamentService} from '../services/medicament.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-medicaments',
  templateUrl: './medicaments.component.html',
  styleUrls: ['./medicaments.component.css']
})
export class MedicamentsComponent implements OnInit {

  title = 'Les Médicaments';

  medics: any[];
  medicSubscription: Subscription;

  constructor(private medicService: MedicamentService) {}

  ngOnInit(): void {
    this.medicService.getAllMedic();
    this.medicSubscription = this.medicService.medicSubject.subscribe(
      (medic: any[]) => {
        this.medics = medic;
      }
    );
    this.medicService.emitMedicSubject();
  }

}
