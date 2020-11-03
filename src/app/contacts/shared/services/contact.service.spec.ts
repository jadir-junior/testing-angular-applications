import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ContactService } from './contact.service';

describe('ContactService', () => {
  let service: ContactService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ContactService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getContacts', () => {
    let contactService: ContactService;
    let httpTestingController: HttpTestingController;
    let mockContact: any;

    beforeEach(() => {
      contactService = TestBed.inject(ContactService);
      httpTestingController = TestBed.inject(HttpTestingController);
      mockContact = {
        id: 100,
        name: 'Erin Dee',
        email: 'edee@example.com',
      };
    });

    it('should GET  a list of contacts', () => {
      contactService.getContacts().then((contacts) => {
        expect(contacts[0]).toEqual(mockContact);
      });

      const request = httpTestingController.expectOne('app/contacts');
      request.flush([mockContact]);
      httpTestingController.verify();
    });
  });
});
