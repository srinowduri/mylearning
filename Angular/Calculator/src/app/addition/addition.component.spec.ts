import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionComponent } from './addition.component';
import { FormsModule } from '@angular/forms';

describe('AdditionComponent', () => {
  let component: AdditionComponent;
  let fixture: ComponentFixture<AdditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdditionComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Addition of two numbers', () => {
    component.number1 = 15;
    component.number2 = 19;
    const expectedResult = 34;
    component.onAddition();
    component.value;
    expect(component.value).toEqual(expectedResult);
  });
});
