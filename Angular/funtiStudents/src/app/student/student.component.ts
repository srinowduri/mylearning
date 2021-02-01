import { Component, OnInit, Output } from '@angular/core';
import { Student } from '../model/student.model';
import { StudentService } from '../service/studentService.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { Router } from '@angular/router';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  @Output() student: Student;
  students$: Observable<Student[]>;
  showAddForm: Boolean = false;
  showEditForm: Boolean = false;
  errorMessage: string;
  successMessage: string;
  message: string;

  constructor(private studentService: StudentService,
              private http: HttpClient) { }

  ngOnInit(): void {
    // this.students = students;
    this.students$ = this.getStudents();
    // this.students$.subscribe(students => students.forEach(std => { console.log(JSON.stringify(std))}));
  }
  /* Student Add form display method and Add action method*/
  onAddStudent(){
    this.showAddForm = !this.showAddForm;
    if(this.showAddForm){
      this.showEditForm = false;
      this.showAddForm = true;
      this.successMessage = null;
      this.errorMessage = null;
    }
  }

  onStudentAdd(isStudentAdd: string){
    // if(student !== undefined){
    //   this.students.push(student);
    //  }
    if(isStudentAdd === 'success'){
      this.students$ = this.getStudents();
      this.successMessage = "Student Registered successfully";
    }
    else if(isStudentAdd === 'error') {
      console.log('Registration Failed');
      this.errorMessage = "Student Registration Failed";
    }
    else {
       this.message = null;
    }
    this.showAddForm = false; 
    
  }


  /* Student Edit form display method and Edit action method*/
  onEditStudent(eStudent: Student){
    this.student = eStudent;
    this.showEditForm = true;
    this.showAddForm = false;
    this.successMessage = null;
    this.errorMessage = null;
  }

  onStudentEdit(isStudentEdit: string){
    // this.students = this.students.map((std: Student) => {
    //   if(std.name === this.student.name){
    //     std = eStudent;
    //   }
    //   return std;
    // });
    if(isStudentEdit === 'success'){
      this.students$ = this.getStudents();
      this.successMessage = "Student Updated successfully";
    }
    else if(isStudentEdit === 'error'){
      this.errorMessage = "Student Updating Failed";
    }
    else {
      this.message = null;
    }
    this.showEditForm = false;  
  }
  
  /* Method for Remove Student*/

  onRemoveStudent(id: string){
    // for(let i = 0; i < this.students.length; i++){
    //   if(this.students[i].name === name){
    //     this.students.splice(i,1);
    //    }
    //  } 

    this.studentService.deleteStudent(id).subscribe(response => {
      // console.log(response);
      // this.router.navigateByUrl('students');
      this.students$ = this.getStudents();
    });
    this.successMessage = null;
    this.errorMessage = null;
    
  }

  getStudents() {
   return this.studentService.getStudents();
    // .subscribe(list => {
    //   console.log(list);
    //   return list; 
    // } );  
  }
}
