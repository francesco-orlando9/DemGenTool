import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: "", pathMatch: "full", loadComponent: () => import('./pages/home-page.component').then(c => c.HomePageComponent) },
  { path: "home", redirectTo: "" }
];
