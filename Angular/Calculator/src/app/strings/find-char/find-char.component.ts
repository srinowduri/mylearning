import { Component } from '@angular/core';

@Component({
  selector: 'app-find-char',
  templateUrl: './find-char.component.html',
  styleUrls: ['./find-char.component.scss']
})
export class FindCharComponent  {
  text: string;
  char: string;
  count: number;
  charPosition: number[] = [];
  message: string;
  constructor() { }

  onSubmit(){
    this.count = 0;
    
    if(!this.text || !this.char){
      this.message = "Enter the values for both the fields."
    } else {
   
      for(let i = 0; i <= this.text.length; i++){
        if(this.text[i] === this.char){
          this.charPosition.push(i);
          this.count++;
        } 
      }
      if(this.charPosition.length === 0){
        this.message = "There is are no any same letters!!";
      } else if(this.charPosition.length !== 0){
          this.message = null;
        }
      }
    }
  reset(){
    this.message = null;
    this.char = null;
    this.count = null;
    this.text = null;
    this.charPosition.length = 0;
  }
}
