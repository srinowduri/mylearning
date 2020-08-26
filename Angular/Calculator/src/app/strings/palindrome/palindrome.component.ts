import { Component, OnInit } from '@angular/core';
import { AstMemoryEfficientTransformer } from '@angular/compiler';

@Component({
  selector: 'app-palindrome',
  templateUrl: './palindrome.component.html',
  styleUrls: ['./palindrome.component.scss']
})
export class PalindromeComponent implements OnInit {
  text: string;
  isText: boolean;
  message: string;
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    let expr = /[\W_]/g;   /* /[^A-Za-z0-9]/g  */
    let exprString = this.text.toLowerCase().replace(expr, '');
  
    for(let i = 0; i < exprString.length; i++){
     if(exprString[i] !== exprString[exprString.length-1-i]){
       this.message = `, ${exprString} is not a Palindrome.`
       this.isText = false;
       return this.isText;  
     } 
      
     
    }

    this.message = `, ${exprString} is a Palindrome. `
    this.isText = true;
  }

  reset(){
    this.isText = null;
    this.message = null;
    this.text = null;
  }
}
