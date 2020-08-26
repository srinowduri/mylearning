import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubStringComponent } from './sub-string.component';
import { FormsModule } from '@angular/forms';
describe('SubStringComponent', () => {
  let component: SubStringComponent;
  let fixture: ComponentFixture<SubStringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubStringComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubStringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Substring from given text', () => {
    component.text = "strings";
    component.value;
    component.number = 3;
    component.substringArr = [];
    component.textArray = ['s','t','r','i','n','g','s'];
    component.onSubmit();
    const expectedresult = 'ings';
    expect(component.value).toEqual(expectedresult);
  });
});
