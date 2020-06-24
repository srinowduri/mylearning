import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Person } from './person';
@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  createDb()  {
    const  StudentList = [
      {id: 101, name: 'Bharati'},
      {id: 102, name: 'Anjali'},
      {id: 103, name: 'Ravi'},
      {id: 104, name: 'Seshu'},
      {id: 105, name: 'Nandana'}
    ];
    return {StudentList};
  }

  genId(students: Person[]): number{
    return students.length > 0 ? Math.max(...students.map(student => student.id)) + 1 : 101;
  }
}
