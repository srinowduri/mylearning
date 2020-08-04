import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubstractionComponent } from './substraction.component';
import { FormsModule } from '@angular/forms';
describe('SubstractionComponent', () => {
  let component: SubstractionComponent;
  let fixture: ComponentFixture<SubstractionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubstractionComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubstractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Substraction of two numbers', () => {
    component.number1 = 512;
    component.number2 = 17;
    component.value;
    component.onSubstract();
    const expectedResult = 495;
    console.log(component.value);
    expect(component.value).toEqual(expectedResult);
  });
});
