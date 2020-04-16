import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User } from "../models/user.model";

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})

export class ConnexionComponent implements OnInit {

  // Variables
  loginForm: FormGroup;
  private user: User[];
  isAuth: boolean;
  erreur;
  authStatus: boolean;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private route: Router){}


  ngOnInit(){
    this.initForm();
  }

  initForm(){
    this.loginForm = this.formBuilder.group({
      login: ['', Validators.required],
      mdp: ['', Validators.required],
    });
  }

  onSignIn(){
    const formValue = this.loginForm.value;
    this.authService.getUserInfo(formValue.login, formValue.mdp).then(user =>{
      this.erreur = user;
      console.log('login ='+ user);
      this.isAuth = this.authService.isAuth;
      this.route.navigate(['accueil']);
    });
  }

  onSignOut() {
    this.authService.signOut();
    this.authStatus = this.authService.isAuth;
  }
}
