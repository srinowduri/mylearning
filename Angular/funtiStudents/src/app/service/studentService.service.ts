import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../model/student.model';
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  addStudent(student: Student){
    const headers = {
      "content-type": "application/json"
    }
    const url = "http://localhost:4000/api/students"
    // console.log(JSON.stringify(student));
    return this.http.post(url, student, {headers});
  }

  getStudents(){
    const url = "http://localhost:4000/api/students"
    return this.http.get<Student[]>(url, {});
  }

  updateStudent(student: Student) {
    const headers = {
      "content-type": "application/json"
    }
    const url = "http://localhost:4000/api/students"
    // console.log(JSON.stringify(student.id));
    return this.http.put(url, student, {headers}); 
  }

  deleteStudent(id: string) {
    const url = "http://localhost:4000/api/students/" + id;
    return this.http.delete(url, {responseType: "text"});
  }
}
