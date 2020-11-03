import { Component, OnInit } from '@angular/core';

import { Contact } from './shared';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
  contacts: Contact[] = [];

  constructor() {}

  ngOnInit(): void {}
}
