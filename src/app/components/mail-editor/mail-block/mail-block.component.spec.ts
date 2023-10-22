import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailBlockComponent } from './mail-block.component';

describe('MailBlockComponent', () => {
  let component: MailBlockComponent;
  let fixture: ComponentFixture<MailBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MailBlockComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MailBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
