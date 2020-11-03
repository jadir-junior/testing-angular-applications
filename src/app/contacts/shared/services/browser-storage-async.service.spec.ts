import { TestBed } from '@angular/core/testing';

import { BrowserStorageAsyncService } from './browser-storage-async.service';

describe('BrowserStorageAsyncService', () => {
  let service: BrowserStorageAsyncService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrowserStorageAsyncService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
