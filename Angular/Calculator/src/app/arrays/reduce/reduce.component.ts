import { Component } from '@angular/core';

@Component({
  selector: 'app-reduce',
  templateUrl: './reduce.component.html',
  styleUrls: ['./reduce.component.scss']
})
export class ReduceComponent {
  number: string;
  result: number;
  numberArray: string[];
  resultArray: number[];
  reduceValue: number;
  constructor() { }

  onSubmit(){
    this.resultArray = [];
    if(this.number){
      this.numberArray = this.number.split(',');
      this.numberArray.map(num => {
        let  a = Number(num);
        if((this.resultArray.indexOf(a) === -1)){
          this.resultArray.push(a);
        }
      });
      this.resultArray.reduce((acc,i) => {
        this.reduceValue = acc + i;
        this.result = this.reduceValue;
        return this.result;
      }, 1);
    }
  }

  reset(){
    this.result = null;
    this.number = null;
  }
}
