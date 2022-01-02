import { TestBed } from '@angular/core/testing';

import { CustomapiclientService } from './customapiclient.service';

describe('CustomapiclientService', () => {
  let service: CustomapiclientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomapiclientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
