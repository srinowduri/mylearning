import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PalindromeComponent } from './palindrome.component';
import { FormsModule } from '@angular/forms';
describe('PalindromeComponent', () => {
  let component: PalindromeComponent;
  let fixture: ComponentFixture<PalindromeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PalindromeComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PalindromeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('string is palindrome', () => {
    component.text = "abcdcba";
    component.isText;
    component.message;
    component.onSubmit();
    const expectedResult = ', abcdcba is a Palindrome.';
    expect(component.message).toMatch(expectedResult);
    expect(component.isText).toBeTruthy;
  });

  it('String is not a Palindrome', () => {
    component.text = "abcdefgh";
    component.onSubmit();
    const expectedResult = ', abcdefgh is not a Palindrome.';
    expect(component.message).toMatch(expectedResult);
    expect(component.isText).toBeFalsy;
  });

  it('Reset the form', () => {
    component.reset();
    expect(component.text).toBeNull;
    expect(component.message).toBeNull;
    expect(component.isText).toBeNull;
  })
});
