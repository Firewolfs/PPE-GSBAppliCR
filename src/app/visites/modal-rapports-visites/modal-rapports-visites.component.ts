import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from "angular-bootstrap-md/angular-bootstrap-md";
import { FormGroup, FormBuilder } from '@angular/forms';
import { RapportsVisistesService } from "../../services/RapportsVisistesService";
import { MedicamentService } from "../../services/medicament.service";
import { MedecinService } from "../../services/medecin.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-modal-rapports-visites',
  templateUrl: './modal-rapports-visites.component.html',
  styleUrls: ['./modal-rapports-visites.component.css']
})
export class ModalRapportsVisitesComponent implements OnInit {

  @ViewChild('modalRapportsVisites') modalRapportsVisites: ModalDirective

  formRapport: FormGroup;

  medecinsSouscription: Subscription;
  listeMedecins: any[];

  medicamentsSouscription: Subscription;
  listeMedicaments: any[];
  medicamentsSelect: any[];


  constructor(private formBuilder: FormBuilder, private medicamentsService: MedicamentService, private medecinsService: MedecinService) { }

  ngOnInit(): void {
    
      this.formRapport = this.formBuilder.group
      (
        {
          dateVisite: '',
          medecin: '',
          motifVisite: '',
          bilan: '',
        }
      );

    this.medicamentsSouscription = this.medicamentsService.medicSubject.subscribe
    (
      (medicaments: any[]) => 
      {
      this.listeMedicaments = medicaments;
      }
    )

    this.medecinsSouscription = this.medecinsService.medecinSubject.subscribe
    (
      (medeciens: any[]) =>
      {
        this.listeMedecins = medeciens;
      }
    )

    this.medicamentsService.getAllMedic();
    this.medecinsService.getAllMedecin();

  }

  initForm(donnees?: any[])
  {

  }


  Ouvrir(donnees?: any[])
  {
    this.modalRapportsVisites.show();
  }

}
