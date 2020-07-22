import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { StudentService } from '../student.service';
import { MessagesService } from '../messages.service';
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
    this.studentService.fetchStudents()
      .subscribe((students: Person[]) => this.students = students);
  }
  ngOnInit(): void {
    this.getStudents();
  }
  // onSelectStudent(student: Person){
  //   this.selectedStudent = student;
  //   this.messageService.add(`Selected student id ${student.id} and name ${student.name}`);
  // }

}
