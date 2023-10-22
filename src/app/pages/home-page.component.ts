import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragZoneComponent } from '../components/mail-editor/drag-zone.component';
import { DropZoneComponent } from '../components/mail-editor/drop-zone.component';
import { CdkDropList } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, DragZoneComponent, DropZoneComponent],
  template: `
    <main id="mail-editor">
      <app-drag-zone [canvasList]="canvasList"></app-drag-zone>
      <app-drop-zone (canvasListRef)="onCanvasListRefReceived($event)"></app-drop-zone>
    </main>
  `,
  styles: [
    `
      #mail-editor { width: 100%; height: 100%; display: grid; grid-template-columns: 20% 80% }
    `
  ]
})
export class HomePageComponent {
  public canvasList: CdkDropList;

  onCanvasListRefReceived(canvasList: CdkDropList): void {
    this.canvasList = canvasList;
  }
}
