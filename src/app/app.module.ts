import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppMaterialModule } from './app.material.module';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactEditComponent } from './contacts/contact-edit/contact-edit.component';
import { InvalidEmailModalComponent } from './contacts/shared/modals/invalid-email-modal/invalid-email-modal.component';
import { InvalidPhoneNumberModalComponent } from './contacts/shared/modals/invalid-phone-number-modal/invalid-phone-number-modal.component';
import { ContactDetailComponent } from './contacts/contact-detail/contact-detail.component';

import {
  ContactService,
  FavoriteIconDirective,
  ShowContactsDirective,
} from './contacts/shared';
import { RoutingModule } from './app-routing.module';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';
import { InMemoryDataService } from './in-memory-data.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { PhoneNumberPipe } from './contacts/shared/phone-number/phone-number-pipe';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NewContactComponent } from './contacts/new-contact/new-contact.component';
import { ContactFeedComponent } from './contacts/contact-feed/contact-feed.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    ContactDetailComponent,
    ContactEditComponent,
    ContactListComponent,
    NewContactComponent,
    ContactFeedComponent,
    PageNotFoundComponent,
    InvalidEmailModalComponent,
    InvalidPhoneNumberModalComponent,
    ShowContactsDirective,
    FavoriteIconDirective,
    PhoneNumberPipe,
  ],
  entryComponents: [
    InvalidEmailModalComponent,
    InvalidPhoneNumberModalComponent,
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  providers: [ContactService],
  bootstrap: [AppComponent],
})
export class AppModule {}
