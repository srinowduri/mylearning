import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapComponent } from './map.component';
import { FormsModule } from '@angular/forms';
describe('MapComponent', () => {
  let component: MapComponent;
  let fixture: ComponentFixture<MapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Array elements multiple with given number', () => {
    component.number1 = '1,2,3,4,5,6,7,8,9,10';
    component.num = 9;
    component.onSubmit();
    const expecNumberArr = [1,2,3,4,5,6,7,8,9,10];
    const expecResult = '9,18,27,36,45,54,63,72,81,90';
    expect(component.resultArray).toEqual(expecNumberArr);
    expect(component.finalText).toEqual(expecResult);  
  });
  it('Reset the form', () => {
    component.reset();
    expect(component.finalText).toBeNull;
    expect(component.number1).toBeNull;
    expect(component.num).toBeNull;
  });
});
