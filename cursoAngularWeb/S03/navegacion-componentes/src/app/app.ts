import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { DirectivaComponent } from './directiva/directiva';
import { DirectivaIncorporadaComponent } from './directiva-incorporada/directiva-incorporada';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    DirectivaComponent,
    DirectivaIncorporadaComponent,
    HomeComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'navegacion-componentes';
  selectedSection: string | null = null;

  showSection(section: string) {
    this.selectedSection = this.selectedSection === section ? null : section;
  }
}
