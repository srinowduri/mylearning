import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindCharComponent } from './find-char.component';
import { FormsModule } from '@angular/forms';
describe('FindCharComponent', () => {
  let component: FindCharComponent;
  let fixture: ComponentFixture<FindCharComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindCharComponent ],
      imports: [FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindCharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('find matching letter', () => {
    component.text = "laxmi,vasavi,aruna,kavitha";
    component.char = 'a';
    component.count;
    component.message;
    component.charPosition = [];
    component.onSubmit();
    const expectedResult = [1,7,9,13,17,20,25];
    expect(component.charPosition).toEqual(expectedResult);
    expect(component.message).toBeNull;
  });

  it('Without string and with letter', () => {
    component.text = null;
    component.char = "a";
    component.count;
    component.message;
    component.onSubmit();
    const expectedResult = "Enter the values for both the fields.";
    expect(component.message).toEqual(expectedResult);
  });

  it('With string and without letter', () => {
    component.text = "laxmi,vasavi,aruna,kavitha";
    component.char = null;
    component.message;
    component.onSubmit();
    const expectedResult = "Enter the values for both the fields.";
    expect(component.message).toEqual(expectedResult);
  });

  it('When the characterPosition array is empty', () => {
    component.text = "laxmi,vasavi,aruna,kavitha";
    component.char = 'e';
    component.message;
    component.onSubmit();
    const expectedResult = "There is are no any same letters!!";
    expect(component.message).toEqual(expectedResult);
  });

  it('Reset the form', () => {
    component.reset();
    const expectedResult = [];
    expect(component.text).toBeNull;
    expect(component.char).toBeNull;
    expect(component.count).toBeNull;
    expect(component.message).toBeNull;
    expect(component.charPosition).toEqual(expectedResult);
  })
});
