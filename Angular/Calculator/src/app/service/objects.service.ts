import { Injectable } from '@angular/core';
import { Person } from '../person.model';
import { Users } from '../users.data';

@Injectable({
  providedIn: 'root'
})
export class ObjectsService {
  persons: Person[];
  constructor() {
    this.persons = Users;
   }
   setPersons(persons: Person[]){
    this.persons = persons;
    
   }
   getPersons(): Person[]{
     return this.persons;
   }

}
