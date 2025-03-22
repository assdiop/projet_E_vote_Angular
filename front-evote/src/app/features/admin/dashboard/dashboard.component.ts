import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { style } from '@angular/animations';

@Component({
  selector: 'admin-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl:'./dashboard.component.html',
  styleUrls:['./dashboard.component.css']
    
})
export class DashboardComponent {}