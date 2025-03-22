import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const VOTE_ROUTES: Routes = [
  {
  path:'',
  loadComponent:() => import('../dashboard/dashboard.component').then(m => m.DashboardComponent),
  children:[
    {
    path:'ouvert-elections',
    loadComponent:() => import('../ouvert-elections/ouvert-elections.component').then(m => m.OuvertElectionsComponent),
  }
  ],

}
];

@NgModule({
  imports: [RouterModule.forChild(VOTE_ROUTES)],
  exports: [RouterModule]
})
export class VoteRoutingModule { }


// export const SUPERVISEUR_ROUTES: Routes = [
//   {
//     path: '',
//     loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent),
//     children: [
//       {
//         path: 'monitor',
//         loadComponent: () => import('./gestion-elections/gestion-elections.component').then(m => m.GestionElectionsComponent)
//       },
//       // Autres routes enfants ici
//     ]
//   }
// ];

// @NgModule({
//   imports: [RouterModule.forChild(SUPERVISEUR_ROUTES)],
//   exports: [RouterModule]
// })
export class SuperviseurRoutingModule { }