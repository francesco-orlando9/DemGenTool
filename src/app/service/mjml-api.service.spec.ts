import { TestBed } from '@angular/core/testing';

import { MjmlApiService } from './mjml-api.service';

describe('MjmlApiService', () => {
  let service: MjmlApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MjmlApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
