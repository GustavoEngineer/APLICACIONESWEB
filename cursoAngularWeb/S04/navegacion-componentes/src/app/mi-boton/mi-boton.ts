import { Component, Input, OnChanges, SimpleChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavigationService } from '../navigation.service';

@Component({
  selector: 'app-mi-boton',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './mi-boton.html',
  styleUrls: ['./mi-boton.css']
})
export class MiBotonComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() inputMensaje: string = '';
  @Input() inputRuta: string = '';
  @Input() inputSection?: string; // optional: if provided, opening will trigger the UI section instead of routing

  constructor(private nav: NavigationService) { }

  // Ciclo de vida: ngOnChanges
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['inputMensaje']) {
      console.log('Se cambió el mensaje de entrada:', this.inputMensaje);
    }
    if (changes['inputRuta']) {
      console.log('Se cambió la ruta de entrada:', this.inputRuta);
    }
  }

  // Ciclo de vida: ngOnInit
  ngOnInit(): void {
    console.log('El componente se ha inicializado.');
  }

  // Ciclo de vida: ngDoCheck
  ngDoCheck(): void {
    console.log('El ciclo de detección de cambios personalizado se ejecutó.');
  }

  // Ciclo de vida: ngAfterContentInit
  ngAfterContentInit(): void {
    console.log('El contenido proyectado se ha inicializado.');
  }

  // Ciclo de vida: ngAfterContentChecked
  ngAfterContentChecked(): void {
    console.log('El contenido proyectado se ha revisado para cambios.');
  }

  // Ciclo de vida: ngAfterViewInit
  ngAfterViewInit(): void {
    console.log('La vista del componente se ha inicializado.');
  }

  // Ciclo de vida: ngAfterViewChecked
  ngAfterViewChecked(): void {
    console.log('La vista del componente se ha revisado para cambios.');
  }

  // Ciclo de vida: ngOnDestroy
  ngOnDestroy(): void {
    console.log('El componente está siendo destruido. Realizando limpieza.');
    // Realizar aquí la limpieza necesaria, como cancelar suscripciones.
  }

  onClick(event: Event) {
    // If an inputSection is provided, we open the UI section instead of letting routerLink navigate
    if (this.inputSection) {
      console.log('[MiBotonComponent] onClick, inputSection=', this.inputSection);
      event.preventDefault();
      this.nav.openSection(this.inputSection);
    }
  }

}
