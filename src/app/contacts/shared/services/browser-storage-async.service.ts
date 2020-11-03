import { Injectable } from '@angular/core';
import { IContactPreference } from './preferences.service';

@Injectable({
  providedIn: 'root',
})
export class BrowserStorageAsyncService {
  getItem: (property: string) => Promise<IContactPreference>;
  setItem: (property: string, value: string | object) => Promise<boolean>;
}
