import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-suma',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './suma.component.html',
  styleUrls: ['./suma.component.css']
})
export class SumaComponent {
  primerNumero!: number;
  segundoNumero!: number;
  resultado!: number;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.primerNumero = Number(params['primerNumero']);
      this.segundoNumero = Number(params['segundoNumero']);
      this.resultado = this.primerNumero + this.segundoNumero;
    });
  }
}
