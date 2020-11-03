import { TestBed } from '@angular/core/testing';

import { PreferencesService } from './preferences.service';
import { BrowserStorageService } from './browser-storage.service';

import { logging } from 'selenium-webdriver';
import Preferences = logging.Preferences;

class BrowserStorageMock {
  getItem = (property: string) => ({ key: 'testProp', value: 'testValue' });
  setItem = ({ key: key, value: value }) => {};
}

describe('PreferencesService', () => {
  let service: PreferencesService;
  let browserStorage: BrowserStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: BrowserStorageService, useClass: BrowserStorageMock },
      ],
    });
    service = TestBed.inject(PreferencesService);
    browserStorage = TestBed.inject(BrowserStorageService);
  });

  it('should create the Preferences Services', () => {
    expect(service).toBeTruthy();
  });

  describe('save preferences', () => {
    it('should save a preference', () => {
      spyOn(browserStorage, 'setItem').and.callThrough();
      service.saveProperty({ key: 'myProperty', value: 'myValue' });
      expect(browserStorage.setItem).toHaveBeenCalledWith(
        'myProperty',
        'myValue'
      );
    });

    it('saveProperty should require a non-zero length key', () => {
      const shouldThrow = () => {
        service.saveProperty({ key: '', value: 'foo' });
      };

      expect(shouldThrow).toThrowError();
    });
  });
});
