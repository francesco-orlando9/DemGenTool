import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailBlockPreviewComponent } from './mail-block-preview.component';

describe('MailBlockPreviewComponent', () => {
  let component: MailBlockPreviewComponent;
  let fixture: ComponentFixture<MailBlockPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MailBlockPreviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MailBlockPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
