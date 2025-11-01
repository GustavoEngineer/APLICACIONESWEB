import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  primerNumero: number = 0;
  segundoNumero: number = 0;

  constructor(private router: Router) {}

  sumar() {
    this.router.navigate(['/suma', this.primerNumero, this.segundoNumero]);
  }
}
