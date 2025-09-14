import { Pag1 } from './pages/pag1/pag1';
import { Pag2 } from './pages/pag2/pag2';
import { Pag3 } from './pages/pag3/pag3';
import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: '/pag1', pathMatch: 'full' },
    { path: 'pag1', component: Pag1 },
    { path: 'pag2', component: Pag2 },
    { path: 'pag3', component: Pag3 },   
];
