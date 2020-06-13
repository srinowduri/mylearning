import { Injectable } from '@angular/core';
import { StudentList } from './studentList';
import { Person } from './person';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  constructor() { }

  fetchStudents(): Person[] {
    return StudentList;
  }
}
