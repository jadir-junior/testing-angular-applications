import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { constants } from '../modal.constants';

@Component({
  selector: 'app-invalid-email-modal',
  templateUrl: './invalid-email-modal.component.html',
  styleUrls: ['./invalid-email-modal.component.scss'],
})
export class InvalidEmailModalComponent implements OnInit {
  invalidEmailMessage = constants.INVALID_EMAIL_ADDRESS_MESSAGE;

  constructor(public dialogRef: MatDialogRef<InvalidEmailModalComponent>) {}

  ngOnInit(): void {}
}
