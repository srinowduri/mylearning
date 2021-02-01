import { Component, OnInit, Input } from '@angular/core';
import { ObjectsService } from 'src/app/service/objects.service';

@Component({
  selector: 'app-display-persons',
  templateUrl: './display-persons.component.html',
  styleUrls: ['./display-persons.component.scss']
})
export class DisplayPersonsComponent implements OnInit {
@Input() persons;
  constructor(private objectSeervice: ObjectsService) { }

  ngOnInit(): void {
    this.persons = this.objectSeervice.getPersons();
  }

}
