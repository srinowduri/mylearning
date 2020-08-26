import { Component } from '@angular/core';

@Component({
  selector: 'app-substraction',
  templateUrl: './substraction.component.html',
  styleUrls: ['./substraction.component.scss']
})
export class SubstractionComponent {
  value;
  number1: number;
  number2: number;

  constructor() { }

  onSubstract() {
    const sub = this.number1 - this.number2;
    this.value = sub;
  }
}
