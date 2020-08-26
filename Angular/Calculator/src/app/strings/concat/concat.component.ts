import { Component } from '@angular/core';

@Component({
  selector: 'app-concat',
  templateUrl: './concat.component.html',
  styleUrls: ['./concat.component.scss']
})
export class ConcatComponent {
  text1: string;
  text2: string;
  value: string;
  constructor() { }

  onSubmit(){
    if((this.text1 && this.text2) === null){
      this.value = "please enter text values"
    } else{
      this.value = this.text1 + this.text2;
    }
    
  }

}
