import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationsComponent } from './operations.component';

describe('OperationsComponent', () => {
  let component: OperationsComponent;
  let fixture: ComponentFixture<OperationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('toggle operation Add', () => {
    component.showOperation;
    component.onAdd();
    const expectResult = 'add';
    expect(component.showOperation).toEqual(expectResult);
  });
  it('toggle operation Subtrac', () => {
    component.showOperation;
    component.onSubtrac();
    const expectResult = 'sub';
    expect(component.showOperation).toEqual(expectResult);
  });

  it('toggle operation Multiply', () => {
    component.showOperation;
    component.onMulti();
    const expectResult = 'mul';
    expect(component.showOperation).toEqual(expectResult);
  });

  it('toggle operation Divide', () => {
    component.showOperation;
    component.onDivn();
    const expectResult = 'div';
    expect(component.showOperation).toEqual(expectResult);
  });
});
