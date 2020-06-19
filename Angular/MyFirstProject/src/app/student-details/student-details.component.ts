import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../person';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../student.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent implements OnInit {
@Input() student: Person;
  constructor( 
    private route: ActivatedRoute,
    private studentService: StudentService,
    private location: Location) { }

  ngOnInit(): void {  
    this.getStudent();
  }

  getStudent(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.studentService.getStudent(id)
      .subscribe(student => this.student = student);
  }

  goBack() {
    this.location.back();
  }
}
