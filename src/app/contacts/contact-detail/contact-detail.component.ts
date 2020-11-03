import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ContactFeedComponent } from '../contact-feed/contact-feed.component';
import { Contact, ContactService } from '../shared';
import { constants } from './contact-detail.constants';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss'],
})
export class ContactDetailComponent implements OnInit {
  public isLoading = true;
  public loadingContactMessage: string = constants.LOADING_CONTACT_MESSAGE;
  public noContactFoundMessage: string = constants.NO_CONTACT_FOUND_MESSAGE;
  public contact: Contact = null;
  item = [1, 2, 3];

  constructor(
    private router: ActivatedRoute,
    private contactService: ContactService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadContact();
  }

  private loadContact(): void {
    this.router.params.subscribe((params) => {
      const id = +params['id'];
      this.contactService.getContact(id).then((contact) => {
        this.isLoading = false;
        this.contact = contact;
      });
    });
  }

  // openDialog(): void {
  //   setTimeout(() => {
  //     const dialogRef = this.dialog.open(ContactFeedComponent, {
  //       disabledClose: true,
  //       data: { name: this.contact.name },
  //     });
  //     dialogRef.afterClosed().subscribe((result) => {
  //       // TODO do something here if Follow is clicked
  //     });
  //   }, 500);
  // }
}
