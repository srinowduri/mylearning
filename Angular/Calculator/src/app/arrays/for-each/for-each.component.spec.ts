import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForEachComponent } from './for-each.component';
import { FormsModule } from '@angular/forms';
describe('ForEachComponent', () => {
  let component: ForEachComponent;
  let fixture: ComponentFixture<ForEachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForEachComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForEachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('to UpperCase', () => {
    component.text = "abcdefgh";
    component.upperCaseArray = [];
    const expectedArray = ['a','b','c','d','e','f','g','h'];
    const expecResult = 'ABCDEFGH';
    component.upperCase();
    // expect(component.textArray).toEqual(expectedArray);
    expect(component.finalString).toEqual(expecResult);
  });
  it('to LowerCase', () => {
    component.text = "ABCDEFGH";
    component.lowerCaseArray = [];
    const expectedArray = ['A','B','C','D','E','F','G','H'];
    const expecResult = 'abcdefgh';
    component.lowerCase();
    // expect(component.textArray).toEqual(expectedArray);
    expect(component.finalString).toEqual(expecResult);
  });
  it('reset the form', () => {
    component.reset();
    expect(component.answer).toBeNull;
    expect(component.text).toBeNull;
    expect(component.finalString).toBeNull;
  });
});
