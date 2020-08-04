import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-substraction',
  templateUrl: './substraction.component.html',
  styleUrls: ['./substraction.component.scss']
})
export class SubstractionComponent implements OnInit {
  value;
  number1: number;
  number2: number;
  constructor() { }

  ngOnInit(): void {
  }

  onSubstract() {
    const sub = this.number1 - this.number2;
    this.value = sub;
  }
}
