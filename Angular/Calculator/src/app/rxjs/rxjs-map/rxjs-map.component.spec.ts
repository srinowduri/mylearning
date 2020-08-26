import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsMapComponent } from './rxjs-map.component';

describe('RxjsMapComponent', () => {
  let component: RxjsMapComponent;
  let fixture: ComponentFixture<RxjsMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
