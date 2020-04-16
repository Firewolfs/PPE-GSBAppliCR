import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'PPE-GSBAppliCR';
  show: boolean = false;

  constructor(private authService: AuthService,
              private route: Router) { }

  ngOnInit() {
    this.show = this.authService.isAuth ;
  }

  // Déconnexion, redirection vers la page connexion
  logout() {
    console.log('Tentative de déconnexion');

    localStorage.removeItem('user');
    this.route.navigate(['/connexion']);

  }
}
