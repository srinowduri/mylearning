import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReduceComponent } from './reduce.component';

describe('ReduceComponent', () => {
  let component: ReduceComponent;
  let fixture: ComponentFixture<ReduceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReduceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReduceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('return single value', () => {
    component.number = '1,2,3,4,5,6,7,8,9,10';
    component.onSubmit();
    const expectedArray = ['1','2','3','4','5','6','7','8','9','10'];
    const expecResult = 56;
    expect(component.numberArray).toEqual(expectedArray);
    expect(component.result).toEqual(expecResult);
  });

  it('Reset the form', () => {
    component.reset();
    expect(component.result).toBeNull;
    expect(component.number).toBeNull;
  })
});
