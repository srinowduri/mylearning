import { Component } from '@angular/core';
@Component({
  selector: 'app-addition',
  templateUrl: './addition.component.html',
  styleUrls: ['./addition.component.scss']
})
export class AdditionComponent {
  number1: number;
  number2: number;
  value; 
  
  constructor() { }

  onAddition(){
    const sum = this.number1 + this.number2;
    this.value = sum;
  }
}
