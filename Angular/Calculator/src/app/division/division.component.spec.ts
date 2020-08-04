import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DivisionComponent } from './division.component';
import { FormsModule } from '@angular/forms';
describe('DivisionComponent', () => {
  let component: DivisionComponent;
  let fixture: ComponentFixture<DivisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivisionComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Division Of two numbers', () => {
    component.number1 = 48;
    component.number2 = 3;
    component.value;
    const expectedResult = 16;
    component.onDivide();
    console.log(component.value);
    expect(component.value).toEqual(expectedResult);
  });
});
