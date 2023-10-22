import { Component, Input, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from '../../../pages/home-page.component';
import { MJMLBlock } from '../../../utils/mjmlBlocks';

interface CanvasBlockPreviewProps {
  mjmlBlock: MJMLBlock;
}

@Component({
  selector: 'app-canvas-block-preview',
  standalone: true,
  imports: [CommonModule, forwardRef(() => HomePageComponent)],
  template: `
    <div>
      <p>{{ props?.mjmlBlock?.name }} Drop Preview</p>
    </div>
  `,
  styles: [
  ]
})
export class CanvasBlockPreviewComponent {

  @Input() props: CanvasBlockPreviewProps | null = null;
}
