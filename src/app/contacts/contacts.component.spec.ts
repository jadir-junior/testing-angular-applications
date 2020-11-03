import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsComponent } from './contacts.component';
import { Contact } from './shared';

describe('ContactsComponent Test', () => {
  let component: ContactsComponent = null;
  let fixture: ComponentFixture<ContactsComponent>;

  beforeEach(() => {
    component = new ContactsComponent();
  });

  // beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //     declarations: [ContactsComponent],
  //   }).compileComponents();
  // });

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(ContactsComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  it('should set instance correctly', () => {
    expect(component).not.toBeNull();
  });

  it('should be  no contacts if there is no data', () => {
    expect(component.contacts.length).toBe(0);
  });

  it('should be contacts if there is data', () => {
    const newContact: Contact = {
      id: 1,
      name: 'Jason Pipemaker',
    };
    const contactList: Array<Contact> = [newContact];
    component.contacts = contactList;

    expect(component.contacts.length).toBe(1);
  });
});
