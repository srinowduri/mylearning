import { Component } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-for-each',
  templateUrl: './for-each.component.html',
  styleUrls: ['./for-each.component.scss']
})
export class ForEachComponent {
  text: string;
  result: string;
  textArray: string[] = [];
  upperCaseArray : string[];
  lowerCaseArray: string[];

  answer!: string[];

  finalString: string;
  constructor() { }

  upperCase(){
     this.upperCaseArray = [];
     if(this.text){
      this.textArray = this.text.split(',');
      this.textArray.forEach((element: string) => {
        if(this.upperCaseArray.indexOf(element) === -1){
          this.upperCaseArray.push(element.toUpperCase());
        }  
      });
      this.answer = this.upperCaseArray;
      this.finalString = this.answer.join(',').toString();
    } 
  }
  lowerCase(){
    this.lowerCaseArray = [];
    if(this.text){
      this.textArray = this.text.split(',');
      this.textArray.forEach((element: string) => {
        if(this.lowerCaseArray.indexOf(element) === -1){
          this.lowerCaseArray.push(element.toLowerCase());
        } 
      });
      this.answer = this.lowerCaseArray;
      this.finalString = this.answer.join(',').toString();
    }
  }

  reset() {
    this.answer = null;
    this.text = null;
    this.finalString = null;
  }
}
