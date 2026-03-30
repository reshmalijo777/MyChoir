import { TestBed } from '@angular/core/testing';

import { Join } from './join';

describe('Join', () => {
  let service: Join;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Join);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
