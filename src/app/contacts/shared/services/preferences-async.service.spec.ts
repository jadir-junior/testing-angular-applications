import { TestBed, fakeAsync, flushMicrotasks } from '@angular/core/testing';

import { PreferencesAsyncService } from './preferences-async.service';
import { BrowserStorageAsyncService } from './browser-storage-async.service';

class BrowserStorageAsyncMock {
  getItem = (property: string) => {
    return Promise.resolve({ key: 'testProp', value: 'testValue' });
  };
  setItem = ({ key: key, value: value }) => Promise.resolve(true);
}

describe('PreferencesAsyncService', () => {
  let service: PreferencesAsyncService;
  let browserStorage: BrowserStorageAsyncService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: BrowserStorageAsyncService,
          useClass: BrowserStorageAsyncMock,
        },
      ],
    });
    service = TestBed.inject(PreferencesAsyncService);
    browserStorage = TestBed.inject(BrowserStorageAsyncService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get a value', fakeAsync(() => {
    let results, error;

    spyOn(browserStorage, 'getItem').and.callThrough();

    service
      .getPropertyAsync('testProp')
      .then((val) => (results = val))
      .catch((err) => (error = err));

    flushMicrotasks();

    expect(results.key).toEqual('testProp');
    expect(results.value).toEqual('testValue');
    expect(error).toBeUndefined();
    expect(browserStorage.getItem).toHaveBeenCalledWith('testProp');
  }));

  it('should throw an error if the key is missing', fakeAsync(() => {
    let result, error;

    service
      .getPropertyAsync('')
      .then((value) => (result = value))
      .catch((err) => (error = err));

    flushMicrotasks();

    expect(result).toBeUndefined();
    expect(error).toEqual('getPropertyAsync requires a property name');
  }));
});
