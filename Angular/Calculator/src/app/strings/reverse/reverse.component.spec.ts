import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReverseComponent } from './reverse.component';
import { FormsModule } from '@angular/forms';
describe('ReverseComponent', () => {
  let component: ReverseComponent;
  let fixture: ComponentFixture<ReverseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReverseComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReverseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Reverse of the string', () => {
    component.text = "abcdefgh";
    const expectedResult = "hgfedcba";
    component.onSubmit();
    expect(component.value).toEqual(expectedResult);
  });
});
