import { Injectable } from '@angular/core';
import { Person } from './person';
import { StudentList } from './mock-students';
import { Observable, of } from 'rxjs';
import { MessagesService } from './messages.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
 

  constructor(private messageService: MessagesService) { }

  fetchStudents(): Observable<Person[]> {
    this.messageService.add("Student details");
    return of(StudentList);
  }

  getStudent(id: number): Observable<Person> {
    this.messageService.add(`Selected student id ${id} and name ${name}`);
    //return of(StudentList.find(student => student.id === id));
    return of(StudentList.find(student => student.id === id));
  }
}
