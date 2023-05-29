import { TestBed } from '@angular/core/testing';

import { UpcommingMatchService } from './upcomming-match.service';

describe('UpcommingMatchService', () => {
  let service: UpcommingMatchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpcommingMatchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
