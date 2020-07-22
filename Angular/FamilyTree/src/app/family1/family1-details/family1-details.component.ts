import { Component, OnInit, Input } from '@angular/core';
import { Member } from 'src/app/member';

@Component({
  selector: 'app-family1-details',
  templateUrl: './family1-details.component.html',
  styleUrls: ['./family1-details.component.scss']
})
export class Family1DetailsComponent implements OnInit {
@Input() member: Member;
  constructor() { }

  ngOnInit(): void {
  }

}
