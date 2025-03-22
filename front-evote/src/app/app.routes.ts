
import { Routes } from '@angular/router';
import { authGuard } from './helpers/auth.guard';
import { rolesGuard } from './helpers/roles.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadComponent: () => import('./authentification/login/login.component').then(m => m.LoginComponent) },
  
  {
    path: 'admin',
    canActivate: [authGuard, rolesGuard],
    data: { role: 'ADMIN' },
    loadChildren: () => import('./features/admin/admin-routing.module').then(m => m.ADMIN_ROUTES)
  },
  
  {
    path: 'superviseur',
    canActivate: [authGuard, rolesGuard],
    data: { role: 'SUPERVISEUR' },
    loadChildren: () => import('./features/superviseur/superviseur-routing.module').then(m => m.SUPERVISEUR_ROUTES)
  },
  
  {
    path: 'voter',
    canActivate: [authGuard, rolesGuard],
    data: { role: 'VOTER' },
    loadChildren: () => import('./features/voter/vote/vote-routing.module').then(m => m.VoteRoutingModule)
  }
];