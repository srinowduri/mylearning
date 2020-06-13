import { Injectable } from '@angular/core';
import { StudentList } from './studentList';
import { Person } from './person';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  constructor() { }

  getStudents(): Person[] {
    return StudentList;
  }
}
