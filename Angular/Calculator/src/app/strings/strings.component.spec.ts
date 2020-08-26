import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StringsComponent } from './strings.component';

describe('StringsComponent', () => {
  let component: StringsComponent;
  let fixture: ComponentFixture<StringsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StringsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StringsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  it('toggle operation Concat', () => {
    component.showOperation;
    component.onConcat();
    const expectResult = 'concat';
    expect(component.showOperation).toEqual(expectResult);
  });

  it('toggle operation Find', () => {
    component.showOperation;
    component.onFind();
    const expectResult = 'char';
    expect(component.showOperation).toEqual(expectResult);
  });
  it('toggle operation Length', () => {
    component.showOperation;
    component.onLength();
    const expectResult = 'len';
    expect(component.showOperation).toEqual(expectResult);
  });
  it('toggle operation Reverse', () => {
    component.showOperation;
    component.onReverse();
    const expectResult = 'reverse';
    expect(component.showOperation).toEqual(expectResult);
  });
  it('toggle operation Substring', () => {
    component.showOperation;
    component.onSubString();
    const expectResult = 'sub';
    expect(component.showOperation).toEqual(expectResult);
  });
  it('toggle operation Palindrome', () => {
    component.showOperation;
    component.palindrome();
    const expectResult = 'palin';
    expect(component.showOperation).toEqual(expectResult);
  });
});
