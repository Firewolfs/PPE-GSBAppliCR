import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { User } from '../models/user.model';

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



  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private route: Router) {}


  ngOnInit() {
    this.init();
  }

  init() {
    this.loginForm = this.formBuilder.group({
      login: ['', Validators.required],
      mdp: ['', Validators.required],
    });
  }

  onSubmit() {
    const formValue = this.loginForm.value;

    this.authService.getUserInfo(formValue.login, formValue.mdp).then(user => {
      console.log('login =' + user);
      this.isAuth = this.authService.isAuth;
      this.route.navigate(['accueil']);
    });
  }
}
