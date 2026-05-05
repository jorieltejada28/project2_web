import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./pages/dashboard/dashboard.component')
      .then(m => m.DashboardComponent)
  },
  {
    path: 'signin',
    loadComponent: () => import('./pages/signin/signin.component')
    .then(m => m.SigninComponent)
  }
];
