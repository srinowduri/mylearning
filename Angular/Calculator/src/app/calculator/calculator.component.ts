import { Component, OnInit } from '@angular/core';
import { Operator } from '../operator';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onOperator(operator: Operator){

  }
  onEvaluate(){

  }

  reset(){

  }
  onClickNumber(character: string){

  }
}
