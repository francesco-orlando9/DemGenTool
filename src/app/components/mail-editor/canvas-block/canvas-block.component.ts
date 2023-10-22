import { Component, Input, OnChanges, SimpleChanges, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkDrag } from '@angular/cdk/drag-drop';
import { MJML, MJMLBlock, baseMJMLTemplate } from '../../../utils/mjmlBlocks';
import { MjmlApiService } from "../../../service/mjml-api.service"

@Component({
  selector: 'app-canvas-block',
  standalone: true,
  imports: [CommonModule, CdkDrag],
  template: `
      <ng-container *ngIf="mjmlService.html$ | async">
        <div [innerHTML]="mjmlService.html$ | async"></div>
      </ng-container>

  `,
  styles: [
    `
      .desc { display: flex; justify-content: space-between; margin-top: 12px; font-size: 12px; color: rgba(0, 0, 0, 0.45) }
    `
  ]
})
export class CanvasBlockComponent implements OnChanges {
  @Input() mjmlBlock: MJMLBlock | null = null;

  mjmlService = inject(MjmlApiService);

  baseMJML = baseMJMLTemplate;

  ngOnChanges(changes: SimpleChanges): void {
    for (const propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        switch (propName) {
          case 'mjmlBlock': {
            const mjmlBlock = changes[propName].currentValue;
            this.convertMJMLtoHTML(mjmlBlock)
          }
        }
      }
    }
  }

  convertMJMLtoHTML(mjmlBlock: MJMLBlock) {
    const nBaseMjml: MJML = new Object({ ...this.baseMJML }) as MJML;
    const mjmlBody = nBaseMjml.children?.find(c => c.tagName === "mj-body");
    mjmlBody?.children?.push(mjmlBlock.mjml);

    if (mjmlBody) {
      nBaseMjml.children?.push(mjmlBody);
      this.mjmlService.convertMjmlToJson(nBaseMjml);
    }
  }
}
