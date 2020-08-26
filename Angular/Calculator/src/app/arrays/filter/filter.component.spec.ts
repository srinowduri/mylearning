import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterComponent } from './filter.component';
import { FormsModule } from '@angular/forms';
describe('FilterComponent', () => {
  let component: FilterComponent;
  let fixture: ComponentFixture<FilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Words greateer than the given number', () => {
    component.text = "angular,calculator,javascript,bootstrap,unit testing";
    component.number = 9;
    component.onSubmit();
    const expectedArray = ['angular','calculator','javascript','bootstrap','unit testing'];
    const expcResult = "calculator,javascript,unit testing";

    expect(component.textArray).toEqual(expectedArray);

    expect(component.finalText).toEqual(expcResult);
  });

  it('No words greater than the given number', () => {
    component.text = "angular,calculator,javascript,bootstrap,unit testing";
    component.number = 12;
    component.onSubmit();
    const expectedArray = ['angular','calculator','javascript','bootstrap','unit testing'];
    const expcResult = 'There are no words grater than given number';
    expect(component.textArray).toEqual(expectedArray);
    expect(component.message).toEqual(expcResult);
  });

  it('Reset the form', () => {
    component.reset();
    expect(component.message).toBeNull;
    expect(component.text).toBeNull;
    expect(component.number).toBeNull;
    expect(component.finalText).toBeNull;
  });
});
