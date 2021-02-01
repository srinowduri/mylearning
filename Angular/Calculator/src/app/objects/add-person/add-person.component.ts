import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Person } from 'src/app/person.model';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.scss']
})
export class AddPersonComponent implements OnInit {
  @Output() personAdded = new EventEmitter<Person>();
  personDetailForm = this.formBuilder.group({
    firstName: [''],
    lastName: [''],
    age: [''],
    birthYear: ['']
  });

  sourceArray: Person[];
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    
  }

  onSubmit(){
    this.sourceArray = [];
    this.personAdded.emit(this.personDetailForm.value);
    // console.log(this.personDetailForm.value);

    this.sourceArray.push(this.personDetailForm.value);
  }

}
