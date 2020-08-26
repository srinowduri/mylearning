import { Component } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  text: string;
  textArray: string[] = [];
  number: number;
  resultArray: string[] = [];
  message: string = "";
  finalText: string;
  constructor() { }

  onSubmit(){
    this.resultArray = [];
    this.textArray = this.text.split(',');
   
    this.textArray.filter(word => {
     
      if(word.length > this.number){
        this.resultArray.push(word);
      } 
      this.finalText = this.resultArray.join(",");
    });
    if(this.resultArray.length === 0){
      this.message = 'There are no words grater than given number'; 
    } 
  }

  reset(){
    this.message = null;
    this.text = null;
    this.number = null;
    this.finalText = null;
  }
}
