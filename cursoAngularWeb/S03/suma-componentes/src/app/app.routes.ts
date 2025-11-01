import { Routes } from '@angular/router';
import { SumaComponent } from './suma/suma.component';

export const routes: Routes = [
  { path: 'suma/:primerNumero/:segundoNumero', component: SumaComponent },
  { path: '**', redirectTo: 'suma/0/0' } // opcional: ruta por defecto
];
