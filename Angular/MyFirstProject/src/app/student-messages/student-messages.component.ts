import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-student-messages',
  templateUrl: './student-messages.component.html',
  styleUrls: ['./student-messages.component.scss']
})
export class StudentMessagesComponent implements OnInit {

  constructor(public messageService: MessagesService) { }

  ngOnInit(): void {
  }

}
