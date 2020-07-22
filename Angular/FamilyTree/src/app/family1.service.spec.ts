import { TestBed } from '@angular/core/testing';

import { Family1Service } from './family1.service';

describe('Family1Service', () => {
  let service: Family1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Family1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
