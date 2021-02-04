import { TestBed } from '@angular/core/testing';

import { SurgeryDetailsService } from './surgery-details.service';

describe('SurgeryDetailsService', () => {
  let service: SurgeryDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SurgeryDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
