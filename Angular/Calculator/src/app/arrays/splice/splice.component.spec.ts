import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpliceComponent } from './splice.component';
import { FormsModule } from '@angular/forms';
describe('SpliceComponent', () => {
  let component: SpliceComponent;
  let fixture: ComponentFixture<SpliceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpliceComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpliceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('add an element', () => {
    component.text1 = 'Jan,March,April,June';
    component.text2 = 'Feb';
    component.number = 1;
    component.value = 0;
    component.textArray = [];
    component.onSubmit();
   
    const expectedResult = 'Jan,Feb,March,April,June';
    expect(component.resultString).toEqual(expectedResult);
  });

  it('remove or delete an element', () => {
    component.text1 = 'Jan,March,April,June';
    component.number = 1;
    component.value = 1;
    component.textArray = [];
    component.onSubmit();
   
    const expectedResult = 'Jan,,April,June';
    expect(component.resultString).toEqual(expectedResult);
  });

  it('replace an element', () => {
    component.text1 = 'Jan,March,April,June';
    component.text2 = 'Feb';
    component.number = 1;
    component.value = 1;
    component.textArray = [];
    component.onSubmit();
   
    const expectedResult = 'Jan,Feb,April,June';
    expect(component.resultString).toEqual(expectedResult);
  });

  it('reset the form', () => {
    component.reset();
    expect(component.text1).toBeNull;
    expect(component.text2).toBeNull;
    expect(component.number).toBeNull;
    expect(component.value).toBeNull;
    expect(component.resultString).toBeNull;
  });
});
