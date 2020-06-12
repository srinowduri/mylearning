import { Component, OnInit } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
student: Person = {
  id: 101,
  name: "Saranya"
};
  constructor() { }

  ngOnInit(): void {
  }

}
