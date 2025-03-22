import { Component } from '@angular/core';
import { LoginComponent } from './authentification/login/login.component';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <!-- Utilisation du RouterOutlet pour la navigation -->
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-evote';

  // Vous pouvez ajouter des méthodes ici si nécessaire
  constructor() {
    // Initialisation si nécessaire
  }
}