import { Component } from '@angular/core';

@Component({
  selector: 'app-division',
  templateUrl: './division.component.html',
  styleUrls: ['./division.component.scss']
})
export class DivisionComponent {
  number1: number;
  number2: number;
  value;
  constructor() { }

  onDivide() {
    const div = this.number1 / this.number2;
    
      this.value = div;
  }
}
