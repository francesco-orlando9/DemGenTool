import { Component, Input, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from '../../../pages/home-page.component';
import { MJMLBlock } from '../../../utils/mjmlBlocks';

interface MailBlockPreviewProps {
  mjmlBlock: MJMLBlock;
}


@Component({
  selector: 'app-mail-block-preview',
  standalone: true,
  imports: [CommonModule, forwardRef(() => HomePageComponent)],
  template: `
    <div>
      <p>{{ props?.mjmlBlock?.name }} Drag Preview</p>
    </div>
  `,
  styles: [
  ]
})
export class MailBlockPreviewComponent {

  @Input() props: MailBlockPreviewProps | null = null;
}
