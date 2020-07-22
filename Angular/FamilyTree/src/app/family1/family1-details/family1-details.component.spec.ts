import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Family1DetailsComponent } from './family1-details.component';

describe('Family1DetailsComponent', () => {
  let component: Family1DetailsComponent;
  let fixture: ComponentFixture<Family1DetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Family1DetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Family1DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
