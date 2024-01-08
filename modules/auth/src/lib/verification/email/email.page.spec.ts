import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailPage } from './email.page';

describe('EmailPage', () => {
  let component: EmailPage;
  let fixture: ComponentFixture<EmailPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailPage]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
