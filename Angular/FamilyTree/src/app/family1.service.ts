import { Injectable } from '@angular/core';
import { Member } from './member';
import { Family1Member } from './mock-family1Members';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Family1Service {
  constructor() { }

  getFamilyMember(): Observable<Member[]>{
    return of(Family1Member);
  }

  getMember(name: string): Observable<Member>{
    return of(Family1Member.find(member => member.name === name));
  }
}
