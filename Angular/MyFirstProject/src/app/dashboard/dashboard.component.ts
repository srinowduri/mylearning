import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
students: Person[]=[];
  constructor(public studentService: StudentService) { }

  ngOnInit(): void {
    this.fetchStudents();
  }

  fetchStudents(){
    this.studentService.fetchStudents()
      .subscribe(students => this.students = students);
  }

}
