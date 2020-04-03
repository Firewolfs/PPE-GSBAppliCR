import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md';

import { Routes, RouterModule } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { MedicamentsComponent } from './medicaments/medicaments.component';
import { MedecinsComponent } from './medecins/medecins.component';
import { VisitesComponent } from './visites/visites.component';
import { AccueilComponent } from './accueil/accueil.component';
<<<<<<< HEAD
import { TableRapportsVisitesComponent } from './visites/table-rapports-visites/table-rapports-visites.component';

import { RapportsVisistesService } from './services/RapportsVisistesService';
=======
import {HttpClientModule} from '@angular/common/http';
import { MedicamentsListComponent } from './medicaments-list/medicaments-list.component';
import {MedicamentService} from './services/medicament.service';
import { MedecinsListComponent } from './medecins-list/medecins-list.component';
import {MedecinService} from './services/medecin.service';
import {FormsModule} from '@angular/forms';
>>>>>>> c853f0df07fc8f2237d764888c22366569408e44

const appRoutes: Routes = [
  { path: 'connexion', component: ConnexionComponent},
  { path: 'accueil', component: AccueilComponent},
  { path: 'medicaments', component: MedicamentsComponent},
  { path: 'medecins', component: MedecinsComponent},
  { path: 'visites', component: VisitesComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    MedicamentsComponent,
    MedecinsComponent,
    VisitesComponent,
    AccueilComponent,
<<<<<<< HEAD
    TableRapportsVisitesComponent
=======
    MedicamentsListComponent,
    MedecinsListComponent
>>>>>>> c853f0df07fc8f2237d764888c22366569408e44
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
<<<<<<< HEAD
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    RapportsVisistesService
  ],
=======
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [
    MedicamentService,
    MedecinService
  ],
>>>>>>> c853f0df07fc8f2237d764888c22366569408e44
  bootstrap: [AppComponent]
})
export class AppModule { }
