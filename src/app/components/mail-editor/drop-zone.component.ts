import { AfterViewInit, ChangeDetectorRef, Component, EventEmitter, Output, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MJMLBlock } from '../../utils/mjmlBlocks';
import { CdkDropList, DragDropModule } from '@angular/cdk/drag-drop';
import { CanvasBlockComponent } from './canvas-block/canvas-block.component';
import { MailUiService } from '../../service/mail-ui.service';
import { CanvasBlockPreviewComponent } from './canvas-block/canvas-block-preview.component';

@Component({
  selector: 'app-drop-zone',
  standalone: true,
  imports: [CommonModule, DragDropModule, CanvasBlockComponent, CanvasBlockPreviewComponent],
  template: `
    <section id="mail-canvas"
        class="canvas"
        cdkDropList
        #canvasList="cdkDropList"
        [cdkDropListData]="mjmlBlocks"
        (cdkDropListDropped)="mailUiService.drop($event)"
      >
        <section id="mail-body">
          <div class="content">
            <div>
              <div class="item" *ngFor="let mjmlBlock of mjmlBlocks" cdkDrag>
                <app-canvas-block [mjmlBlock]="mjmlBlock" />
                <app-canvas-block-preview *cdkDropPreview  [props]="{mjmlBlock}" />
              </div>
            </div>
          </div>
        </section>

      </section>
  `,
  styles: [
    `
    #mail-canvas { width: 100%; height: 100%; background: yellow }
    .content { position: relative }
    .item {  margin-bottom: 12px; padding: var(--padding); border: var(--border); background: #fff; cursor: move; list-style: none; }
    .canvas { padding: var(--padding); box-sizing: border-box }
    .drap-copy { display: flex; border: var(--border) }
    .drap-copy > div { flex: 1 }
    .drap-copy > div:first-child { border-right: var(--border) }`
  ]
})
export class DropZoneComponent implements AfterViewInit {
  @ViewChild('canvasList') canvasList: CdkDropList;
  @Output() canvasListRef = new EventEmitter<CdkDropList>();

  public mjmlBlocks: Array<MJMLBlock> = [];

  cdr = inject(ChangeDetectorRef);
  mailUiService = inject(MailUiService);

  ngAfterViewInit(): void {
    // In order to avoid the error content change after checked
    // we wait for all the checks by the ChangeDetection to finish
    // and only then we emit the value
    Promise.resolve().then(() => {
      this.canvasListRef.emit(this.canvasList);
    });
  }
}
