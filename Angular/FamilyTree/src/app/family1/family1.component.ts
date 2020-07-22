import { Component, OnInit } from '@angular/core';
import { Family1Member } from '../mock-family1Members';
import { Member } from '../member';
import { Family1Service } from '../family1.service';

@Component({
  selector: 'app-family1',
  templateUrl: './family1.component.html',
  styleUrls: ['./family1.component.scss']
})
export class Family1Component implements OnInit {
  members: Member[];
  selectedMember: Member;
  constructor(private family1Service: Family1Service) { }

  ngOnInit(): void {
    this.getMember();
  }

  selectMember(member: Member){
    this.selectedMember = member;
  }

  getMember(){
     this.family1Service.getFamilyMember()
      .subscribe(members => this.members = members);
  }

}
