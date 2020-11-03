import { Injectable } from '@angular/core';
import { BrowserStorageAsyncService } from './browser-storage-async.service';

interface IContactPreference {
  key: string;
  value: string | object;
}

@Injectable({
  providedIn: 'root',
})
export class PreferencesAsyncService {
  constructor(private browserStorage: BrowserStorageAsyncService) {}

  getPropertyAsync(key: string): Promise<IContactPreference> {
    if (!key.length) {
      return Promise.reject('getPropertyAsync requires a property name');
    } else {
      return this.browserStorage.getItem(key);
    }
  }
}
