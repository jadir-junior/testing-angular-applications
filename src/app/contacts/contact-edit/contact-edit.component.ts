import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import {
  Contact,
  ContactService,
  InvalidEmailModalComponent,
  InvalidPhoneNumberModalComponent,
  countryDialingCodes,
} from '../shared';

import { constants } from './contact-edit.constants';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss'],
  providers: [MatSnackBar],
})
export class ContactEditComponent implements OnInit {
  public loadingContactMessage: string = constants.LOADING_CONTACT_MESSAGE;
  public noContactFoundMessage: string = constants.NO_CONTACT_FOUND_MESSAGE;
  public contact: Contact = null;
  public isLoading = true;
  public countryDialingCodes: string[] = this.getKeys(countryDialingCodes);

  private modalRef: MatDialogRef<any>;

  constructor(
    private contactService: ContactService,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadContact();
  }

  public saveContact(contact: Contact) {
    contact.favorite = !contact.favorite;
    this.contactService.save(contact);
  }

  public loadContact(): void {
    this.route.params.subscribe((params) => {
      const id = +params['id'];
      this.contactService.getContact(id).then((contact) => {
        this.isLoading = false;
        this.contact = contact;
      });
    });
  }

  public updateContact(contact: Contact): void {
    if (!this.isContactValid(contact)) {
      return;
    }

    this.displayEditSnackBar();
    this.contactService.save(contact).then(() => this.router.navigate(['/']));
  }

  private isContactValid(contact: Contact): boolean {
    if (!this.isEmailValid(contact.email)) {
      this.modalRef = this.dialog.open(InvalidEmailModalComponent);
      return false;
    }

    if (!this.isPhoneNumberValid(contact.number)) {
      this.modalRef = this.dialog.open(InvalidPhoneNumberModalComponent);
      return false;
    }

    return true;
  }

  private isEmailValid(email: string): boolean {
    return (
      email === '' ||
      (email !== '' && email.includes('@') && email.includes('.'))
    );
  }

  private isPhoneNumberValid(phoneNumber: string): boolean {
    return (
      phoneNumber === '' ||
      (phoneNumber !== '' &&
        phoneNumber.length === 10 &&
        /^\d+$/.test(phoneNumber))
    );
  }

  private displayEditSnackBar(): void {
    const message = 'Contact updated';
    const snackConfig: MatSnackBarConfig = { duration: 200 };
    const actionLabel = '';

    this.snackBar.open(message, actionLabel, snackConfig);
  }

  private getKeys(object: Object): string[] {
    return Object.keys(object).map((key, value) => key);
  }
}
