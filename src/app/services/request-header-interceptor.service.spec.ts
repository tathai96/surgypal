import { TestBed } from '@angular/core/testing';

import { RequestHeaderInterceptorService } from './request-header-interceptor.service';

describe('RequestHeaderInterceptorService', () => {
  let service: RequestHeaderInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestHeaderInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
