import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiplication',
  templateUrl: './multiplication.component.html',
  styleUrls: ['./multiplication.component.scss']
})
export class MultiplicationComponent implements OnInit {
  number1: number;
  number2: number;
  value;
  constructor() { }

  ngOnInit(): void {
  }
  onMultiply() {
    const mul = this.number1 * this.number2;
    this.value = mul;
  }
}
