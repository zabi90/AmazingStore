import { TestBed } from '@angular/core/testing';

import { SearchTextServiceService } from './search-text-service.service';

describe('SearchTextServiceService', () => {
  let service: SearchTextServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchTextServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
