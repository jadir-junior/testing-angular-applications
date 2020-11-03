import { TestBed } from '@angular/core/testing';

import { ContactFeedService } from './contact-feed.service';

describe('ContactFeedService', () => {
  let service: ContactFeedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactFeedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
