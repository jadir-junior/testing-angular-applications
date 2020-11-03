import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BrowserStorageService {
  constructor() {}

  getItem: (property: string) => string | object;
  setItem: (property: string, value: string | object) => void;
}
