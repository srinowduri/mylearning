import { Component } from '@angular/core';

@Component({
  selector: 'app-multiplication',
  templateUrl: './multiplication.component.html',
  styleUrls: ['./multiplication.component.scss']
})
export class MultiplicationComponent {
  number1: number;
  number2: number;
  value;
  constructor() { }

  onMultiply() {
    const mul = this.number1 * this.number2;
    this.value = mul;
  }
}
