import { Injectable } from '@angular/core';
import { Person } from './person';
import { Observable, of } from 'rxjs';
import { MessagesService } from './messages.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private studentsUrl = 'api/StudentList';

  constructor(private http: HttpClient, private messageService: MessagesService) { }

  private log(message: string){
    this.messageService.add(`StudentService: ${message}`);
  }
  fetchStudents(): Observable<Person[]> {
    this.messageService.add("Student details");
    return this.http.get<Person[]>(this.studentsUrl);
  }

  getStudent(id: number): Observable<Person> {
    this.messageService.add(`Selected student id ${id} and name ${name}`);
    //return of(StudentList.find(student => student.id === id));
    return this.http.get<Person>(this.studentsUrl);
  }
}
