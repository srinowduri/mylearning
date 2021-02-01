import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Student } from '../model/student.model';
import { StudentService } from '../service/studentService.service';

@Component({
  selector: 'app-edit-student', 
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.scss']
})
export class EditStudentComponent implements OnInit {
  @Input() student: Student;
  @Output() editedStudent =new EventEmitter<String>();
    constructor( private formBuilder: FormBuilder,
                 private studentService: StudentService) { }
    studentForm = this.formBuilder.group({
      id: [''],
      name: [''],
      level: [''],
      emailId: [''],
      phoneNum: ['']
    });
    successMessage!: string;
    errorMessage!: string; 
    ngOnInit(): void {
        this.studentForm.patchValue(this.student);  
    }
    onSubmit(){
      // this.editedStudent.emit(this.studentForm.value);
    }
    
    onCancel(){
      this.editedStudent.emit();
    }
    onUpdateStudent(){
      //  console.log("edit component student : " + JSON.stringify(this.studentForm.value));

      this.studentService.updateStudent(this.studentForm.value).subscribe(
        person =>{
          this.editedStudent.emit("success");
      }, 
      error => {
         this.editedStudent.emit("error");
      })
    }
  }

