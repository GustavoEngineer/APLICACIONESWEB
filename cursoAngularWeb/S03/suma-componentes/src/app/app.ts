import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SumaComponent } from './suma/suma.component'; // Import SumaComponent

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, SumaComponent], // Add SumaComponent to imports
  template: `
    <div class="calculator-container">
      <div class="calculator-display">{{ currentNumber }}</div>
      <div class="calculator-buttons">
        <button (click)="handleNumber('7')">7</button>
        <button (click)="handleNumber('8')">8</button>
        <button (click)="handleNumber('9')">9</button>
        <button (click)="handleOperator('/')">/</button>
        <button (click)="handleNumber('4')">4</button>
        <button (click)="handleNumber('5')">5</button>
        <button (click)="handleNumber('6')">6</button>
        <button (click)="handleOperator('*')">*</button>
        <button (click)="handleNumber('1')">1</button>
        <button (click)="handleNumber('2')">2</button>
        <button (click)="handleNumber('3')">3</button>
        <button (click)="handleOperator('-')">-</button>
        <button (click)="handleNumber('0')">0</button>
        <button (click)="handleDecimal()">.</button>
        <button (click)="clear()">C</button>
        <button (click)="handleOperator('+')">+</button>
        <button class="equals-button" (click)="calculateAndNavigate()">=</button>
      </div>
      <router-outlet />
    </div>
  `,
  styles: [`
    @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

    body {
      background-color: #E0E0E0; /* Light gray background for the body */
    }

    .calculator-container {
      width: 320px;
      margin: 50px auto;
      border: 2px solid #A0A0A0; /* Gray border */
      border-radius: 0;
      box-shadow: 4px 4px 0px #606060; /* Darker gray pixelated shadow */
      font-family: 'Press Start 2P', cursive, monospace;
      background-color: #C0C0C0; /* Lighter gray for calculator body */
      color: #303030;
    }
    .calculator-display {
      background-color: #FFFFFF;
      color: #303030; /* Dark gray for display text */
      font-size: 2em;
      padding: 15px;
      text-align: right;
      border-bottom: 2px solid #A0A0A0;
      border-radius: 0;
    }
    .calculator-buttons {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 10px; /* Increased gap for padding between buttons */
      background-color: #C0C0C0;
      padding: 10px; /* Increased padding for the container */
    }
    .calculator-buttons button {
      background-color: #E0E0E0; /* White for buttons */
      border: 2px solid #A0A0A0;
      border-radius: 50%; /* Make buttons circular */
      width: 60px; /* Fixed width for circular shape */
      height: 60px; /* Fixed height for circular shape */
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.2em;
      cursor: pointer;
      transition: background-color 0.1s, box-shadow 0.1s;
      color: #303030;
      box-shadow: 2px 2px 0px #A0A0A0;
    }
    .calculator-buttons button:hover {
      background-color: #F0F0F0; /* Lighter gray on hover */
      box-shadow: 3px 3px 0px #808080;
    }
    .calculator-buttons button:active {
      background-color: #D0D0D0; /* Even lighter gray on active */
      box-shadow: 1px 1px 0px #808080;
      transform: translate(1px, 1px);
    }
    .equals-button {
      grid-column: span 4;
      background-color: #AEC6CF !important; /* Pastel blue for equals button */
      color: #303030;
      border: 2px solid #80A0A8 !important;
      box-shadow: 2px 2px 0px #608088 !important;
    }
    .equals-button:hover {
      background-color: #BCCCDC !important;
      box-shadow: 3px 3px 0px #709098 !important;
    }
  `]
})
export class AppComponent {
  currentNumber: string = '0';
  firstOperand: number | null = null;
  operator: string | null = null;
  waitForSecondOperand: boolean = false;

  constructor(private router: Router) {}

  handleNumber(num: string) {
    if (this.waitForSecondOperand) {
      this.currentNumber = num;
      this.waitForSecondOperand = false;
    } else {
      this.currentNumber = this.currentNumber === '0' ? num : this.currentNumber + num;
    }
  }

  handleDecimal() {
    if (!this.currentNumber.includes('.')) {
      this.currentNumber += '.';
    }
  }

  clear() {
    this.currentNumber = '0';
    this.firstOperand = null;
    this.operator = null;
    this.waitForSecondOperand = false;
  }

  handleOperator(op: string) {
    if (this.firstOperand === null) {
      this.firstOperand = parseFloat(this.currentNumber);
    } else if (this.operator) {
      const result = this.performCalculation[this.operator](this.firstOperand, parseFloat(this.currentNumber));
      this.currentNumber = String(result);
      this.firstOperand = result;
    }
    this.operator = op;
    this.waitForSecondOperand = true;
  }

  performCalculation: { [key: string]: (a: number, b: number) => number } = {
    '/': (firstOperand, secondOperand) => firstOperand / secondOperand,
    '*': (firstOperand, secondOperand) => firstOperand * secondOperand,
    '+': (firstOperand, secondOperand) => firstOperand + secondOperand,
    '-': (firstOperand, secondOperand) => firstOperand - secondOperand,
  };

  calculateAndNavigate() {
    if (this.firstOperand !== null && this.operator !== null && !this.waitForSecondOperand) {
      const secondOperand = parseFloat(this.currentNumber);
      const result = this.performCalculation[this.operator](this.firstOperand, secondOperand);
      // For sum, we navigate to the suma component with the two operands
      if (this.operator === '+') {
        this.router.navigate(['/suma', this.firstOperand, secondOperand]);
      } else {
        // For other operations, just display the result for now or handle differently
        this.currentNumber = String(result);
        this.firstOperand = result;
        this.operator = null;
        this.waitForSecondOperand = false;
      }
    } else if (this.operator === '+' && this.firstOperand === null) {
      // If only one number is entered and then '=', treat it as the first number and 0 for the second
      this.router.navigate(['/suma', parseFloat(this.currentNumber), 0]);
    } else if (this.operator === '+' && this.firstOperand !== null && this.waitForSecondOperand) {
      // If an operator is pressed and then '=', treat the second operand as the first operand
      this.router.navigate(['/suma', this.firstOperand, this.firstOperand]);
    }
  }
}