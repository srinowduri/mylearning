import { Component } from '@angular/core';

@Component({
  selector: 'app-length',
  templateUrl: './length.component.html',
  styleUrls: ['./length.component.scss']
})
export class LengthComponent {
  text: string;
  value: number;
 
  constructor() { }

  onSubmit(){
    let txtLength = this.text.length;
    this.value = txtLength;
    
  }

  reset(){
    this.text = null;
    this.value = null;
  }
}
