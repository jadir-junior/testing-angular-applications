import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFeedComponent } from './contact-feed.component';

describe('ContactFeedComponent', () => {
  let component: ContactFeedComponent;
  let fixture: ComponentFixture<ContactFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactFeedComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactFeedComponent);
    component = fixture.componentInstance;
    component.name = 'lula';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
