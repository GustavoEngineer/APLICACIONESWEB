import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('app-ciudades');

  ciudades = [
    { pais: 'Japón', ciudad: 'Tokio', habitantes: 37435191 },
    { pais: 'India', ciudad: 'Delhi', habitantes: 29399141 },
    { pais: 'China', ciudad: 'Shanghái', habitantes: 26317104 },
    { pais: 'Brasil', ciudad: 'São Paulo', habitantes: 21846507 },
    { pais: 'México', ciudad: 'Ciudad de México', habitantes: 21671908 },
    { pais: 'Egipto', ciudad: 'El Cairo', habitantes: 20484965 }
  ];
}
