import { Component } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {
  number1: string;
  num: number;
  numbersArray: string[] = [];
  resultArray: number[];
  constructor() { }

  finalArray: number[];
  finalText: string;
  onSubmit(){
    this.resultArray = [];
    if(this.number1){
      this.numbersArray = this.number1.split(',');
      this.numbersArray.map(num => {
        let  a = Number(num);
        if((this.resultArray.indexOf(a) === -1)){
          this.resultArray.push(a);
        }
      });
      this.finalArray = [];
      this.resultArray.map(x => {
        x = x * this.num;
        if((this.finalArray.indexOf(x) === -1)){
            this.finalArray.push(x);
        }
      });
      this.finalText = this.finalArray.join(",");
    }
  }

  reset(){
    this.finalText = null;
    this.number1 = null;
    this.num = null;
  }
}
