import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-superviseur-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl:'./dashboard.component.html',
  styleUrl:'./dashboard.component.html'
    
})
export class DashboardComponent {}