import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-splice',
  templateUrl: './splice.component.html',
  styleUrls: ['./splice.component.scss']
})
export class SpliceComponent implements OnInit {
  text1: string;
  text2: string;
  number: number;
  value: number;

  textArray: string[] = [];
  resultString: string;
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.textArray = this.text1.split(',');
    console.log(this.textArray);
    this.textArray.splice(this.number, this.value, this.text2);
    this.resultString = this.textArray.join(',');
  }

  reset(){
    this.text1 = null;
    this.text2 = null;
    this.number = null;
    this.value = null;
    this.resultString = null;
  }
}
