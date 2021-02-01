import { Component, OnInit, Input } from '@angular/core';
import { Person } from 'src/app/person.model';
import { ObjectsService } from '../service/objects.service';
import { Users } from '../users.data';

@Component({
  selector: 'app-objects',
  templateUrl: './objects.component.html',
  styleUrls: ['./objects.component.scss']
})
export class ObjectsComponent implements OnInit {
  persons: Person[];
  showPersonForm: boolean;
  showMethod: string;
  constructor(private objectsService: ObjectsService) { }
    
  ngOnInit(): void {
    this.persons = Users;
     this.objectsService.setPersons(this.persons);
  }
  // onAddPerson(person: Person){
  //   this.persons.push(person);
  //   this.showPersonForm = false;
  // }

  // toAddPerson(){
  //   if(this.showPersonForm === true){
  //     this.showPersonForm = false;
  //   } else{
  //     this.showPersonForm = true;
  //     this.showMethod = null;
  //   }
  // }


  onForEach(){
    this.showMethod = "each";
    this.showPersonForm = false;
  }

  onFilter(){
    this.showMethod = "filter";
    this.showPersonForm = false;
  }

  onMap(){
    this.showMethod = "map";
    this.showPersonForm = false;
  }

  onReduce(){
    this.showMethod = "reduce";
    this.showPersonForm = false;
  }
}
