import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserRole = new BehaviorSubject<string | null>(null);
  currentUserRole$ = this.currentUserRole.asObservable();

  constructor() {}

  login(credentials: {username: string, password: string}) {
    // Appel API pour authentification backend

    // Définir le rôle après login
    
    // this.currentUserRole.next(roleFromApi);
  }

  hasRole(requiredRole: string): boolean {
    return this.currentUserRole.value === requiredRole;
  }

  logout() {
    this.currentUserRole.next(null);
    // Logique de déconnexion
  }
}