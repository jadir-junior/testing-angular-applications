import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ContactFeedService } from '../shared/services/contact-feed.service';

@Component({
  selector: 'app-contact-feed',
  templateUrl: './contact-feed.component.html',
  styleUrls: ['./contact-feed.component.scss'],
})
export class ContactFeedComponent implements OnInit {
  name: string;
  updates: string[] = [];
  closeDisabled = true;

  constructor(
    @Optional() @Inject(MAT_DIALOG_DATA) data: any,
    private feed: ContactFeedService
  ) {
    // this.name = data.name;
  }

  ngOnInit(): void {
    this.closeDisabled = false;

    this.updates = this.feed.getFeed();
  }
}
