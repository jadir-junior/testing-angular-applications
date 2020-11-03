import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef } from '@angular/material/dialog';
import { AppMaterialModule } from 'src/app/app.material.module';

import { InvalidPhoneNumberModalComponent } from './invalid-phone-number-modal.component';

describe('InvalidPhoneNumberModalComponent', () => {
  let component: InvalidPhoneNumberModalComponent;
  let fixture: ComponentFixture<InvalidPhoneNumberModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InvalidPhoneNumberModalComponent],
      imports: [AppMaterialModule],
      providers: [{ provide: MatDialogRef, useValue: {} }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvalidPhoneNumberModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
