import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-division',
  templateUrl: './division.component.html',
  styleUrls: ['./division.component.scss']
})
export class DivisionComponent implements OnInit {
  number1: number;
  number2: number;
  value;
  constructor() { }

  ngOnInit(): void {
    // const divd = 6 / 0;
    // console.log(divd);
    // console.log(typeof divd);
    // if(typeof divd === 'number'){
    //   this.value = divd;
    // } else{
    //   console.log('division not possible')
    // }
    // console.log(this.value);
  }

  onDivide() {
    const div = this.number1 / this.number2;
    
      this.value = div;
    
    
  }
}
