import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasBlockPreviewComponent } from './canvas-block-preview.component';

describe('CanvasBlockPreviewComponent', () => {
  let component: CanvasBlockPreviewComponent;
  let fixture: ComponentFixture<CanvasBlockPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CanvasBlockPreviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CanvasBlockPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
