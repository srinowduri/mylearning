import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LengthComponent } from './length.component';
import { FormsModule } from '@angular/forms'; 
describe('LengthComponent', () => {
  let component: LengthComponent;
  let fixture: ComponentFixture<LengthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LengthComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LengthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('finding length of the string', () => {
    component.text = "Hello World! Welcome to angular unit testing!!";
    component.value;
    component.onSubmit();
    const expectedResult = 46;
    expect(component.value).toEqual(expectedResult);
  });

  it('Resettig the form', () => {
    component.reset();
    expect(component.text).toBeNull;
    expect(component.value).toBeNull;
  })
});
