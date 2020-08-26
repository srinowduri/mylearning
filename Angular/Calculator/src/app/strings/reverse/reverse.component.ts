import { Component } from '@angular/core';

@Component({
  selector: 'app-reverse',
  templateUrl: './reverse.component.html',
  styleUrls: ['./reverse.component.scss']
})
export class ReverseComponent  {
  text: string;
  value: string;
  constructor() { }

  onSubmit(){
    this.value = '';
    for(let i = this.text.length; i >=0; i--){
      
      if( this.text[i] !== undefined && this.value !== null){
        this.value += this.text[i]; 
      }
    }
  }
}
