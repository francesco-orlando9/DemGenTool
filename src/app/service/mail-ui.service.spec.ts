import { TestBed } from '@angular/core/testing';

import { MailUiService } from './mail-ui.service';

describe('MailUiService', () => {
  let service: MailUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MailUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
