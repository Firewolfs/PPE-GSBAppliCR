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
import {HttpClientModule} from '@angular/common/http';
import { MedicamentsListComponent } from './medicaments-list/medicaments-list.component';
import {MedicamentService} from './services/medicament.service';
import { MedecinsListComponent } from './medecins-list/medecins-list.component';
import {MedecinService} from './services/medecin.service';

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
    MedicamentsListComponent,
    MedecinsListComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [
    MedicamentService,
    MedecinService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
