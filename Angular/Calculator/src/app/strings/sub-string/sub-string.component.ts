import { Component } from '@angular/core';

@Component({
  selector: 'app-sub-string',
  templateUrl: './sub-string.component.html',
  styleUrls: ['./sub-string.component.scss']
})
export class SubStringComponent {
  text: string;
  value: string;
  number: number;
  textArray: string[] = [];
  substringArr: string[];

  constructor() { }

  onSubmit(){
    this.substringArr = [];
    this.textArray = this.text.split('');
    for(let i = 0; i <= this.textArray.length; i++){
      if( i >= this.number){
        this.substringArr.push(this.textArray[i]);
      }
    }
    this.value = this.substringArr.join('');
  }

}
