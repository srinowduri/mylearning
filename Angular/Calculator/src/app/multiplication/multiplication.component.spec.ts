import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplicationComponent } from './multiplication.component';
import { FormsModule } from '@angular/forms';
describe('MultiplicationComponent', () => {
  let component: MultiplicationComponent;
  let fixture: ComponentFixture<MultiplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiplicationComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Multiplication of two numbers', () => {
    component.number1 = 24;
    component.number2 = 6;
    component.value;
    const expectedResult = 144;
    component.onMultiply();
    console.log(component.value);
    expect(component.value).toEqual(expectedResult);
  });
});
