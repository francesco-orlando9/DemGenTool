import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MailBlockComponent } from './mail-block/mail-block.component';
import { MailBlockPreviewComponent } from './mail-block/mail-block-preview.component';
import { CdkDropList, DragDropModule } from '@angular/cdk/drag-drop';
import { MJMLBlock } from '../../utils/mjmlBlocks';
import { MailUiService } from '../../service/mail-ui.service';

@Component({
  selector: 'app-drag-zone',
  standalone: true,
  imports: [CommonModule, DragDropModule, MailBlockComponent, MailBlockPreviewComponent],
  template: `
    <section id="mail-sidemail">
        <ul
          class="mail"
          cdkDropList
          #mailList="cdkDropList"
          [cdkDropListData]="mailUiService.mjmlBlocks"
          cdkDropListSortingDisabled
          [cdkDropListConnectedTo]="[canvasList]"
          (cdkDropListDropped)="mailUiService.drop($event)"
          (cdkDropListExited)="mailUiService.exited($event)"
          (cdkDropListEntered)="mailUiService.entered()"
        >
          <li class="item" *ngFor="let mjmlBlock of mailUiService.mjmlBlocks" cdkDrag [cdkDragData]="mjmlBlock">
            <app-mail-block [props]="{mjmlBlock}" />
            <app-mail-block-preview  *cdkDragPreview [props]="{mjmlBlock}" />
          </li>
        </ul>
      </section>
  `,
  styles: [
    `
      #mail-sidemail { width: 100%; height: 100%; background: red }
      .item {  margin-bottom: 12px; padding: var(--padding); border: var(--border); background: #fff; cursor: move; list-style: none; }
      .mail { margin: 0; padding: 1rem 0.5rem; box-sizing: border-box }
      .mail { list-style: none }
      .drap-copy { display: flex; border: var(--border) }
      .drap-copy > div { flex: 1 }
      .drap-copy > div:first-child { border-right: var(--border) }
    `
  ]
})
export class DragZoneComponent {
  @Input() canvasList: CdkDropList<MJMLBlock[]>;

  mailUiService = inject(MailUiService);

}
