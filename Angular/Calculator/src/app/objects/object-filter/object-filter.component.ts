import { Component, OnInit, Input, Output } from '@angular/core';
import { Person } from 'src/app/person.model';
import { ObjectsService } from 'src/app/service/objects.service';

@Component({
  selector: 'app-object-filter',
  templateUrl: './object-filter.component.html',
  styleUrls: ['./object-filter.component.scss']
})
export class ObjectFilterComponent implements OnInit {
  persons: Person[] = [];
  value: string;
  personMembers:  Person[];
  // personsAges: number[];
  selectedValue: string = '';
  message: string = 'Please select one option';

  letter: string;
  constructor(private objectsService: ObjectsService) { }

  ngOnInit(): void {
    
  }
  selectValue(event: any){
    this.selectedValue = event.target.value;
    // console.log(this.selectedValue);
  }

  filter(){
    this.personMembers = [];
    // console.log(this.letter);
    if(this.selectedValue === 'name'){
      this.objectsService.persons.filter(person => {
        let nameArray = person.firstName.split('');
        // if(person.firstName)
       // console.log(nameArray);
        //console.log(person.firstName);
        nameArray.filter(char => {
          if(char === this.letter){
            if(this.personMembers.indexOf(person) === -1){
              this.personMembers.push(person);
            }
          }
        });
      });
    }
    console.log(this.personMembers);
    this.objectsService.setPersons(this.personMembers);
  }
}
