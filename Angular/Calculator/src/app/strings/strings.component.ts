import { Component } from '@angular/core';

@Component({
  selector: 'app-strings',
  templateUrl: './strings.component.html',
  styleUrls: ['./strings.component.scss']
})
export class StringsComponent {
  showOperation: string;
  
  constructor() { }

  onLength(){
    this.showOperation = 'len';
  }

  onReverse(){
    this.showOperation = 'reverse';
  }

  onConcat(){
    this.showOperation = 'concat';
  }

  onFind(){
    this.showOperation = 'char';
  }

  onSubString(){
    this.showOperation = 'sub';
  }

  palindrome(){
    this.showOperation = 'palin';
  }
}
