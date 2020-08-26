import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcatComponent } from './concat.component';
import { FormsModule } from '@angular/forms';
describe('ConcatComponent', () => {
  let component: ConcatComponent;
  let fixture: ComponentFixture<ConcatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcatComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Concatination of two strings', () => {
    component.text1 = "Angular";
    component.text2 = " Unit Testing";
    component.value;
    component.onSubmit();
    const expectedResult = "Angular Unit Testing";
    console.log(component.value);
    expect(component.value).toEqual(expectedResult);
  });
});
