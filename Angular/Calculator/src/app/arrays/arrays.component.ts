import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arrays',
  templateUrl: './arrays.component.html',
  styleUrls: ['./arrays.component.scss']
})
export class ArraysComponent implements OnInit {
  showMethod: string;
  constructor() { }

  ngOnInit(): void {
  }
  onForEach(){
    this.showMethod = "each";
  }

  onFilter(){
    this.showMethod = "filter";
  }

  onMap(){
    this.showMethod = "map";
  }

  onReduce(){
    this.showMethod = "reduce";
  }

  onSplice(){
    this.showMethod = "splice";
  }
}
