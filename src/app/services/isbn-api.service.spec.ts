import { TestBed } from '@angular/core/testing';

import { IsbnApiService } from './isbn-api.service';

describe('IsbnApiService', () => {
  let service: IsbnApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IsbnApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
