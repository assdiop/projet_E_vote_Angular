import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../login.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // ou le fichier CSS lié
})
export class LoginComponent {
  selectedRole: string = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  onLogin() {
    switch(this.selectedRole) {
      case 'ADMIN':
        this.router.navigate(['/admin']);
        break;
      case 'SUPERVISEUR':
        this.router.navigate(['/superviseur']);
        break;
      case 'VOTER':
        this.router.navigate(['/voter']);
        break;
    }
  }
}

