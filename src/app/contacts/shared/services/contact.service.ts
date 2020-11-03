import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Contact } from '../';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private contactUrl = 'app/contacts';

  constructor(private http: HttpClient) {}

  public getContacts(): any {
    return this.http
      .get(this.contactUrl)
      .toPromise()
      .then((response: any) => response as Contact)
      .catch(this.handleError);
  }

  public getContact(id: number): Promise<Contact> {
    return this.getContacts().then((contacts) =>
      contacts.find((contact) => contact.id === id)
    );
  }

  public save(contact: Contact): Promise<Contact> {
    if (contact.id) {
      return this.put(contact);
    }

    return this.post(contact);
  }

  public new(contact: Contact): Promise<Contact> {
    return this.post(contact);
  }

  public delete(contact: Contact): Promise<Contact> {
    const url = `${this.contactUrl}/${contact.id}`;

    return this.http
      .delete(url)
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  public post(contact: Contact): Promise<Contact> {
    return this.http
      .post(this.contactUrl, contact)
      .toPromise()
      .then((res) => res)
      .catch(this.handleError);
  }

  public put(contact: Contact): Promise<Contact> {
    const url = `${this.contactUrl}/${contact.id}`;

    return this.http
      .put(url, contact)
      .toPromise()
      .then(() => contact)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
