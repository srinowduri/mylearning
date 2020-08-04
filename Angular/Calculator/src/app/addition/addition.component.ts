import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-addition',
  templateUrl: './addition.component.html',
  styleUrls: ['./addition.component.scss']
})
export class AdditionComponent implements OnInit {
  number1: number;
  number2: number;
  value; 
  constructor() { }

  ngOnInit(): void {
  }

  onAddition(){
    const sum = this.number1 + this.number2;
    this.value = sum;
  }
  

}
