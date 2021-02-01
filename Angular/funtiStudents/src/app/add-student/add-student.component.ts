import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
// import { Router } from '@angular/router';
import { Student } from '../model/student.model';
import { StudentService } from '../service/studentService.service';


@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit{
@Input() student: Student;
@Output() studentAdded =new EventEmitter<string>();
  constructor( private formBuilder: FormBuilder,
               private studentService: StudentService) { }
  studentForm = this.formBuilder.group({
    name: [''],
    level: [''],
    emailId: [''],
    phoneNum: ['']
  });

  ngOnInit(){
    
  }
  onSubmit(){
    // this.studentAdded.emit(this.studentForm.value);
  }

  onCancel(){
    this.studentAdded.emit();

  }

  

/* Service methods */
onAddStudent(){
  // console.log("add component student : " + JSON.stringify(this.studentForm.value));

  this.studentService.addStudent(this.studentForm.value).subscribe( 

    person =>{
      // this.router.navigateByUrl('/student');
      this.studentAdded.emit("success");
    },
    error => {
      this.studentAdded.emit("error");
    })
  }
}
