import { HttpClientTestingModule } from '@angular/common/http/testing';
import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  flush,
  tick,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AppMaterialModule } from 'src/app/app.material.module';
import {
  ContactService,
  FavoriteIconDirective,
  ShowContactsDirective,
} from '../shared';
import { CONTACTS } from '../shared/data';
import { PhoneNumberPipe } from '../shared/phone-number/phone-number-pipe';

import { ContactListComponent } from './contact-list.component';

fdescribe('ContactListComponent', () => {
  let component: ContactListComponent;
  let fixture: ComponentFixture<ContactListComponent>;
  let router: Router;
  let location: Location;

  const contactServiceStub = {
    contacts: [...CONTACTS],
    getContacts: async function () {
      component.contacts = this.contacts;
      return this.contacts;
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ContactListComponent,
        ShowContactsDirective,
        PhoneNumberPipe,
        FavoriteIconDirective,
      ],
      imports: [
        RouterTestingModule,
        AppMaterialModule,
        HttpClientTestingModule,
      ],
      providers: [{ provide: ContactService, useValue: contactServiceStub }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactListComponent);
    component = fixture.componentInstance;
    component.contacts = [];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should start with a message `loading contacts` and a mat-progress-bar', fakeAsync(() => {
    component.contacts = [];
    component.isLoading = true;
    component.deletingContact = false;
    component.deletingContacts = false;
    fixture.detectChanges();

    const message = fixture.debugElement.query(By.css('.messages'));
    const progressBar = fixture.debugElement.query(By.css('.app-progress'));

    expect(message.nativeElement.innerText).toContain('Loading contacts...');
    expect(progressBar).not.toBeNull();
  }));

  it('should load the contacts and show a table and buttons', fakeAsync(() => {
    component.isLoading = false;
    component.deletingContact = false;
    component.deletingContacts = false;
    component.ngOnInit();
    fixture.detectChanges();

    const table = fixture.debugElement.query(By.css('table'));
    const deleteAllContacts = fixture.debugElement.query(
      By.css('[mat-raised-button]')
    );
    const addNewContact = fixture.debugElement.query(By.css('.add-fab'));
    tick();

    expect(table).not.toBeNull();
    expect(deleteAllContacts).not.toBeNull();
    expect(deleteAllContacts.nativeElement.innerText).toContain(
      'Delete All Contacts'
    );
    // expect(addNewContact).not.toBeNull();
  }));

  // it('should click on edit button and change to edit page', fakeAsync(() => {
  //   const buttonEdit = fixture.debugElement.query(By.css('edit-icon'));
  //   buttonEdit.triggerEventHandler('click', { button: 0 });
  //   flush();
  //   fixture.detectChanges();
  //   expect(location.path()).toEqual('/edit/1');
  // }));
});
