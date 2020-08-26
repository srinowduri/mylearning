import { Component } from '@angular/core';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.scss']
})
export class OperationsComponent {
  
  showOperation: string;
  constructor() { }

  onAdd(){
    this.showOperation = 'add';
  }
  
  onSubtrac(){
    this.showOperation = 'sub';
  }
 
  onMulti(){
    this.showOperation = 'mul';    
  }

  onDivn(){
    this.showOperation = 'div';
  }
}
