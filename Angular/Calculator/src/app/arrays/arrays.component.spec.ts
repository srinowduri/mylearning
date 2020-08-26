import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArraysComponent } from './arrays.component';

describe('ArraysComponent', () => {
  let component: ArraysComponent;
  let fixture: ComponentFixture<ArraysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArraysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArraysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('toggle operation Filter', () => {
    component.showMethod;
    component.onFilter();
    const expectResult = 'filter';
    expect(component.showMethod).toEqual(expectResult);
  });
  it('toggle operation ForEach', () => {
    component.showMethod;
    component.onForEach();
    const expectResult = 'each';
    expect(component.showMethod).toEqual(expectResult);
  });

  it('toggle operation Map', () => {
    component.showMethod;
    component.onMap();
    const expectResult = 'map';
    expect(component.showMethod).toEqual(expectResult);
  });

  it('toggle operation Reduce', () => {
    component.showMethod;
    component.onReduce();
    const expectResult = 'reduce';
    expect(component.showMethod).toEqual(expectResult);
  });

  it('toggle operation Splice', () => {
    component.showMethod;
    component.onSplice();
    const expectResult = 'splice';
    expect(component.showMethod).toEqual(expectResult);
  });
});
