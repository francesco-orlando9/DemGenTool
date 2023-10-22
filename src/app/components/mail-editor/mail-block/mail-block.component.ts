import { Component, Input, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from '../../../pages/home-page.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MJMLBlock } from '../../../utils/mjmlBlocks';

interface MailBlockProps {
  mjmlBlock: MJMLBlock;
}

@Component({
  selector: 'app-mail-block',
  standalone: true,
  imports: [CommonModule, forwardRef(() => HomePageComponent), DragDropModule],
  template: `
    <div class="item" *cdkDragPlaceholder>
      <a>{{ props?.mjmlBlock?.name }}</a>
    </div>
      <a>{{ props?.mjmlBlock?.name }}</a>
  `,
  styles: []
})
export class MailBlockComponent {

  @Input() props: MailBlockProps | null = null;
}
