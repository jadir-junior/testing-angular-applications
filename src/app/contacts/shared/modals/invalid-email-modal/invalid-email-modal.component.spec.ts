import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef } from '@angular/material/dialog';
import { AppMaterialModule } from 'src/app/app.material.module';

import { InvalidEmailModalComponent } from './invalid-email-modal.component';

describe('InvalidEmailModalComponent', () => {
  let component: InvalidEmailModalComponent;
  let fixture: ComponentFixture<InvalidEmailModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppMaterialModule],
      declarations: [InvalidEmailModalComponent],
      providers: [{ provide: MatDialogRef, useValue: {} }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvalidEmailModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
