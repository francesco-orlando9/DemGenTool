import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasBlockComponent } from './canvas-block.component';

describe('CanvasBlockComponent', () => {
  let component: CanvasBlockComponent;
  let fixture: ComponentFixture<CanvasBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CanvasBlockComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CanvasBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
