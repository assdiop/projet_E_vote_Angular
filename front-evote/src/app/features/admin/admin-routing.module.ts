import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Définir les routes admin
export const ADMIN_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent),
    children: [
      {
        path: 'elections',
        loadComponent: () => import('./gestion-elections/gestion-elections.component').then(m => m.GestionElectionsComponent),

      },
     
        {
          path: 'gestion-users',
          loadComponent: () => import('./gestion-users/gestion-users.component').then(m => m.GestionUsersComponent)
        
        }
      
    ]

    
      // Autres routes enfants ici
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(ADMIN_ROUTES)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }