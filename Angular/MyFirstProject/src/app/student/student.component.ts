import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { StudentService } from '../student.service';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
students: Person[];
selectedStudent: Person;

  constructor(private studentService: StudentService) { }

  getStudents() {
    this.students = this.studentService.fetchStudents();
  }
  ngOnInit(): void {
    this.getStudents();
  }
  onSelectStudent(student){
    this.selectedStudent = student;
  }

}