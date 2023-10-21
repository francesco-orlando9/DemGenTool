import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragZoneComponent } from '../../components/drag-zone.component';
import { DropZoneComponent } from '../../components/drop-zone.component';
import { PropertiesPanelComponent } from '../../components/properties-panel.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, DragZoneComponent, DropZoneComponent, PropertiesPanelComponent],
  template: `
    <main id="home-page">
      <section id="drag-zone">
        <app-drag-zone />
      </section>
      <section id="drop-zone">
        <app-drop-zone />
      </section>
    </main>

  `,
  styles: [
    `
      #home-page {
        width: 100%;
        height: 100%;
        display: flex;
        gap: 2%;
      }

      #drag-zone {
        width: 23%;
        height: 100%;
        background: yellow;
      }

      #drop-zone {
        width: 75%;
        height: 100%;
        background: orange;
      }
    `
  ]
})
export class HomeComponent {

}
