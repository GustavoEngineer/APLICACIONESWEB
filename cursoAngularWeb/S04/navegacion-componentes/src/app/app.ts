import { Component, OnInit, OnDestroy } from '@angular/core';

import { CommonModule } from '@angular/common';
import { DirectivaComponent } from './directiva/directiva';
import { DirectivaIncorporadaComponent } from './directiva-incorporada/directiva-incorporada';
import { HomeComponent } from './home/home.component';
import { MiBotonComponent } from './mi-boton/mi-boton';
import { NavigationService } from './navigation.service';
import { Subscription } from 'rxjs';
import { CardComponent } from './card/card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    DirectivaComponent,
    DirectivaIncorporadaComponent,
    HomeComponent,
    MiBotonComponent
    , CardComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit, OnDestroy {
  title = 'navegacion-componentes';
  selectedSection: string | null = null;
  private navSub?: Subscription;

  constructor(private nav: NavigationService) { }

  showSection(section: string) {
    this.selectedSection = this.selectedSection === section ? null : section;
  }

  ngOnInit(): void {
    // Subscribe to navigation requests coming from child components
    this.navSub = this.nav.section$.subscribe(section => {
      console.log('[App] NavigationService emitted ->', section);
      // open the requested section
      this.showSection(section);
    });
  }

  ngOnDestroy(): void {
    this.navSub?.unsubscribe();
  }
}
