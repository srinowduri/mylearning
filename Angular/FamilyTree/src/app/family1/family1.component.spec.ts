import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Family1Component } from './family1.component';

describe('Family1Component', () => {
  let component: Family1Component;
  let fixture: ComponentFixture<Family1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Family1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Family1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
