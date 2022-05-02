import { TestBed } from '@angular/core/testing';

import { HTTPrequestService } from './httprequest.service';

describe('HTTPrequestService', () => {
  let service: HTTPrequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HTTPrequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
