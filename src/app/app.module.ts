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
    MedicamentsListComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [
    MedicamentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
